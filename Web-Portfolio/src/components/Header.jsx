import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Header({ currentPage, handlePageChange }) {
    return (
        <Tabs
            defaultActiveKey="AboutMe"
            className="mb-3"
            justify
        >
            <Tab eventKey="AboutMe" title="About Me" 
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>

            </Tab>
            <Tab eventKey="Portfolio" title="Portfolio">

            </Tab>
            <Tab eventKey="Contact" title="Contact">

            </Tab>
            <Tab eventKey="Resume" title="Resume">

            </Tab>
        </Tabs>
    )
}
export default Header;