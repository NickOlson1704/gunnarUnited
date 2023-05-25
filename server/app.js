const express = require('express');
const activityRoutes = require('./routes/activityRoutes');

const app = express();

app.use(express.json());

// Mount the activity routes
app.use('/activities', activityRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});