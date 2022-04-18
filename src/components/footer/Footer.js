import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = ( ) => {
   
    return(
        <div className='footer'>
            
            
            <p className="footer-p">©2022 Oh my chair | Todos los derechos reservados | Desarrollado por 
                <a href='https://www.linkedin.com/in/lucia-serra/'> Lucía Serra</a></p>
                <a href='https://www.linkedin.com/in/lucia-serra/'><LinkedInIcon className='footer-icon'></LinkedInIcon></a> 
                <a href='https://github.com/luserra'><GitHubIcon className='footer-icon'> </GitHubIcon></a>
            
        </div>
    )
}

export default Footer;