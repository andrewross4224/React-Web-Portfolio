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
                    <p className='aboutMeText'>Hi! My name is Andrew Ross and I am a full stack web developer. I have always been passionate about technology and learning how things work. Through UCF 
                    coding bootcamp I have been able to learn so much and I am excited to keep learning and growing as a web developer. I am originally from Littleton Colorado and just recently moved to 
                    Florida with my wife. I enjoy learning in all forms whether it be coding, history, finances or anything between. I am excited to continue learning as I head into my career as a web developer!
                    </p>
                </Col>
            </Row>

        </Container>
    )
}