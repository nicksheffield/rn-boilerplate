import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import connect from './utils/decorators/connect'
import NavigationService from './utils/NavigationService'
import RootNavigator from './nav'
import store from './store'
import { actions as appActions } from './store/app'
import './styles'


@connect()
class App extends Component {
	componentDidMount() {
		this.props.dispatch(appActions.init.request())
	}

	render() {
		return (
			<>
				<StatusBar
					translucent={true}
					backgroundColor="tomato"
					barStyle="light-content"
				/>
				<RootNavigator
					ref={x => NavigationService.setTopLevelNavigator(x)}
				/>
			</>
		)
	}
}


export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}
