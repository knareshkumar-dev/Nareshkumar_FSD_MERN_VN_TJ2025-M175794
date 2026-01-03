import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PaymentSystem = ({ total, onPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handlePayment = (e) => {
    e.preventDefault();
    
    // Simulate payment processing
    setTimeout(() => {
      onPayment({
        success: true,
        transactionId: 'TXN' + Date.now(),
        method: paymentMethod,
        amount: total
      });
    }, 2000);
  };

  return (
    <div className="payment-system">
      <h3>💳 Payment Options</h3>
      
      <div className="payment-methods">
        {['card', 'paypal', 'apple', 'google'].map(method => (
          <motion.button
            key={method}
            className={`payment-method ${paymentMethod === method ? 'active' : ''}`}
            onClick={() => setPaymentMethod(method)}
            whileHover={{ scale: 1.05 }}
            style={{
              padding: '15px',
              margin: '5px',
              border: paymentMethod === method ? '2px solid #2196f3' : '1px solid #ddd',
              borderRadius: '8px',
              background: paymentMethod === method ? '#f0f8ff' : 'white'
            }}
          >
            {method === 'card' && '💳 Credit Card'}
            {method === 'paypal' && '🅿️ PayPal'}
            {method === 'apple' && '🍎 Apple Pay'}
            {method === 'google' && '🔵 Google Pay'}
          </motion.button>
        ))}
      </div>

      {paymentMethod === 'card' && (
        <form onSubmit={handlePayment} style={{ marginTop: '20px' }}>
          <div style={{ display: 'grid', gap: '15px' }}>
            <input
              type="text"
              placeholder="Card Number"
              value={cardData.number}
              onChange={(e) => setCardData({...cardData, number: e.target.value})}
              style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }}
              required
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <input
                type="text"
                placeholder="MM/YY"
                value={cardData.expiry}
                onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
                style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }}
                required
              />
              <input
                type="text"
                placeholder="CVV"
                value={cardData.cvv}
                onChange={(e) => setCardData({...cardData, cvv: e.target.value})}
                style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Cardholder Name"
              value={cardData.name}
              onChange={(e) => setCardData({...cardData, name: e.target.value})}
              style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }}
              required
            />
          </div>
          
          <div style={{ 
            background: '#f8f9fa', 
            padding: '20px', 
            borderRadius: '8px', 
            margin: '20px 0',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Subtotal:</span>
              <span>${total}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Taxes & Fees:</span>
              <span>${Math.round(total * 0.1)}</span>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
              <span>Total:</span>
              <span>${total + Math.round(total * 0.1)}</span>
            </div>
          </div>

          <motion.button
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(135deg, #1a237e 0%, #2196f3 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            🔒 Pay Securely ${total + Math.round(total * 0.1)}
          </motion.button>
        </form>
      )}

      {paymentMethod !== 'card' && (
        <motion.button
          onClick={handlePayment}
          style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(135deg, #1a237e 0%, #2196f3 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '20px'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Continue with {paymentMethod}
        </motion.button>
      )}
    </div>
  );
};

export default PaymentSystem;