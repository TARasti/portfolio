import React from 'react';
import "../css/HomePage.css"
import InfoCard from '../components/InfoCard';


const HomePage = () => {

    return (
        <div className="App">
            <div className='container'>
                <InfoCard />
            </div>
        </div>
    );
}

export default HomePage;
