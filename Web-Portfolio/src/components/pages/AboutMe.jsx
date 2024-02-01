import profile from '../../assets/profile.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutMe() {
    return (
        <Container fluid='xs' className='aboutMe'>
            <Row>
                <Col md={12} className='mb-4'>
                    <h1>About Me!</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6}> <img src={profile} className='my-2'></img> </Col>
                <Col md={12} lg={6} className='my-2'>
                    <p className='aboutMeText'>Hi! My name is Andrew Ross. I am currently in bootcamp at UCF learning front-end back-end website development.
                        I am doing this because I have always been passionate about technology and computers, and would love to be able
                        to have a career writing code. For now I am an assistant manager at Discount Tire, working for discount tire has
                        taught me the importance of being able to efficiently work in a team setting, a skill that will help tremendously
                        in web development.</p>
                </Col>
            </Row>

        </Container>
    )
}