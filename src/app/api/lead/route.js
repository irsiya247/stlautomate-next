const N8N_WEBHOOK_URL =
  process.env.N8N_WEBHOOK_URL ||
  "https://n8n.stlautomate.com/webhook/missed-lead-audit-hardening-v1";

function clean(value, maxLength = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value);
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json(
        { success: false, message: "Invalid request." },
        { status: 400 }
      );
    }

    // Honeypot field used by public lead forms. Return success without forwarding bots.
    if (clean(body.company_url, 200)) {
      return Response.json({ success: true });
    }

    const formType = clean(body.formType, 50) || "missed-lead-audit";
    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 40);
    const businessName = clean(
      body.business || body.business_name || body.company || body.company_name,
      160
    );
    const website = clean(body.website, 500);
    const message = clean(body.message, 3000);

    const lead = {
      form_type: formType,
      name,
      email,
      phone,
      business_name: businessName,
      company: businessName,
      business: businessName,
      industry: clean(body.industry, 100),
      website,
      best_time_to_call: clean(body.bestTime || body.best_time_to_call, 160),
      message,
      source:
        formType === "missed-lead-audit"
          ? "stlautomate.com missed lead audit form"
          : "stlautomate.com intake form",
      source_page:
        clean(body.source_page || body.page_url || body.referrer, 1000) ||
        "https://stlautomate.com/missed-lead-audit",
      submitted_at: new Date().toISOString()
    };

    if (
      !lead.name ||
      (!lead.email && !lead.phone) ||
      (lead.email && !isValidEmail(lead.email)) ||
      !lead.business_name ||
      !lead.message
    ) {
      return Response.json(
        {
          success: false,
          message:
            "Please include your name, email or phone, business name, and message."
        },
        { status: 400 }
      );
    }

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      cache: "no-store"
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error(
        "n8n webhook failed:",
        response.status,
        errorText.slice(0, 1000)
      );

      return Response.json(
        { success: false, message: "Submission failed." },
        { status: 502 }
      );
    }

    return Response.json({
      success: true,
      message: "Audit request received."
    });
  } catch (err) {
    console.error("Lead API error:", err);

    return Response.json(
      { success: false, message: "Submission failed." },
      { status: 500 }
    );
  }
}
