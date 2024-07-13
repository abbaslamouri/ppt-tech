'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESENE_API_KEY)

export const sendMail = async (data: any) => {
  const html = `
    <h1>You have receibed an email from PPF Tech site</h1>
    <p>name: ${data.name}</p>
    <p>country: ${data.country}</p>
    <p>Phone: ${data.phone}</p>
    <p>Subject: ${data.subject}</p>
    <p>Message: ${data.message}</p>
    <p>Date: ${new Date()}</p>
    `
  const result = await resend.emails.send({
    from: 'YRL Consulting <support@yrl-tech.com>',
    to: data?.email,
    subject: 'Email message from PPF Tech ',
    html,
  })
  console.log('ERROR', result)
  if (result.error) return { status: 'fail' }
  return { status: 'success' }
}
