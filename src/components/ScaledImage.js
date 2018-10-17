import React from 'react'
import proptypes from 'prop-types'
import { Image, ActivityIndicator } from 'react-native'
import stylish from 'stylish'


export default class ScaledImage extends Component {
	static defaultProps = {
		image: null,
		url: null,
		width: '100%',
		height: null,
		style: null
	}

	static propTypes = {

	}

	state = {
		loading: true
	}

	componentDidMount() {
		
	}

	render() {


		return loading ? (
			<View style={["", { width: this.props.width }]}>
				<ActivityMonitor />
			</View>
		) : (
			<Image style={stylish.resolve(this.props.styles)} />
		)
	}
}