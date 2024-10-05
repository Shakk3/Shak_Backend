const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const imageRoutes = require('./routes/imgRouter');
const sequelize = require('./config/database');

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/img', imageRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}).catch(err => {
  console.log('Error syncing database:', err);
});
