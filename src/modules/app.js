// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_BROWSERS_LOCALE = 'LOAD_BROWSERS_LOCALE'

// ------------------------------------
// Actions
// ------------------------------------
export const loadBrowsersLocale = () => {
  return {
    type    : LOAD_BROWSERS_LOCALE,
  }
}

export const actions = {
  loadBrowsersLocale
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [LOAD_BROWSERS_LOCALE] : (state, action) => Object.assign({}, state, action.payload),
}


// ------------------------------------
// Reducer
// ------------------------------------
export default function localeReducer (state = {}, action) {
  state = window.navigator.languages[0]
  if (state === 'ja' || state === 'ja-JP') {
    state : 'ja'
  }
  else state : 'en'
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
