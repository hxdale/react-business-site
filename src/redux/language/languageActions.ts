
export const CHANGE_LANGUAGE = "change_language";
export const ADD_LANGUAGE = "add_language";

interface AddLanguageAction {
  type: typeof ADD_LANGUAGE,
  payload: { name: string, code: string }
}

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE,
  payload: 'zh' | 'en'
}

export type LanguageActionTypes = AddLanguageAction | ChangeLanguageAction;

export const addLanguageActionCreator = (name: string, code: string): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code }
  }
}

export const changeLanguageActionCreator = (languageCode: 'zh' | 'en'): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode
  }
}