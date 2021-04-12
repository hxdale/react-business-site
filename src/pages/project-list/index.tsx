// import { connect } from 'react-redux'
// import { Dispatch } from 'redux'
import { ListPage } from './list';
import { SearchPanel } from './search-panel';
import { useSelector } from '../../redux/hooks'
// import { useDispatch } from 'react-redux'

// import { RootSate } from '../../redux/store'
// import {
//   addLanguageActionCreator,
//   changeLanguageActionCreator
// } from '../../redux/language/languageActions'

// const mapStateToProps = (state: RootSate) => {
//   return {
//     language: state.language,
//     languageList: state.languageList
//   }
// };
// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     addLanguage: (name: string, code: string) => {
//       dispatch(addLanguageActionCreator(name, code));
//     },
//     changeLanguage: (code: 'zh' | 'en') => {
//       dispatch(changeLanguageActionCreator(code));
//     }
//   }
// };

export const ProjectListPage: React.FC = () => {

  const language = useSelector(state => state.language);
  // const languageList = useSelector(state => state.language);
  // const dispatch = useDispatch();
  return (
    <div className="project-list-page">
      <p><span>语言: </span> <strong>{language}</strong></p>
      <SearchPanel></SearchPanel>
      <ListPage></ListPage>
    </div>
  )
};