import { MetricMap } from ".";

const getLCP = () => {
	new PerformanceObserver((entryList) => {
		for (const entry of entryList.getEntries()) {
			console.log("LCP", entry?.startTime, entry);
		}
	}).observe({ type: MetricMap.LCP, buffered: true });
};
