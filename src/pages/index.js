import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Who I am" />
    <section>
        <h1>Hi, I'm Łukasz Leśko</h1>
        <p>
            I want to be always highly concentrated on why I'm doing stuff,
            helping myself and team get out of comfort zone
            and poke the box as a way to find solutions.
        </p>
        <p>
            I love to learn new stuff and I'm a huge fan of all dogs around the world ♡
            Happy that someone in the past discovered and introduced **chess** into our world.
        </p>
    </section>

    <section>
        <h2>Bio</h2>
        <p>
            Born in 1988, currently live in Wrocław, Poland.
        </p>
        <p>
            Graduated in 2012 as an Bachelor of Engineering in Wroclaw University of Technology
            at Faculty of Fundamental Technical Problems (Computer Science).
        </p>
        <p>
            With programming connected for over 15 years, with special dedication to Python - to its power and simplicity 💪
            Software developer, software architect, Product Owner, Scrum Master, IT Lead.
        </p>
    </section>

    <section>
        <h2>Passionate about</h2>

        <h3>Python development</h3>
        
        <p>
            Since 2010 using Python as a primary programming language.
            Mostly with Django onboard.
        </p>

        <h3>Web & app development</h3>
        
        <p>
            Since 2003 working with web technologies
            and continously growing expertise in many different technology stacks.
        </p>

        <ul>
            <li>Python, Django</li>
            <li>TDD</li>
            <li>JavaScript</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>ElasticSearch</li>
        </ul>

        <h3>Operations</h3>

        <p>
            Since always interested in servers, Linux and infrastructure
            needed to run services smoothly.
        </p>

        <ul>
            <li>Amazon Web Services</li>
            <li>Docker</li>
            <li>Kubernetes</li>
        </ul>

        <h3>Product management</h3>
        
        <p>
            I can cooperate with you to prepare a great plan
            on how to work with your product
            to achieve goals and gain satisfaction.
        </p>

        <p>
            Since 2003 started to work with products,
            combining technical and business knowledge and experience.
        </p>

        <ul>
            <li>Scrum and Agile evangelist</li>
            <li>Lean Startup lover</li>
            <li>Sprint in 5 days</li>
            <li>Goals oriented (OKRs, 4DX, OGSM)</li>
        </ul>

        <h3>Team management</h3>

        <p>
            Love to build and work within great teams.
            I strongly believe that team is one the most important ingredient
            needed to cook a success. Worked succesfully as a team manager
            for a teams consiting of sysadmins, Scrum Masters, QAs, android/iOS developers,
            frontend (JavaScript) and backend (Python) developers.
        </p>
    </section>
    
    <section>
        <h2>Success stories</h2>

        <h3>Mobile Vikings</h3>

        <p>
            Since 2015 supporting Polish telco operator in a broad range of responsibilities:
            starting from being a Developer, then Technical Leader, in the meantime acting as Product Owner
            to deliver great stuff together. Still working together!
        </p>
    
        <h4>Achievements:</h4>

        <ul>
            <li>Viking App</li>
            <li>Technical Leader</li>
            <li>Senior DevOps Engineer</li>
            <li>Senior Full Stack Developer</li>
        </ul>

        <h3>Washing Machine</h3>
        
        <p>
            Cooperate with creative agency and support
            part of their projects from techincal perspective.
        </p>

        <h3>LemonSky J. Walter Thompson (old Adv.pl)</h3>

        <p>
            Since 2008 till 2015 full-time cooperation with one of the biggest
            advertisement agency in Poland for almost 7 years.
        </p>
    </section>

  </Layout>
)

export default IndexPage
