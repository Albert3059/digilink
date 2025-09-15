import { type NextRequest, NextResponse } from "next/server"
import { ContactFormService } from "@/lib/aws-config"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    console.log("[v0] Environment variables check:", {
      hasRegion: !!process.env.AWS_REGION,
      hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
      hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
      hasTableName: !!process.env.AWS_DYNAMODB_TABLE_NAME,
      region: process.env.AWS_REGION,
      tableName: process.env.AWS_DYNAMODB_TABLE_NAME,
    })

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    console.log("[v0] Form submission received:", { name, email, messageLength: message.length })

    const contactService = new ContactFormService()

    try {
      const submission = await contactService.saveSubmission({
        name,
        email,
        message,
      })

      try {
        await resend.emails.send({
          from: "Digilink Contact Form <info@digilinkict.co.za>",
          to: ["info@digilinkict.co.za"], // Your email address
          subject: `Digilink IT Contact Form Submission from ${name}`,
          html: `
            <h2>Digilink IT Solutions New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
            <p><strong>Submission ID:</strong> ${submission.id}</p>
            <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
          `,
        })
        console.log("[v0] Email notification sent successfully")
      } catch (emailError) {
        console.error("[v0] Email notification failed:", emailError)
        // Don't fail the entire request if email fails
      }

      console.log("[v0] Contact form submission processed:", submission.id)

      return NextResponse.json(
        {
          message: "Thank you for your message! We will get back to you within 24 hours.",
          submissionId: submission.id,
        },
        { status: 200 },
      )
    } catch (awsError) {
      console.error("[v0] AWS service error:", awsError)

      // Fallback: Still accept the submission but log the AWS error
      console.log("[v0] Contact form submission (AWS fallback):", {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json(
        { message: "Thank you for your message! We will get back to you within 24 hours." },
        { status: 200 },
      )
    }
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const contactService = new ContactFormService()
    const submissions = await contactService.getSubmissions()

    return NextResponse.json({ submissions }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error retrieving submissions:", error)
    return NextResponse.json({ error: "Failed to retrieve submissions" }, { status: 500 })
  }
}
