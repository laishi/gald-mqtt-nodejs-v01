// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://148.70.212.82:3838')
var topic = '/testmsg'
var message = 'my name is mqtt sub.js send'

client.on('connect', ()=>{
    client.publish(topic, message)
    // setInterval(()=>{
    //     console.log('Message sent!', message)
    // }, 5000)
})