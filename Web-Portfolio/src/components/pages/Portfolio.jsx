import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// Image Assets
import recipeasy from '../../assets/recipeasy.png';
import noteApp from '../../assets/noteApp.png';

export default function Portfolio() {
    return (
        <Container fluid='xs' className='mt-5'>
            <Row>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src={recipeasy} />
                        <Card.Title>Recipeasy</Card.Title>
                        <ButtonGroup>
                            <Button variant="primary" href='https://github.com/pommerpie/Recipeasy'>Github Repo</Button>
                            <Button variant="primary" href='https://recipeasy-7c2ada1905ec.herokuapp.com/'>Deployed Site</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src={noteApp} />
                        <Card.Title>Note App</Card.Title>
                        <ButtonGroup>
                            <Button variant="primary" href='https://github.com/andrewross4224/Note-app'>Github Repo</Button>
                            <Button variant="primary" href='https://note-app-4224-703ab7d8b819.herokuapp.com/'>Deployed Site</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src='https://placehold.co/400' />
                        <Card.Title>This is my project</Card.Title>
                        <Button variant="primary">Github Repo</Button>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src='https://placehold.co/400' />
                        <Card.Title>This is my project</Card.Title>
                        <Button variant="primary">Github Repo</Button>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src='https://placehold.co/400' />
                        <Card.Title>This is my project</Card.Title>
                        <Button variant="primary">Github Repo</Button>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className='p-3'>
                    <Card>
                        <Card.Img variant='top' src='https://placehold.co/400' />
                        <Card.Title>This is my project</Card.Title>
                        <Button variant="primary">Github Repo</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}