import {start} from "./chart.js";

//const client = mqtt.connect("ws://broker.iot.com");

const client = mqtt.connect("ws://test.mosquitto.org:8080");

// Limiting the number of listeners to 100
client.setMaxListeners(5);

start("ir", "IR", 600, 400, client);