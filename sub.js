// MQTT subscriber
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://148.70.212.82:3838')
var topic = '/testmsg'

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(topic.toString())
    console.log(message)
})

client.on('connect', ()=>{
    client.subscribe(topic)
    client.subscribe("ktLamp")
    client.subscribe("ctLamp")
    client.subscribe("wsLamp")
    client.subscribe("sfLamp")
})