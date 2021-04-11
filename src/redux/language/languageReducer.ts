
import { ADD_LANGUAGE, CHANGE_LANGUAGE, LanguageActionTypes } from './languageActions'
interface LanguageState {
  language: 'en' | 'zh';
  languageList: {
    name: string,
    code: string
  }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [{ name: '中文', code: 'zh' }, { name: '英文', code: 'en' }]
}
export default (state = defaultState, action: LanguageActionTypes) => {
  switch (action.type) {
    case ADD_LANGUAGE:
      return { ...state, languageList: [...state.languageList, action.payload] };
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state
  }
}