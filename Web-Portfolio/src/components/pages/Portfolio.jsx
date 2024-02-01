import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Portfolio() {
    return (
        <Container fluid='xs' className='mt-5'>
            <Row>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src='./src/assets/recipeasy.png' />
                        <Card.Title>Recipeasy</Card.Title>
                        <ButtonGroup>
                            <Button variant="primary" href='https://github.com/pommerpie/Recipeasy'>Github Repo</Button>
                            <Button variant="primary" href='https://recipeasy-7c2ada1905ec.herokuapp.com/'>Deployed Site</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src='./src/assets/noteApp.png' />
                        <Card.Title>Note App</Card.Title>
                        <ButtonGroup>
                            <Button variant="primary" href='https://github.com/andrewross4224/Note-app'>Github Repo</Button>
                            <Button variant="primary" href='https://note-app-4224-703ab7d8b819.herokuapp.com/'>Deployed Site</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src='./src/assets/logo.png' />
                        <Card.Title>Logo Generator</Card.Title>
                        <ButtonGroup>
                            <Button variant="primary" href='https://github.com/andrewross4224/Logo-Generator'>Github Repo</Button>
                            <Button variant="primary" href='https://drive.google.com/file/d/1Vq1VoMV3LavzYs1LaUZpkvwbIonBlAk2/view?usp=sharing'>Video Demo</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src='./src/assets/passwordGenerator.png' />
                        <Card.Title>Password Generator</Card.Title>
                        <ButtonGroup>
                            <Button variant="primary" href='https://github.com/andrewross4224/Password-Generator'>Github Repo</Button>
                            <Button variant="primary" href='https://andrewross4224.github.io/Password-Generator/'>Deployed Site</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src='./src/assets/socialNetworkAPI.png' />
                        <Card.Title>Social Network API</Card.Title>
                        <ButtonGroup>
                            <Button variant="primary" href='https://github.com/andrewross4224/Social-Network-API'>Github Repo</Button>
                            <Button variant="primary" href='https://drive.google.com/file/d/1YwzbVTGQ7faADAz8ChyD_QGDBeZ4g9D4/view?usp=sharing'>Video Demo</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src='./src/assets/workdayOrganizer.png' />
                        <Card.Title>Workday Organizer</Card.Title>
                        <ButtonGroup>
                            <Button variant="primary" href='https://github.com/andrewross4224/day-organizer'>Github Repo</Button>
                            <Button variant="primary" href='https://andrewross4224.github.io/day-organizer/'>Deployed Site</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}