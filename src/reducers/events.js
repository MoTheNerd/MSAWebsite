export default function events(state = [], action) {
	switch (action.type) {
		case 'SET_USERS':
			return action.users
		case 'GET_USERS':
			return action.users
		default:
			return state
	}
}