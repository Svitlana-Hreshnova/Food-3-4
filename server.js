const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:3000/Food-database', { useNewUrlParser: true, useUnifiedTopology: true });

const registrationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String
});

const Registration = mongoose.model('Registration', registrationSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/submitRegistration', (req, res) => {
  const { name, phone, email } = req.body;

  const registration = new Registration({ name, phone, email });
  registration.save((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json({ message: 'Registration Successful', data });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
