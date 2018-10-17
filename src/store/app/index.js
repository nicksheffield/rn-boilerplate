import { Image } from 'react-native'
import { all, put } from 'redux-saga/effects'
import { handleActions } from 'redux-actions'
import { createAllActions, handleError, takeLatest } from '../stateUtils'
import NavigationService from '../../utils/NavigationService'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const actions = {
	init: createAllActions('app-init')
}

const defaultState = {
	initialized: false
}

export const reducer = handleActions({
	[actions.init.success]: (state) => ({ ...state, initialized: true }),
}, defaultState)


export const saga = function* () {
	yield all([
		takeLatest(actions.init.request, appInit)
	])
}

function* appInit() {
	try {
		yield all([
			delay(1000)
		])

		// yield prefetchImages(arrayOfImageUrlsHere)

		put(actions.init.success())
		
		NavigationService.navigate('Home')
	} catch(error) {
		handleError(error)
		put(actions.init.failure())
	}
}

function* prefetchImages(urls) {
	for (let i=0; i<urls.length; i++) {
		if (urls[i]) Image.prefetch(urls[i]);
	}
}