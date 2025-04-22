import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import Organization from "../components/Organization";

const getCurrentExperience = (date = "2025-01-27") => {
    const d1 = new Date(date);
        const d2 = new Date();
        let years = d2.getFullYear() - d1.getFullYear();
        let months = d2.getMonth() - d1.getMonth();
        if (months < 0) {
            years--;
            months += 12;
        }
        return `${years} Years - ${months} Months`;
}

const Experience = () => {
    return (
        <>
            <Container>
                <div className="card-header">
                    <h2>Experience History</h2>
                </div>
                <Row>
                    <Column col={6}>
                        <Organization 
                            name='SysReforms International'
                            experience={'2 Year - 5 Months'}
                            position='Lead Software Engineer'
                            url='https://www.sysreforms.com/'
                            logo='https://www.sysreforms.com/images/Sysreforms logo 2.png'
                            />
                    </Column>
                    <Column col={6}>
                        <Organization 
                            name='Dopasi Foundation'
                            experience={getCurrentExperience()}
                            position='MIS/IT Specialist'
                            url='https://www.dopasi.org/'
                            logo='https://static.wixstatic.com/media/ed7121_f1302a9040b84a5cbcf889053056002e~mv2.png'
                            isActive={true}
                        />
                    </Column>
                </Row>
            </Container>
        </>
    );
}

export default Experience;