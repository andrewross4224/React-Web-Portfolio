function Header({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs justify-content-center py-2 fixed-top">
            <li className="nav-item">
                <a onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                    About Me</a>
            </li>
            <li className="nav-item">
                <a onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio</a>
            </li>
            <li className="nav-item">
                <a onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact</a>
            </li>
            <li className="nav-item">
                <a onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume</a>
            </li>
        </ul>
    )
}
export default Header;