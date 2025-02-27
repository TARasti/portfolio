import { technologiesData } from '../data/SlickSliderData';
import cardImage from '../images/card-image.jpg'
import SlickSlider from './SlickSlider';

const InfoCard = () => {

    const experience = (date = "2022-09-01") => {
        const d1 = new Date(date);
        const d2 = new Date();
        let years = d2.getFullYear() - d1.getFullYear();
        let months = d2.getMonth() - d1.getMonth();
        if (months < 0) {
            years--;
        }
        return `${years} Years - ${months} Months`;
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Tanveer Ahmed Khan - Lead Full Stack Developer
                    <p className='font-sx1 m-0'>
                        <a className='text-muted hover' target='_blank' rel='noreferrer' href='https://www.sysreforms.com/'>SysReforms International</a>
                    </p>
                </div>
                <div className="card-body d-flex">
                    <div className="row">
                        <div className='col-lg-4 col-ms-4'>
                            <img className='card-image img-fluid my-1' src={cardImage} alt="card-image"></img>
                        </div>
                        <div className='col-lg-8 col-ms-8'>
                            <div className='my-1'>
                                <div className="card-title">
                                    <h2>Welcome to My Portfolio</h2>
                                </div>
                                <div className="text-muted">
                                    <span>
                                        Experience: {
                                            experience()
                                        }
                                    </span>
                                </div>
                                <div className="card-text">
                                    <p>Hello! I'm <strong><code>Tanveer Ahmed Khan</code></strong>, a passionate web developer with a keen eye for design and a love for crafting beautiful and functional websites. Here you'll find a showcase of my projects, skills, and experiences. Feel free to explore and reach out if you have any questions or opportunities for collaboration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <SlickSlider data={technologiesData}/>
                </div>
            </div>
        </>
    );
}

export default InfoCard;