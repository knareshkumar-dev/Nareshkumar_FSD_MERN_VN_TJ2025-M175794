import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PaymentForm = ({ total, onPayment }) => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onPayment({ success: true, transactionId: 'TXN' + Date.now() });
  };

  return (
    <motion.form 
      className="payment-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3>Payment Details</h3>
      <div className="form-group">
        <input
          type="text"
          placeholder="Card Number"
          value={paymentData.cardNumber}
          onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
          required
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          placeholder="MM/YY"
          value={paymentData.expiry}
          onChange={(e) => setPaymentData({...paymentData, expiry: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="CVV"
          value={paymentData.cvv}
          onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Cardholder Name"
          value={paymentData.name}
          onChange={(e) => setPaymentData({...paymentData, name: e.target.value})}
          required
        />
      </div>
      <div className="total">Total: ${total}</div>
      <button type="submit" className="pay-btn">
        Pay Now ${total}
      </button>
    </motion.form>
  );
};

export default PaymentForm;