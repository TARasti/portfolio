import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PREFIX } from '../constants';

const PageNotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card text-center">
                <div className="card-body">
                    <h1 className="card-title display-1">404 - Page not found!</h1>
                    <p className="card-text">Oops! The page you are looking for does not exist.</p>
                    <Link to={`${ROUTES_PREFIX}`} className="btn btn-primary">
                        <FontAwesomeIcon icon={faHouse} size='lg' className='me-2'/>
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
