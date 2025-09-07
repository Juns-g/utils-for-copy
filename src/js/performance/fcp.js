import { MetricMap } from ".";

// biome-ignore lint/correctness/noUnusedVariables: <explanation>
const getFCP = () => {
	const paintList = performance.getEntriesByType("paint");
	const FCP = paintList.find((i) => i.name === MetricMap.FCP);
	console.log("FCP", FCP?.startTime, FCP);
	return FCP?.startTime;
};
