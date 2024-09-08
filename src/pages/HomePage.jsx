import React, { useContext } from 'react';
import "../css/HomePage.css"
import Terminal from '../components/Terminal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHouse, faLaptopCode, faSquarePhone, faTerminal } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../components/ToolTip';
import { AppContextData } from '../contexts/AppContexts';
import InfoCard from '../components/InfoCard';


const HomePage = () => {

    const appContextData = useContext(AppContextData);

    return (
        <div className="App">
            <header>
                <h1>My Portfolio</h1>
            </header>
            <div className='container'>
                <InfoCard />
                {
                    appContextData.appData.showTerminal && (
                        <Terminal />
                    )
                }
            </div>

            <nav className="custsom-navbar">
                <Tooltip message={"Home"}>
                    <span className='hover'>
                        <FontAwesomeIcon icon={faHouse} size='lg' />
                    </span>
                </Tooltip>
                <Tooltip message={"About"}>
                    <span className='hover'>
                        <FontAwesomeIcon icon={faAddressCard} size='lg' />
                    </span>
                </Tooltip>
                <Tooltip message={"Projects"}>
                    <span className='hover'>
                        <FontAwesomeIcon icon={faLaptopCode} size='lg' />
                    </span>
                </Tooltip>
                <Tooltip message={"Contact"}>
                    <span className='hover'>
                        <FontAwesomeIcon icon={faSquarePhone} size='lg' />
                    </span>
                </Tooltip>
                <Tooltip message={"Open Terminal"}>
                    <span className='hover' onClick={() => appContextData.setAppData(prev => ({ ...prev, showTerminal: !prev.showTerminal }))}>
                        <FontAwesomeIcon icon={faTerminal} size='lg' />
                    </span>
                </Tooltip>
            </nav>
        </div>
    );
}

export default HomePage;
