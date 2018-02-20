import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData, FormattedMessage as FM} from 'react-intl'
import ja from 'react-intl/locale-data/ja'
import en from 'react-intl/locale-data/en'
import jaDescription from './jaDescription'
import enDescription from './enDescription'
// import App from '../../../components/App'

addLocaleData([...ja, ...en])

export class Impact extends Component {
  componentDidMount () {
    this.props.loadInitialView()
  }

  getIntlProviderMessage = (lang) => {
    if (lang === 'ja') {
      return jaDescription
    } else if (lang === 'en') {
      return enDescription
    }
  }

  render () {
    return (
      <IntlProvider
        locale={this.props.app}
        messages={this.getIntlProviderMessage(this.props.app)}
      >
        <div className='impact'>
          <h2 className='impact-h2'>
            <FM id='title'/>
          </h2>
          <div className='impact-div'>
            <h5><FM id='cvssSeverityV3' />{':'}</h5>
            <dl>
              <dt><FM id='baseScoreV3' />{': ' + this.props.impact.baseScoreV3}</dt>
              <dt><FM id='vector' />{': ' + this.props.impact.vectorV3}</dt>
              <dt><FM id='impactScore' />{': ' + this.props.impact.impactScoreV3}</dt>
              <dt><FM id='exploitabilityScoreV3' />{': ' + this.props.impact.exploitabilityScoreV3}</dt>
            </dl>
          </div>
          <div className='impact-div'>
            <h5><FM id='cvssMetricsV3' />{':'}</h5>
            <dl>
              <dt><FM id='attackVector' />{': ' + this.props.impact.attackVector}</dt>
              <dt><FM id='attackComplexity' />{': ' + this.props.impact.attackComplexity}</dt>
              <dt><FM id='privilegesRequired' />{': ' + this.props.impact.privilegesRequired}</dt>
              <dt><FM id='userInteraction' />{': ' + this.props.impact.userInteraction}</dt>
              <dt><FM id='scope' />{': ' + this.props.impact.scope}</dt>
              <dt><FM id='confidentiality' />{': ' + this.props.impact.confidentiality}</dt>
              <dt><FM id='integrity' />{': ' + this.props.impact.integrity}</dt>
              <dt><FM id='availability' />{': ' + this.props.impact.availability}</dt>
            </dl>
          </div>
          <div className='impact-div'>
            <h5><FM id='cvssSeverityV2' />{':'}</h5>
            <dl>
              <dt><FM id='baseScoreV2' />{': ' + this.props.impact.baseScoreV2}</dt>
              <dt><FM id='vector' />{': ' + this.props.impact.vectorV2}</dt>
              <dt><FM id='impactSubscore' />{': ' + this.props.impact.impactScoreV2}</dt>
              <dt><FM id='exploitabilitySubscoreV2' />{': ' + this.props.impact.exploitabilityScoreV2}</dt>
            </dl>
          </div>
          <div className='impact-div'>
            <h5><FM id='cvssMetricsV2' />{':'}</h5>
            <dl>
              <dt><FM id='accessVector' />{': ' + this.props.impact.accessVecotr}</dt>
              <dt><FM id='accessComplexity' />{': ' + this.props.impact.accessCompexity}</dt>
              <dt><FM id='authentication' />{': ' + this.props.impact.authentication}</dt>
              <dt><FM id='disclosureInformation' />{': ' + this.props.impact.impactType}</dt>
            </dl>
          </div>
        </div>
      </IntlProvider>
    )
  }
}

Impact.propTypes = {
  loadInitialView: PropTypes.func,
  impact: PropTypes.object,
}

export default Impact
