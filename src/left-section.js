import './left-section.css';
import mailIcon from './images/mail_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg';
import phoneIcon from './images/phone-call.svg';
import locIcon from './images/location.png';
import linkedIn from './images/linked-in.png';
import gitHub from './images/github.png';

function LeftSection() {
    return (
        <div className='left-section-container'>
            <div className='contacts'>
                <h2>CONTACT</h2>
                <ul>
                    <li>
                        johnreinvinuya19@gmail.com
                        <a href='https://mail.google.com/mail/u/0/'>
                            <img src={mailIcon} alt='mail'></img>
                        </a>
                    </li>
                    <li>
                        09674516046
                        <img src={phoneIcon} alt='mail'></img>
                    </li>
                    <li>
                        San Jose Mesulo Arayat, Pampanga
                        <a href='https://www.google.com/maps/@15.1426852,120.7716545,3a,75y,46.67h,90t/data=!3m7!1e1!3m5!1st9Bfafgk-eI4FWa1S9wx_A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dt9Bfafgk-eI4FWa1S9wx_A%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D46.66982%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D'>
                            <img src={locIcon} alt='mail'></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/john-rein-vinuya-9201b7266/'>
                        Linked In
                        <img src={linkedIn} alt='mail'></img>
                        </a>
                    </li>
                    <li>
                    <a href='https://github.com/Yachii19'>
                        Github
                        <img src={gitHub} alt='mail'></img>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='education'>
                <h2>EDUCATION</h2>
                <ul>
                    <li className='SNES'>
                        San Nicolas Elementary School
                    </li>
                    <li className='year'>(2010-2016)</li>
                    <li className='JSHS'>
                        Justino Sevilla High School
                    </li>
                    <li className='year'>(2016-2022)</li>
                    <li className='current'>
                        Bachelor of Science in
                    </li>
                    <li>Information Technology</li>
                    <li>
                        University of the Assumption
                    </li>
                    <li className='year'>
                        (ongoing)
                    </li>
                </ul>
            </div>

            <div className='skills'>
                <h2>SKILLS</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        Python
                    </li>
                    <li>
                        Java
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        Adaptability
                    </li>
                    <li>
                        Collaboration
                    </li>
                    <li>
                        Problem Solving
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSection;