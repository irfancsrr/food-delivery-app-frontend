import React from 'react'

const Cancel = () => {
  return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>❌ Payment Cancelled</h1>
      <p>Your payment was not completed. You can try again.</p>
      <a href="/checkout">Retry Payment</a>
    </div>
  )
}

export default Cancel