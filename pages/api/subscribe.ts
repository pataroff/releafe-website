import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' }) // Block other methods
  }

  try {
    const { email } = req.body
    if (!email) {
      return res.status(400).json({ message: 'Email is required' })
    }

    const MAILERLITE_API_URL = process.env.MAILERLITE_API_URL
    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY

    const response = await axios.post(
      MAILERLITE_API_URL,
      { email }, // Include other fields if needed
      {
        headers: {
          Authorization: `Bearer ${MAILERLITE_API_KEY}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )

    res.status(response.status).json(response.data)
  } catch (error: any) {
    res
      .status(error?.response?.status || 500)
      .json({ message: error?.response?.data || 'Internal Server Error' })
  }
}
