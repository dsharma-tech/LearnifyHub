
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cor = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cor());
app.use(bodyParser.json());

const connectToDb = async() => {
  await mongoose.connect('mongodb+srv://dishasharma1048:jE8v4ALEZ37p16bM@backend.zn2ve1s.mongodb.net/backend?retryWrites=true&w=majority&appName=backend', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
}
connectToDb();

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already exists. Please sign in.' });
    }

    
    const newUser = new User({
      username,
      email,
      password
    });

    
    await newUser.save();

    res.status(201).json({ success: true, message: 'User signed up successfully.' });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }


});

app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found. Please sign up first.' });
    }

    const isMatch = (password===user.password)
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials. Please try again.' });
    }


    res.status(200).json({ success: true, message: 'User signed in successfully.' });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
