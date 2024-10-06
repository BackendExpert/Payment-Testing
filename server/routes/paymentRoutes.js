const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController')

router.post('/payment', paymentController.createPaymentIntent);

module.exports = router;