import { all } from'redux-saga/effects'
import { takeLatest, putAction, handleError } from '../stateUtils'
import api from '../../utils/api'

import { actions } from './reducer'

export default function* () {
	yield all([
		takeLatest(actions.get.request, get)
	])
}

export function* get() {
	try {
		// let response = api.get('example-endpoint')
		let response = null

		yield putAction(actions.get.success, response)
		return response
	} catch(error) {
		handleError(error)
		yield putAction(actions.get.failure, error)
	}
}
