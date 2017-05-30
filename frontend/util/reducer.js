import deepFreeze from 'deep-freeze';

const Reducer = (reducer) => {
	const defaultInitialState = reducer(undefined, {});

	const internalReducerCommands = (initialState) => {
		return {
			withAction: (action) => {
				deepFreeze(initialState);
				const result = reducer(initialState, action);
				return {
					toEqualReturnState: (expectedState) => {
						expect(result).toEqual(expectedState);
					}
				};
			}
		};
	};

	return {
		withState: (state) => {
			const initialState = state || defaultInitialState;
			return internalReducerCommands(initialState);
		},
		...internalReducerCommands(defaultInitialState)
	};
}

export default Reducer;