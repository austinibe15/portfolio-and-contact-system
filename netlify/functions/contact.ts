import type { Handler } from "@netlify/functions";
import mysql from "mysql2/promise";
import { Resend } from "resend";
import fs from "node:fs";
import path from "node:path";

const resend = new Resend(process.env.RESEND_API_KEY);

const ca = fs.readFileSync(
  path.join(process.cwd(), "netlify", "functions", "ca.pem"),
  "utf8"
);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Method not allowed",
      }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "All fields are required.",
        }),
      };
    }

    if (name.length > 100) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Name is too long.",
        }),
      };
    }

    if (email.length > 255) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Email is too long.",
        }),
      };
    }

    if (subject.length > 255) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Subject is too long.",
        }),
      };
    }

    if (message.length > 5000) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Message is too long.",
        }),
      };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Please provide a valid email address.",
        }),
      };
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: {
        ca,
        rejectUnauthorized: true,
      },
    });

    try {
      await connection.execute(
        `
          INSERT INTO contact_messages
          (name, email, subject, message)
          VALUES (?, ?, ?, ?)
        `,
        [name, email, subject, message]
      );
    } finally {
      await connection.end();
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const from =
      process.env.EMAIL_FROM ||
      "Portfolio Contact <onboarding@resend.dev>";

    const to =
      process.env.CONTACT_EMAIL ||
      "austinibe15@gmail.com";

    console.log("Attempting email delivery:", {
      from,
      to,
      hasResendApiKey: Boolean(process.env.RESEND_API_KEY),
    });

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
      text: `
New Portfolio Contact

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend email error:", error);

      return {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message:
            "Your message was saved, but the email notification could not be sent.",
          error: error.message || String(error),
        }),
      };
    }

    console.log("Email sent successfully:", data?.id);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Message sent successfully.",
      }),
    };
  } catch (error) {
    console.error("Contact function error:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : String(error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Something went wrong. Please try again.",
        error: errorMessage,
      }),
    };
  }
};