const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/Payment');

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;

    console.log('Received amount:', amount); // Log the amount received

    // Ensure the amount is in cents for Stripe
    const amountInCents = amount * 100; // Convert dollars to cents
    console.log('Amount in cents:', amountInCents); // Log the converted amount

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'usd',
    });

    console.log('Payment Intent:', paymentIntent);

    // Save payment information in MongoDB
    const payment = new Payment({
      amount: (amountInCents / 100).toFixed(2), // Store the amount as a decimal in dollars
      paymentIntentId: paymentIntent.id,
    });
    await payment.save();

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
      paymentId: paymentIntent.id, // Optionally send the payment ID back
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
