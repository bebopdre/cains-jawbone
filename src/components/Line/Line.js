import './Line.scss';

import { useState, useEffect } from 'react';

function Line({line, authorsReference}) {
    const [lineClass, setLineClass] = useState('line');
    const [authorInfo, setAuthorInfo] = useState({});

    useEffect( () => {
        if(line.includes_quote) {
            setLineClass('line--highlight');
            
            const author = authorsReference.find( auth => (
                auth.id === line.reference_id
            ))
            setAuthorInfo(author);
        }
    }, []);

    return (
        <div >
            <span className={lineClass}>
                {line.content}
            </span>
            <div className='popup'>
                {authorInfo.title}
            </div>
        </div>
    )
}

export default Line;