import { useParams } from "react-router-dom";

import pages from '../../data/pages.json';
import Line from "../../components/Line/Line";
import './Page.scss';

function Page() {
    const { pageNum } = useParams();

    const page = pages.find( page => page.page_num == pageNum);
    const pageContent = page.content;

    return (
        <>
            <p>hello</p>
            <div className="thing">
                {
                    pageContent.map( line => (
                        <Line key={line.page_num} line={line} authorsReference={page.authors_referenced}></Line>
                    ))
                }
            </div>
        </>
    )
}

export default Page;