import { useContext } from "react";
import { AppContextData } from "../contexts/AppContexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFile, faHouse, faLaptopCode, faSquarePhone, faTerminal } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../components/ToolTip';
import { useNavigateTo } from "../hooks/useNavigateTo";
import Row from './Row';
import Column from './Column';
import Container from './Container';


const NavigationBar = () => {

    const navigate = useNavigateTo();
    const appContextData = useContext(AppContextData);

    return (
        <div className="navbar-container">
        <Container className='my-0 py-0'>
            <nav className="custsom-navbar">
                <Row className='d-flex align-items-center'>
                    <Column col={4}>
                        <div className="d-flex justify-content-start p-3">
                            <code>Made with ❤️ by Tanveer Ahmed Khan</code>
                        </div>
                    </Column>
                    <Column col={4}>
                        <div>
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
                            <Tooltip message={"Resume"}>
                                <span className='hover' onClick={() => navigate('/resume')}>
                                    <FontAwesomeIcon icon={faFile} size='lg' />
                                </span>
                            </Tooltip>
                            <Tooltip message={"Open Terminal"}>
                                <span className='hover' onClick={() => appContextData.setAppData(prev => ({ ...prev, showTerminal: !prev.showTerminal }))}>
                                    <FontAwesomeIcon icon={faTerminal} size='lg' />
                                </span>
                            </Tooltip>
                        </div>
                    </Column>
                    <Column col={4}>
                        <div className="d-flex justify-content-end p-3">
                            <code>
                                Copyright &copy; {new Date().getFullYear()}, <em>All rights reserved</em>
                            </code>
                        </div>
                    </Column>
                </Row>
            </nav>
        </Container>
        </div>
    );
}

export default NavigationBar;