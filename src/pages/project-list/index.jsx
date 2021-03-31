import { ListPage } from './list';
import { SearchPanel } from './search-panel';

export const ProjectListPage = () => {
    return (
        <div className="project-list-page">
            <SearchPanel></SearchPanel>
            <ListPage></ListPage>
        </div>
    )
};