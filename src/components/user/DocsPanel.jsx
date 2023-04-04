import { DocumentCards } from './DocumentCards'

export default function DocsPanel() {


    return (
        <div className="docs-panel">
            <div className="search-sort">
                <input type="text" id="search-bar" placeholder="Search" />
                <select name="sort-by" id="sort-by">
                    <option value="" disabled>Sort By</option>
                    <option value="">Date Diagnosed</option>
                    <option value="">Severity</option>
                    <option value="">Type</option>
                </select>
            </div>
            <hr />

            <div className="record-group">
                <h1 className="group-label">Records</h1>
                <DocumentCards />
            </div>
        </div>
    )
}