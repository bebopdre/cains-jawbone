import './Pages.scss';

import pages from '../../data/pages.json';

import { Link } from 'react-router-dom';

function Pages() {
    return (
        <>
            <h1>hi</h1>
            <div className='pages'>
                {
                    pages.map( page => (
                        <Link to={`/page/${page.page_num}`} className="pages__page" key={page.page_num}>{page.page_num}</Link>
                    ))
                }
            </div>
            
        </>
    )
}

export default Pages;