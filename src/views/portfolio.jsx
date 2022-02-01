import React from "react";
import PortfolioElement from "./portfolio/portfolioElement.jsx";
//import Collapse from 'react-bootstrap/Collapse';
import ES from "../constants/language/spanish.js";
import { Carousel, Modal } from "react-bootstrap";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      project: null,
    };
  }

  setProject = (item) => {
    this.setState({ project: item, showModal: true });
  };

  closeModal = () => {
    this.setState({ project: null, showModal: false });
  };

  render() {
    const { project } = this.state;
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
                return <PortfolioElement setProject={this.setProject} element={element} />;
              })}
            </div>
          </div>
          <Modal
            size="lg"
            fade
            show={this.state.showModal}
            onHide={this.closeModal}
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
                  <div className="row" style={{height:'100%'}}>
                    <div className="col-md-5" style={{ padding: " 0 3vh" }}>
                      <Carousel fade>
                        {project.images.map((image) => {
                          return (
                            <Carousel.Item interval={2000}>
                              <img className="d-block w-100" src={image} alt="Second slide" />
                            </Carousel.Item>
                          );
                        })}
                      </Carousel>
                    </div>
                    <div className="col-md-7 modal-body">
                      <div className="title-box-2">
                        <h5 className="title-left">{project.title}</h5>
                      </div>
                      <p style={{ fontWeight: "bold" }}>
                        {ES.year} {project.year}
                      </p>
                      <p style={{ fontWeight: "bold" }}>
                        {project.team}
                      </p>
                      <p style={{ fontWeight: "bold" }}>{project.rol.length > 1 ? ES.roles : ES.rol}:</p>
                      {project.rol.map((rol) => {
                        return (
                          <div style={{marginBottom: '1rem'}}>
                            <text style={{ fontSize: "small" }}>{"\u2B24"} </text>
                            <text>{rol}</text>
                          </div>
                        );
                      })}
                      <div>
                        {project.description.split("\n").map(function (item) {
                          return <p style={{ textAlign: "justify" }}>{item}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </>
            )}
          </Modal>
        </div>
      </section>
    );
  }
}

export default Portfolio;
