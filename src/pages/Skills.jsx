import Column from "../components/Column";
import Container from "../components/Container";
import Row from "../components/Row";
import { technologiesData } from "../data/SlickSliderData";


const Skills = () => {
    return (
        <Container className='card'>
            <Row>
                {
                    technologiesData.map(data => (
                        <Column key={data.id} col={2} className="text-center my-3">
                            <div className="my-3" title={data.text}>
                                {data.html_content}
                                <p className="text-muted mt-1">{data.text}</p>
                            </div>
                        </Column>
                    ))
                }
            </Row>
        </Container>
    );
}

export default Skills;