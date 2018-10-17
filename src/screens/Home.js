import React, { Component } from 'react'
import { Text } from '../components/stylish'
import Screen from '../components/Screen'


export default class Home extends Component {
	render() {
		return (
			<Screen>
				<Text style="fz:40 bold txt:tomato mt:1u mb:2u">Home</Text>
				<Text style="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nam ratione totam dolorum aspernatur porro incidunt quaerat esse, dolorem corrupti cupiditate sint expedita suscipit ab quibusdam? Commodi a voluptates possimus.</Text>
			</Screen>
		)
	}
}
