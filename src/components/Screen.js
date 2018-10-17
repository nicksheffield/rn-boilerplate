import React from 'react'
import { View } from './stylish'


export default props => (
	<View>
		<View style="h:20 bg:tomato" />
		<View {...props} style={["p:2u", props.style]} />
	</View>
)