import { connect } from 'react-redux'
import pick from 'ramda/src/pick'


export default (arr = []) => (Component) => connect(pick(arr))(Component)