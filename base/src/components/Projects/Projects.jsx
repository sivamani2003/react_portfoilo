import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCards";
import Particle from "../Particle";
import travel from '../../Assets/Projects/travel.png'
import appoint from "../../Assets/Projects/appoint.png"
import Fund from '../../Assets/Projects/Fund_raiser.png'
import data from "../../Assets/Projects/Data_exchange.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fund}
              isBlog={false}
              title="Crowd Funder"
              description="Fund Riser for the Needy farmer in the website . They can get support from crowd . I used blockchain to make secure transactions. Techstack used React.js,Solidity "
              ghLink="https://github.com/sivamani2003/Donatation_for_farmers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Medical Data Exchange"
              description="This Project was build with React.js,Solidity and Tailwind Css which takes patients can sell their data to reaseacher "
              ghLink="https://github.com/sivamani2003/Medical_data_exchange"
              demoLink="https://medical-data-exchange.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appoint}
              isBlog={false}
              title="Medcare"
              description="Using severity-based patient appointment allocation can streamline the process of scheduling doctor appointments, ensuring that patients with more urgent medical needs are prioritized appropriately. This system helps in efficiently utilizing medical resources and reducing wait times for critical cases."
              ghLink="https://github.com/sivamani2003/techquest"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel around"
              description="I designed a travel website to book packages for tours . This website is build using of React.js and Node.js"
              ghLink="https://github.com/sivamani2003/mern-mainI"
              demoLink="https://mern-main-sivamani2003.vercel.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-duration.svg"
              isBlog={false}
              title="Sell for New"
              description="This is platform for selling for used cars. This application was developed using React.js and Node.js"
              ghLink="https://github.com/sivamani2003/carsclub-master"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;