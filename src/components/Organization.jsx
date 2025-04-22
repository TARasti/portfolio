
const Organization = ({name, experience, position, url, logo, isActive}) => {
    return (
        <div className={`card ${isActive ? 'bg-light' : ''}`}>
            <div className="card-body d-flex">
                <div className="row">
                    <div className='col-lg-4 col-ms-4'>
                        <img className='img-fluid my-1' style={{'objectFit': 'cover'}} src={logo} alt="card-image"></img>
                    </div>
                    <div className='col-lg-8 col-ms-8'>
                        <div className='my-1'>
                            <div className="card-title">
                                <h2>{name}</h2>
                            </div>
                            <div className="text-muted">
                                <span>
                                    Experience: {experience} {isActive ? '*' : ''}
                                </span>
                            </div>
                            <div className={`card-text`} style={isActive ? {color: '#0f0c29'} : {}}>
                                <p>Position: {position}</p>
                            </div>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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