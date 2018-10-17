import React, { Component } from 'react'
import { View } from 'react-native'


export default class Dimens extends Component {

	state = {
		width: 0,
		height: 0
	}

	onLayout = () => {
		this.boxRef.measure((ox, oy, width, height) => {
			this.setState({ width, height })
		})
	}

	render() {
		const { width, height } = this.state

		return (
			<View ref={x => this.boxRef = x} onLayout={this.onLayout}>
				{this.props.children({ width, height })}
			</View>
		)
	}
}