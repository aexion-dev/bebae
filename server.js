const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');
const compression = require('compression');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if(process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port: ' + port);
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirnam, '..', 'build', 'service-worker.js'));
});

//Get Stripe Checkout Session by ID
app.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
})

//Create Stripe Checkout Session
app.post('/create-checkout-session', async (req, res) => {
  console.log(req.body.items);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items,
    mode: 'payment',
    success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://example.com/cancel',
  });

  res.send({
    sessionId: session.id
  });
});

//Create Stripe Product
app.post('/create-stripe-product', async (req, res) => {
  console.log(req.body.product);
  const price = await stripe.prices.create({
    unit_amount: req.body.product.price,
    currency: 'usd',
    product_data: {
      name: req.body.product.name,
    }
  });

  res.send({
    stripeId: price.id
  });
});
