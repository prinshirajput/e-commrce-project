const Stripe = require("stripe");
// const stripe = Stripe("sk_test_51NVB4fSAYjRzkNqxQRNu23FLA4QULJYMTGcfHr6BpgSDZyDQ2ANX6LgMHUPvEIdR9kccW9iqTC0f3f4JVtmMRVg900LtsL29zJ");
// const stripe = Stripe("sk_test_51NbjlQSITM3GPJKcu4g6A7fwTzh55P5ENjpaHQ13rse84zglY3SxZCS1MYfwHX4z8HNnOQlAxCh8xifeTAQn79GS00QNsFUJKJ");
// const stripe = Stripe("sk_test_51NdTC3SBAHY7LBczS9wTqBr4nLD9Cyv6NPiMLglUtufcWjnx9CLulVgJE8e4rznS4RPc2kn4ijtZHrfg67cSN5wt00SCv1f5it");
// const stripe = Stripe("sk_test_51NdTC3SBAHY7LBczS9wTqBr4nLD9Cyv6NPiMLglUtufcWjnx9CLulVgJE8e4rznS4RPc2kn4ijtZHrfg67cSN5wt00SCv1f5it"); working
const stripe = Stripe("sk_test_51NnGHJIhuIlwtIW2ZwmAUsRgssyORiLvkQzUDCyLF5FMZS6vBRMa9QT13EB1O0clFD376yfGKuQxhLM0yU125yB000O8TH6sFz");

function createPaymentIntent(req, res) {
    return stripe.paymentIntents.create(
        {
            amount: parseInt(req.body.amount),
            currency: "usd",
            description: 'test',
            payment_method_types: ["card"],
        },
        function (err, paymentIntent) {
            // console.log("err", err);
            // console.log("paymentIntent", paymentIntent);
            if (err) {
                res.status(500).json(err.message);
            } else {
                res.status(201).json(paymentIntent);
            }
        }
    );
}

module.exports = {
    createPaymentIntent: createPaymentIntent
}