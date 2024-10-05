const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/Payment')

exports.createPaymentIntent = async (req, res) => {
    try{
        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });

        const payment = new Payment({
            amount,
            currency: 'usd',
            paymentIntentId: paymentIntent.id,
            status: 'pending',
        });

        await payment.save();
        return res.json({ Status: "Success"})
    }
    catch(err){
        console.log(err)
    }
}