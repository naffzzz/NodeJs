const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemsRoute = require('./Routes/Items');
const app = express();
const port = 3000;

// Connect to MongoDB (replace 'mongodb://localhost:27017/mydb' with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/expressJs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use(itemsRoute);

// Define your routes and handlers for CRUD operations here
app.get('/', (req, res) => {
    res.send('Server is running!');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
