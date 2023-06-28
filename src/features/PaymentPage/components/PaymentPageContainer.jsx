import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import axios from 'axios'
import CheckOutForm from './CheckOutForm'
import './AppStripe.css'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(
  'pk_test_51NNG0pKltfnBEaa8MUElW7nX4fbZpfmVRmlIHtXJ3rPiqWAyZlFzo5KRvAIz7qqf1bCY7XZTJOpCbe1eeKgklZm200i9XuKodG'
)

export default function App() {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const fetchData = async () => {
      try {
        const response = await axios.post(
          '/create-payment-intent',
          {
            items: [{ id: 'xl-tshirt' }],
          },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )

        const data = response.data
        setClientSecret(data.clientSecret)
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      )}
    </div>
  )
}
