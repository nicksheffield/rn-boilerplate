import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'

import Home from './screens/Home'
import Splash from './screens/Splash'


const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarIcon: ({ focused }) => <FontAwesome5 name="home" solid color="peachpuff" size={20} />
		}
	}
}, {
	initialRouteName: 'Home',
	tabBarOptions: {
		showLabel: false,
		activeBackgroundColor: 'tomato',
		inactiveBackgroundColor: '#f55033',
	}
})

const RootNavigator = createSwitchNavigator({
	Splash: Splash,
	Tabs: TabNavigator,
}, {
	initialRouteName: 'Splash',
	headerMode: 'none'
})

export default RootNavigator