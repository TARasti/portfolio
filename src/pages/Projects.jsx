import Column from '../components/Column';
import Container from '../components/Container';
import Row from '../components/Row';
import '../css/ProjectsCard.css';
import { otherProjectsData, projectsData } from '../data/ProjectsData';

const Projects = () => {
    return (
        <Container className='mb-5'>
            <div class="section-header">
                <h2>Professional Projects</h2>
            </div>
            <Row>
                {
                    projectsData.map(data => (
                        <Column col={6} key={data.id}>
                            <div className="project-card w-100 m-1 p5">
                                <img src={data.image} alt="pvs-woah" className="w-100" />
                                <a className='hover' target='_blank' rel='noreferrer' href={data.url}>
                                    <h3 className="project-title">{data.name}</h3>
                                </a>
                                <p className="project-description">{data.description}</p>
                            </div>
                        </Column>
                    ))
                }
            </Row>
            <div class="section-header">
                <h2>Other Projects</h2>
            </div>
            <Row>
                {
                    otherProjectsData.map(data => (
                        <Column col={6} key={data.id}>
                            <div className="project-card w-100 m-1 p5">
                                <img src={data.image} alt="pvs-woah" className="w-100" />
                                <a className='hover' target='_blank' rel='noreferrer' href={data.url}>
                                    <h3 className="project-title">{data.name}</h3>
                                </a>
                                <p className="project-description">{data.description}</p>
                            </div>
                        </Column>
                    ))
                }
            </Row>
        </Container>
    );
}

export default Projects;