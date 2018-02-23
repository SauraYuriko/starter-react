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
const appData = {
  browsersLocale : window.navigator.languages[0]
}

export default function localeReducer (state = appData, action) {
  if (state.browsersLocale === 'ja' || state.browsersLocale === 'ja-JP') {
    Object.assign({}, state, {
      browsersLocale: 'ja'
    })
  }
  else Object.assign({}, state, {
    browsersLocale: 'en'
  })
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
