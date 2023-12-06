import './HomePage.scss';

import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main className='home'>
            <article className='home-main'>
                <section className='home-main__writing'>
                    <h1 className='home-main__writing-heading'>
                        Cain's Jawbone
                    </h1>
                    <p className='home-main__writing-words'>Helping Myself Figure Myself Out</p>
                </section>
                <div className='home-main__buttons'>
                    <Link to='/pages' className='home-main__buttons-button'>
                        PAGES
                    </Link>
                    <button className='home-main__buttons-button'>
                        SANDBOX
                    </button>
                </div>
            </article>
        </main>
    )
}

export default HomePage;