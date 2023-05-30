const express = require('express');
const activityRoutes = require('./routes/activityRoutes');

const app = express();

app.use(express.json());


app.use('/activities', activityRoutes);


app.listen(4000, () => {
  console.log('Server is running on port 4000');
});