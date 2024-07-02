import React from "react";

class PortfolioElement extends React.Component {

  render() {
    const { element, setProject } = this.props;
    return (
      <div className="col-md-4" key={element.id} onClick={() => setProject(element)}>
        <div className="work-box" style={{ marginBottom: "2rem" }}>
            <div className="work-img" style={{ justifyContent: "center", display: "flex" }}>
              <img
                src={element.images[0]}
                alt=""
                className="img-fluid"
                style={{ maxHeight: "20rem" }}
              />
            </div>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">{element.title}</h2>
                  <div className="w-more">
                    <span className="w-more">{element.more}</span>
                    <br />
                    <span className="w-date">{element.year}</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="w-like">
                    <span className="ion-ios-plus-outline"></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default PortfolioElement;
