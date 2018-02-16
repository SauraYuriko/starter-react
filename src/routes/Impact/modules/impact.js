// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_INITIAL_VIEW = 'LOAD_INITIAL_VIEW'
export const CHANGE_LOCALE = 'CHANGE_LOCALE'

// ------------------------------------
// Actions
// ------------------------------------
export const loadInitialView = () => {
  return {
    type    : LOAD_INITIAL_VIEW,
    payload: impactData,
  }
}

export const changeLocale = (lang) => {
  return {
    type    : CHANGE_LOCALE,
    payload: lang,
  }
}

export const actions = {
  loadInitialView, changeLocale
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const impactData = {
  baseScoreV3 : 7.8,
  vectorV3 : 'CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H (legend)',
  impactScoreV3 : 5.9,
  exploitabilityScoreV3 : 1.8,
  attackVector : 'Local',
  attackComplexity : 'Low',
  privilegesRequired : 'Low',
  userInteraction : 'None',
  scope : 'Unchanged',
  confidentiality : 'High',
  integrity : 'High',
  availability : 'High',
  baseScoreV2 : 7.2,
  vectorV2 : '(AV:L/AC:L/Au:N/C:C/I:C/A:C) (legend)',
  impactScoreV2 : 10.0,
  exploitabilityScoreV2 : 3.9,
  accessVecotr : 'Locally exploitable',
  accessCompexity : 'Low',
  authentication : 'Not required to exploit',
  impactType : 'Allows unauthorized disclosure of information; Allows unauthorized modification; Allows disruption of service'
}

const ACTION_HANDLERS = {
  [LOAD_INITIAL_VIEW] : (state, action) => Object.assign({}, state, action.payload),
  [CHANGE_LOCALE] : (state, action) => Object.assign({}, state, action.payload),
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function impactReducer (state = {locale: 'en'}, action) {
  if (action.type === 'CHANGE_LOCALE') {
    return Object.assign({}, state, { locale: action.payload })
  }
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
