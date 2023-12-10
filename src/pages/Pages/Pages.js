import './Pages.scss';

import pages from '../../data/pages.json';
import page56 from '../../assets/images/pages/page_56.png';

import { Link } from 'react-router-dom';

function Pages() {
    return (
        <>
            <h1>hi</h1>
            <div className='pages'>
                {
                    pages.map( page => (
                        <Link to={`/page/${page.page_num}`} className="pages__page" key={page.page_num}>
                            <p>[{page.page_num}]</p>
                            <img src={page56} alt='scan of original page' />
                        </Link>
                    ))
                }
            </div>
            
        </>
    )
}

export default Pages;