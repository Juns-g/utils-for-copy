const getServerTiming = () => {
	new PerformanceObserver((list) => {
		for (const entry of list.getEntries()) {
			console.log("Server Timing", entry.serverTiming);
		}
	}).observe({
		type: "navigation",
		buffered: true,
	});
};
