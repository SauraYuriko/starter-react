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
// Reducer
// ------------------------------------
export default function localeReducer (state = {}, action) {
  const browsersLocale = window.navigator.languages[0]
  if (browsersLocale === 'ja' || browsersLocale === 'ja-JP') {
    return Object.assign({}, state, {
      browsersLocale: 'ja'
    })
  }
  else {
    return Object.assign({}, state, {
    browsersLocale: 'en'
    })
  }
}
