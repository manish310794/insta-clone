import deepFreeze from 'deep-freeze';

const Selector = (selector) => {
	return {
		expect: (state, ...args) => {
			console.log(state);
			console.log(args);
			deepFreeze(state);
			const result = selector(state, ...args);
			return {
				toReturn: (expectedValue) => {
					expect(result).toEqual(expectedValue);
				}
			};
		}
	};
}

export default Selector;