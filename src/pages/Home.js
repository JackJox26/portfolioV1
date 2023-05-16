import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";
function Home() {
  return (
    <div className = "home">
        <div className="about">
            <h2> HI, my name is Jack</h2>
            <div className="prompt">
                <p>
                    A software developer with a passion for creating and learning.
                </p>
                <LinkedInIcon/>
                <EmailIcon/>
                <FacebookIcon/>
                <GithubIcon/>

            </div>
        </div>
        <div className ="skills">
            <h1>skills</h1>
            <ol className="list">
                <li className= "item">
                    <h2>Front-End</h2>
                    <span>ReactJS, HTML, CSS, React Native, Flutter, NPM, Ionic, Bootstrap, MaterialUI, Yarn, TailwindCSS</span>
                </li>
                <li className= "item">
                    <h2>Back-End</h2>
                    <span>NodeJs, JavaSpring, .Net, Express, GrahQL, ApolloServer</span>
                </li>
                <li className= "item">
                    <h2>Languages</h2>
                    <span>JavaScript, Java, Python, C#</span>
                </li>





            </ol>

        </div>
        <div className="skills"></div>

    </div>
  )
}

export default Home