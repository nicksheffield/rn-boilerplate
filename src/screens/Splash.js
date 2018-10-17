import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native' 
import { View, Text } from '../components/stylish'


export default class Splash extends Component {
	render() {
		return (
			<View style="col h:100% jc:center ai:center bg:tomato">
				<ActivityIndicator color="peachpuff" size="large" />
				<Text style="txt:peachpuff fz:050 mt:20 bold italic">
					{['Heyo!', 'What up?', 'Replace me!'][parseInt(Math.random()*3)]}
				</Text>
			</View>
		)
	}
}
