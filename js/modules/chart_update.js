import {updateInterval, chartLimit} from './env.js';

// Initialize an empty array to hold timestamps
var timeData = [];

// Function to generate a new timestamp
function generateTimestamp() {
    return new Date().toLocaleTimeString(); // You can adjust the timestamp format
}

// Function to update the chart with new data
function updateChart(data, mqtt_route, graph_name) {
    // Generate a new timestamp and add it to the timeData array
    timeData.push(generateTimestamp());

    // Limit the number of timestamps to display (e.g., 10)
    if (timeData.length > chartLimit) {
        timeData.shift(); // Remove the oldest timestamp
    }

    // New options for the chart with updated timestamps
    var refreshOption = {
	title: {
		text: graph_name
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: [mqtt_route]
	},
        xAxis: {
            type: 'category',
            data: timeData // Use the updated timestamps
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: data, // Add data after refresh here
                type: 'line'
            }
        ]
    };

    // return the new options
    return refreshOption;
}

export {updateChart};