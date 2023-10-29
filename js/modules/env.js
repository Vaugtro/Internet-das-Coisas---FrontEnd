// Define an interval for updating the chart (in milliseconds)
// WARN: Must be bigger than the MQTT server interval defined in the ESP332 code (default: 1000ms)
const updateInterval = 1000; // 1 second (adjust as needed)

 // Define the chart y-axis limit
const chartLimit = 10;

// Export environmental variables
export {updateInterval, chartLimit};