// WARN: each graph must have the same name as the MQTT route in the ESP32 code
import {updateChart} from './modules/chart_update.js';
import {updateInterval, chartLimit} from './modules/env.js';

function start(mqtt_route, graph_name, width, height, client){

	function createElement(){

		// Subscribe to a specific topic
		client.on('connect', function () {
			client.subscribe('pin/status/' + mqtt_route , function (err) {
			if (!err) {
				console.log('Subscribed to the topic');
			}
			});
		});
		
		// Create new element for chart
		var element = document.createElement('div');

		element.setAttribute('id', mqtt_route);
		element.setAttribute('style', 'width: ' + width + 'px; height: ' + height + 'px;');

		document.body.appendChild(element);

		// Return the element for manipulation
		return document.getElementById(mqtt_route);
	}

	// Update data and chart
	function update() {
		// Receive and handle incoming messages
		client.on('message', function (topic, message) {
			
			// Handle the received message, update the frontend accordingly
			item = parseInt(message.toString());
			
		})

		setInterval(() => {
		// Add message or dummy data each time interval
		data.push(item);
		
		if (data.length > chartLimit) {
			data.shift(); // Remove the oldest timestamp
		}

		// Update your UI with the received data
		chart.setOption(updateChart(data, mqtt_route, graph_name));

		item = 0;
		
		}, updateInterval);
	}

	// Create the chart
	const DOM = createElement();
	const chart = echarts.init(DOM);
	var data = [];
	var item = 0;

	// Update the chart periodically
	update();

	}

export {start};