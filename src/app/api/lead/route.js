export async function POST(request) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          phone: body.phone,
          business: body.business,
          industry: body.industry,
          message: body.message,
          source: 'stlautomate.com intake form',
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error('n8n webhook failed:', response.status);
        return Response.json({ success: false }, { status: 500 });
      }
    } else {
      console.log('LEAD SUBMISSION (no webhook configured):', JSON.stringify(body, null, 2));
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Lead API error:', err);
    return Response.json({ success: false }, { status: 500 });
  }
}
