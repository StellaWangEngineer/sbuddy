import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
        <div className='footer-content'>
            <div className='copyright'>
            &copy; {currentYear} Sbuddy. All rights reserved.
            </div>
        </div>
        </footer>
    );
}

export default Footer;