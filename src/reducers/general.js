export default function general(state = [], action) {
	switch (action.type) {
		case 'SET_PRAYER_TIMES':
			return state.prayer_times = action.prayer_times
		default:
			return state
	}
}