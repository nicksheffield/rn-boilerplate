import { handleActions } from 'redux-actions'
import { createAllActions, createMetaActions } from '../stateUtils'

export const actions = {
	meta: createMetaActions('example'),
	get: createAllActions('example-get'),
}

const defaultState = []

export default handleActions({
	[actions.get.success]: (state, { payload }) => [...payload]
}, defaultState)