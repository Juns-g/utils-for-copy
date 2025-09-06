// https://es-toolkit.dev/zh_hans/reference/util/attemptAsync.html#attemptasync
// https://github.com/scopsy/await-to-js
/** biome-ignore-all lint/suspicious/noExplicitAny: <我就是想要用any> */

export function attemptAsync<T, U = Error>(
	promise: Promise<T>,
	errorExt?: object,
): Promise<[U, undefined] | [null, T]> {
	return promise
		.then<[null, T]>((r) => [null, r])
		.catch<[U, undefined]>((e) => [
			errorExt ? Object.assign({}, e, errorExt) : e,
			undefined,
		]);
}

export default attemptAsync;
