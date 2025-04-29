import Column from "./Column";
import Row from "./Row";

const Organization = ({ name, experience, position, url, logo, isActive }) => {
    return (
        <div className={`card ${isActive ? 'bg-light' : ''}`}>
            <div className="card-body d-flex">
                <div className='my-1'>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <Row className='d-flex align-items-center border-bottom'>
                            <Column col={4}>
                                <img className='img-fluid my-1' style={{ 'objectFit': 'cover' }} src={logo} alt="card-image"></img>
                            </Column>
                            <Column col={8}>
                                    <h5 style={{color: "#444"}}>{name}</h5>
                            </Column>
                        </Row>
                    </a>
                    <div className="my-2">
                        <div className="text-muted">
                            <span>
                                Experience: {experience} {isActive ? '*' : ''}
                            </span>
                        </div>
                        <div className={`card-text`} style={isActive ? { color: '#0f0c29' } : {}}>
                            <p>Position: {position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

Organization.defaultProps = {
    name: 'Organization Name',
    experience: '0 Years - 0 Months',
    position: 'Position',
    url: '#',
    logo: '',
    isActive: false,
};

export default Organization;