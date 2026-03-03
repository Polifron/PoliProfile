import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'
import process from 'node:process'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 3000)

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

app.get('/api/health', (_req, res) => {
  res.json({ message: 'Mail API is running', status: 'OK' })
})

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body ?? {}

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, message',
      })
    }

    const to = process.env.EMAIL_TO || process.env.EMAIL_FROM

    if (!to || !process.env.EMAIL_FROM) {
      return res.status(500).json({
        error: 'Email server is not configured. Missing EMAIL_FROM or EMAIL_TO.',
      })
    }

    const subject = `Portfolio contact from ${name}`
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const html = `
      <h2>New Portfolio Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, '<br/>')}</p>
    `

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      replyTo: email,
      subject,
      text,
      html,
    })

    return res.status(200).json({
      message: 'Email sent successfully',
      messageId: info.messageId,
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error',
    })
  }
})

app.listen(port, () => {
  console.log(`Mail API server running on port ${port}`)
})
