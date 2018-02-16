import { connect } from 'react-redux'
import { actions as mapDispatchToProps } from '../modules/impact'
import Impact from '../components/Impact'

const mapStateToProps = (state) => ({
  impact : state.impact
})

export default connect(mapStateToProps, mapDispatchToProps)(Impact)
