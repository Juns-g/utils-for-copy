import { MetricMap } from ".";

const getFP = () => {
	const paintList = performance.getEntriesByType("paint");
	const FP = paintList.find((i) => i.name === MetricMap.FP);
	console.log("FP", FP?.startTime, FP);
	return FP?.startTime;
};
