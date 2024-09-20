import './right-section.css';

function RightSection() {
    return (
        <div className='right-section-container'>
            <h2>WORK EXPERIENCE</h2>
            <div>
                <p className='work-title'>Junior Web Developer</p>
                <p className='work-place'>Cloudstaff</p>
                <p className='work-location'>2022 - current / Angeles, Pampanga</p>
                <ul>
                    <li>Worked on <em>back-end development tasks</em>, including database integration with <em>MySQL</em>.</li>
                    <li>Collaborated with senior developers to <em>implement RESTful APIs</em> for web applications.</li>
                    <li>Assisted in developing and maintaining <em>dynamic websites</em> using <em> HTML, CSS, JavaScript, and PHP.</em></li>
                    <li>Gained hands-on experience in <span>debugging and optimizing server-side scripts.</span></li>
                    <li>Contributed to <em>improving website performance</em> by <span>reducing server response time by 15%</span>.</li>
                    <li>Developed <em>automated scripts to streamline routine maintenance tasks</em>,  <span>reducing manual effort by 20%</span></li>
                </ul>
            </div>

            <div>
                <p className='work-title'>Freelance Web Developer</p>
                <p className='work-place'>Self-Employed</p>
                <p className='work-location'>2020 - 2022 / Arayat, Pampanga</p>
                <ul>
                    <li>Did a handful of projects related to web developing for <em>multiple clients.</em></li>
                    <li>Designed a <em>responsive website</em> using <em>Bootstrap</em> and a small amount of <em>custom CSS.</em></li>
                    <li>Made my own <em>developer profile</em> using basic <em>HTML, CSS, Bootstrap and JavaScript</em></li>
                    <li>Set up and managed <em>back-end infrastructure</em>, including <em>user authentication systems</em> with <em>PHP and MySQL.</em></li>
                    <li>Provided <em>post-launch support,</em> <span> troubleshooting and resolving client issues in real-time.</span></li>
                    <li>Improved SEO performance for client websites, <span>leading to a 25% increase in organic traffic.</span></li>
                </ul>
            </div>

            <div className='last-div'>
                <p className='work-title'>Web Developer Student Project Leader</p>
                <p className='work-place'>University of the Assumption - Capstone Project</p>
                <p className='work-location'>2021 - 2022 / San Fernando, Pampanga</p>
                <ul>
                    <li>Led a team of five to develop a <em>full-stack web application</em> as our final project.</li>
                    <li>Designed the layout of our website using <em>Figma</em>.</li>
                    <li>Integrated external <em>APIs for real-time data fetching</em>, <span>improving the overall user experience.</span></li>
                    <li>Presented the project to faculty and external judges, receiving <span>high praise for functionality and code quality.</span></li>
                    <li>Implemented <em>Git version control</em> for seamless collaboration, ensuring team members worked on features without conflict.</li>
                </ul>
            </div>
        </div>
    )
}

export default RightSection;