import { useState } from 'react';
import Column from '../components/Column';
import Container from '../components/Container';
import Row from '../components/Row';
import HtmlRenderer from '../components/HtmlRenderer';
import '../css/ProjectsCard.css';
import { otherProjectsData, projectsData } from '../data/ProjectsData';

const Projects = () => {

    const [proProjectsData, setProjectsData] = useState(projectsData);
    const [othProjectsData, setOtherProjectsData] = useState(otherProjectsData);

    const getLimitedDescription = (description, isExpanded = true) => {
        description = description.trim().replace(/\s+/g, ' ');
        const words = description.split(' ');
        if (words.length > 30 && !isExpanded) {
            return words.slice(0, 30).join(' ') + '...';
        }
        return description;
    };

    const handleReadMoreClick = (index, isPro = false, isExpand = false) => {
        if (isPro) {
            let temp = [...proProjectsData];
            temp[index].is_expanded = isExpand;
            setProjectsData(temp);
        } else {
            let temp = [...othProjectsData];
            temp[index].is_expanded = isExpand;
            setOtherProjectsData(temp);
        }
    }

    return (
        <Container className='mb-5'>
            <div class="section-header">
                <h2>Professional Projects</h2>
            </div>
            <Row>
                {
                    proProjectsData.map((data, index) => (
                        <Column col={6} key={data.id}>
                            <div className="project-card w-100 m-1 p5">
                                <img loading="lazy" src={data.image} alt="pvs-woah" className="project-image" />
                                <a className='hover' target='_blank' rel='noreferrer' href={data.url}>
                                    <h3 className="project-title">{data.name}</h3>
                                </a>
                                <p className="project-description">
                                    <HtmlRenderer
                                        htmlContent={getLimitedDescription(data.description, data.is_expanded)}
                                    />
                                    {data.description.split(' ').length > 10 && (
                                        <span className="primary-color cursor-pointer" onClick={() => handleReadMoreClick(index, true, !data.is_expanded)}>
                                            {data.is_expanded ? ' Show Less' : ' Read More'}
                                        </span>
                                    )}
                                </p>
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
                    othProjectsData.map((data, index) => (
                        <Column col={6} key={data.id} className='h-auto'>
                            <div className="project-card w-100 m-1 p5">
                                <img src={data.image} alt="pvs-woah" className="project-image" />
                                <a className='hover' target='_blank' rel='noreferrer' href={data.url}>
                                    <h3 className="project-title">{data.name}</h3>
                                </a>
                                <p className="project-description">
                                    <HtmlRenderer
                                        htmlContent={getLimitedDescription(data.description, data.is_expanded)}
                                    />
                                    {data.description.split(' ').length > 10 && (
                                        <span className="primary-color cursor-pointer" onClick={() => handleReadMoreClick(index, false, !data.is_expanded)}>
                                            {data.is_expanded ? ' Show Less' : ' Read More'}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </Column>
                    ))
                }
            </Row>
        </Container>
    );
}

export default Projects;