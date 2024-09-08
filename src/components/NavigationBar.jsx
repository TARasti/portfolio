import { useContext } from "react";
import { AppContextData } from "../contexts/AppContexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHouse, faLaptopCode, faSquarePhone, faTerminal } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../components/ToolTip';
import { useNavigateTo } from "../hooks/useNavigateTo";


const NavigationBar = () => {
    
    const navigate = useNavigateTo();
    const appContextData = useContext(AppContextData);

    return (
        <>
            <nav className="custsom-navbar">
                <Tooltip message={"Home"}>
                    <span className='hover' onClick={() => navigate('/')}>
                        <FontAwesomeIcon icon={faHouse} size='lg' />
                    </span>
                </Tooltip>
                <Tooltip message={"About"}>
                    <span className='hover' onClick={() => navigate('/about')}>
                        <FontAwesomeIcon icon={faAddressCard} size='lg' />
                    </span>
                </Tooltip>
                <Tooltip message={"Projects"}>
                    <span className='hover' onClick={() => navigate('/projects')}>
                        <FontAwesomeIcon icon={faLaptopCode} size='lg' />
                    </span>
                </Tooltip>
                <Tooltip message={"Contact"}>
                    <span className='hover' onClick={() => navigate('/contact')}>
                        <FontAwesomeIcon icon={faSquarePhone} size='lg' />
                    </span>
                </Tooltip>
                <Tooltip message={"Open Terminal"}>
                    <span className='hover' onClick={() => appContextData.setAppData(prev => ({ ...prev, showTerminal: !prev.showTerminal }))}>
                        <FontAwesomeIcon icon={faTerminal} size='lg' />
                    </span>
                </Tooltip>
            </nav>
        </>
    );
}

export default NavigationBar;