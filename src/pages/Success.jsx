import React from 'react'

const Success = () => {
  return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ Payment Successful!</h1>
      <p>Thank you for your purchase. Your order has been confirmed.</p>
      <a style={{textDecoration:"underline"}} href="/">Go back to Home</a>
    </div>
  )
}

export default Success;