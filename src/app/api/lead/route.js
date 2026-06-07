export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, company, automation } = body;

    await fetch("https://hook.us2.make.com/8kec2dnxogj2pusai87ve7ecc5ba1d69", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, company, automation })
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false }, { status: 500 });
  }
}