import { Alert } from 'react-native'
import { createAction } from 'redux-actions'
import { put as originalPut, takeLatest as originalTakeLatest } from 'redux-saga/effects'

export const createAllActions = (name) => ({
	request: createAction(name + '-request'),
	success: createAction(name + '-success'),
	failure: createAction(name + '-failure'),
})

export const createMetaActions = (name) => ({
	loading: createAction(name + '-loading', () => ({ loading: true })),
	loaded: createAction(name + '-loaded', () => ({ loading: false })),
})

export const takeLatest = (actionCreator, fn) => {
	return originalTakeLatest(actionCreator().type, fn)
}

export const putAction = (actionCreator, payload) => {
	return originalPut(actionCreator(payload))
}

export const handleError = (error) => {
	let msg = error.errors ? error.errors.map(err => err.message).join(', ') : error.message
	console.log('Error', error)
	Alert.alert(msg)
}