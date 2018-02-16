import { connect } from 'react-redux'
import { actions as mapDispatchToProps } from '../modules/app'
import App from '../components/App'

const mapStateToProps = (state) => ({
  app : state.app
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
