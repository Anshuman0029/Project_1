const mongoose = require('mongoose');
const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
mongoose.connect('mongodb+srv://anshuman:9351919275@cluster0.kbo3ozz.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const Device = require('./models/device'); 
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = 5000;





app.post('/api/devices', (req, res) => {
  const { room, status, topic } = req.body;
  console.log(req.body)
  const data1 = JSON.stringify(req.body);
  console.log(data1);
  client.publish(topic, data1, () => {
      res.send('published message');
      console.log("published message")
  });
  
  

});



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});