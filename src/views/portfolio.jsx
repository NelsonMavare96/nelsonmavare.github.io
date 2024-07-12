import React, { useState } from "react";
import PortfolioElement from "./portfolio/portfolioElement.jsx";
//import Collapse from 'react-bootstrap/Collapse';
import ES from "../constants/language/spanish.js";
import { Carousel, Modal } from "react-bootstrap";
import { Player } from "video-react";

const ProjectInfo = ({ project, fullSize }) => {
  return (
    <div className={`${fullSize ? "col-md-12" : "col-md-6"} portfiolio-modal-body`}>
      <div className="title-box-2">
        <h5 className="title-left">{project.title}</h5>
      </div>
      <p style={{ fontWeight: "bold" }}>
        {ES.year} {project.year}
      </p>
      <p style={{ fontWeight: "bold" }}>{project.team}</p>
      <p style={{ fontWeight: "bold" }}>{project.rol.length > 1 ? ES.roles : ES.rol}:</p>
      {project.rol.map((rol) => {
        return (
          <div style={{ marginBottom: "1rem" }}>
            <p>{"\u2B24"} {rol}</p>
          </div>
        );
      })}
      <div>
        {project.description.split("\n").map(function (item) {
          return <p style={{ textAlign: "justify" }}>{item}</p>;
        })}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [project, setProjectValue] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const setProject = (item) => {
    setProjectValue(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setProjectValue(null);
    setShowModal(false);
  };

  return (
    <section id="portfolio" className="portfolio-mf sect-pt4 route">
      <div className="container" style={{ position: "relative" }}>
        <div className="row" style={{ marginBottom: 20 }}>
          <div className="col-sm-12">
            <div className="text-center">
              <h3 className="title-a">{ES.portfolioTitle}</h3>
              <p className="subtitle-a">{ES.portfolioText}</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            {ES.devElements.map((element, index) => {
              return <PortfolioElement id={index} setProject={setProject} element={element} />;
            })}
          </div>
        </div>
        <Modal
          size="lg"
          fade
          show={showModal}
          onHide={closeModal}
          /* dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title" */
        >
          {project && (
            <>
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  {ES.projectDetails}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row" style={{ height: "100%" }}>
                  {project.presentationType === "Carousel" ? (
                    <Carousel interval={null}>
                      <Carousel.Item style={{ padding: "0 3.5rem" }}>
                        <div className="title-box-2">
                          <h5 className="title-left">{project.title}</h5>
                        </div>
                        <Player autoPlay={true}>
                          <source src={project.presentation} />
                        </Player>
                      </Carousel.Item>
                      <Carousel.Item style={{ padding: "0 3.5rem" }}>
                        <ProjectInfo project={project} fullSize={true} />
                      </Carousel.Item>
                    </Carousel>
                  ) : (
                    <>
                      {project.presentation && (
                        <div style={{ marginBottom: "2rem" }}>
                          <Player>
                            <source src={project.presentation} />
                          </Player>
                        </div>
                      )}
                      <div className="col-md-6" style={{ padding: " 0 3vh" }}>
                        <Carousel fade>
                          {project.images.map((image, index) => {
                            return (
                              <Carousel.Item interval={2000} key={index}>
                                <img
                                  className="d-block portfolio-carousel"
                                  src={image}
                                  alt="Second slide"
                                />
                              </Carousel.Item>
                            );
                          })}
                        </Carousel>
                      </div>
                      <ProjectInfo project={project} />
                    </>
                  )}
                </div>
              </Modal.Body>
            </>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Portfolio;
