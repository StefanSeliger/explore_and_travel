import React from 'react';

// Components
import FeaturedDestinationsItems from '../components/FeaturedDestinationsItems.js';



const Destinations = () => {
    return (
        <main>
            <section className="destinationsMain">
                <article>
                    <h2>Featured Destinations</h2>
                    <a className="viewAll" href="#">View all</a>
                </article>
                <FeaturedDestinationsItems />
            </section>
        </main>
    );
}

export default Destinations;

