import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

function Footer () {
    return (
        <footer className="fixed-bottom nav justify-content-center">
            <a href='https://github.com/andrewross4224' className='icon'><FaGithub/></a>
            <a href='mailto:andrew.ross4224@gmail.com' className='icon'><FaEnvelope/></a>
            <a href='https://www.linkedin.com/in/andrew-ross-83b34b243/' className='icon'><FaLinkedin/></a>
        </footer>
    )
}

export default Footer;