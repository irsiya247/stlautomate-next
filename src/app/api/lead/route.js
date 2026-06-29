function clean(value, maxLength = 500) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot field used by public lead forms. Return success without forwarding bots.
    if (clean(body.company_url, 200)) {
      return Response.json({ success: true });
    }

    const formType = clean(body.formType, 50);
    const lead = {
      name: clean(body.name, 120),
      email: clean(body.email, 254),
      phone: clean(body.phone, 40),
      business: clean(body.business, 160),
      industry: clean(body.industry, 100),
      website: clean(body.website, 500),
      best_time_to_call: clean(body.bestTime, 160),
      message: clean(body.message, 3000),
      source:
        formType === 'missed-lead-audit'
          ? 'stlautomate.com missed lead audit form'
          : 'stlautomate.com intake form',
      submitted_at: new Date().toISOString(),
    };

    if (
      !lead.email ||
      !/^\S+@\S+\.\S+$/.test(lead.email) ||
      (formType === 'missed-lead-audit' && (!lead.business || !lead.phone))
    ) {
      return Response.json({ success: false }, { status: 400 });
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        console.error('n8n webhook failed:', response.status);
        return Response.json({ success: false }, { status: 500 });
      }
    } else {
      console.log('LEAD SUBMISSION (no webhook configured):', JSON.stringify(lead, null, 2));
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Lead API error:', err);
    return Response.json({ success: false }, { status: 500 });
  }
}
