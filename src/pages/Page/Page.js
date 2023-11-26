import { useParams } from "react-router-dom";

import pages from '../../data/pages.json';

function Page() {
    const { pageNum } = useParams();

    const page = pages.find( page => page.page_num == pageNum);
    const pageContent = page.content;
    let paragraph = '';

    for( let i = 0; i < pageContent.length; i++ ){
        let line = pageContent[i].content;
        
        for( let j = 0; j < line.length; j++ ){
            paragraph += line[j].content;
        }
    }
    console.log(pageContent)
    return (
        <>
            <p>hello</p>
            <p>{paragraph}</p>
        </>
    )
}

export default Page;