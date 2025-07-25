import { APIGatewayEvent } from "aws-lambda";

export const handler = async (event: APIGatewayEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { to, subject, text } = JSON.parse(event.body || "{}");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.VITE_RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Elevance Digital <noreply@email.chatterwise.io>",
        to,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend error:", errorText);
      return { statusCode: response.status, body: errorText };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error: unknown) {
    console.error("Email error:", error);
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { statusCode: 500, body: JSON.stringify({ error: errorMessage }) };
  }
};
