import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Who I am" />
    <section>
        <h1>Hi, I'm Łukasz Leśko</h1>
        <p>
            I want to be always highly concentrated on WHY I'm doing stuff,
            helping myself and team GET OUT OF COMFORT ZONE
            and POKING THE BOX as a way to find solutions.
        </p>
        
        <p>
            But most of all - I'm a <strong>dogs lover</strong>.
        </p>

        <figure>
            <blockquote>
                "I want to love like a dog, with unabashed devotion and complete lack of concern about what people do for a living, how much money they have, or how much they weigh."
            </blockquote>
            <figcaption>Oprah Winfrey</figcaption>
        </figure>

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
            <li>Python, Django.</li>
            <li>JavaScript.</li>
            <li>PostgreSQL.</li>
            <li>Amazon Web Services, Docker.</li>
            <li>Scrum, Agile, Lean Startup.</li>
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
