import { localeOptions, defaultLocale } from '../constants/config'

export const getCurrentLanguage = () => {
  let locale = defaultLocale;
  try {
    if (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) { locale = localStorage.getItem('currentLanguage'); }
  } catch (error) {
    console.log(">>>> src/utils/index.js : getCurrentLanguage -> error", error)
    locale = defaultLocale;
  }
  return locale;
}

export const setCurrentLanguage = (lang) => {
  try {
    localStorage.setItem('currentLanguage', lang)
  } catch (error) {
    console.log(">>>> src/utils/index.js : setCurrentLanguage -> error", error)
  }
}

  
export const getCurrentUser = () => {
  let user = null;
  try {
    user = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null;
  } catch (error) {
    console.log(">>>> src/utils/index.js : getCurrentUser -> error", error)
    user = null;
  }
  return user;
}

export const setCurrentUser = (user) => {
  try {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user');
    }
  } catch (error) {
    console.log(">>>> src/utils/index.js : setCurrentUser -> error", error)
  }
}
