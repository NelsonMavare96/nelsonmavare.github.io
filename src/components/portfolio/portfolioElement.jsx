import React from "react";

//import stock
import * as constants from "../../constants";

class PortfolioElement extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {element, key} = this.props;
    return (
        <div className="col-md-4" key={element.id}>
        <div className="work-box" style={{marginBottom:'2rem'}}>
          <a href={element.images[0]} data-lightbox={element.id}>
            <div className="work-img" style={{justifyContent:'center',display:'flex'}}>
              <img src={element.images[0]} alt="" className="img-fluid" style={{maxHeight:'20rem'}} />
            </div>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">{element.title}</h2>
                  <div className="w-more">
                    <span className="w-more">
                      {element.more}
                    </span>
                    <br/>
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
          </a>
          {element.images.map((image,index)=>{
            if(index!=0)
            return(
                <a
                    key={index}
                    href={image}
                    data-lightbox={element.id}
                    style={{ display: "none" }}
                >
                    jsx-a11y/anchor-has-content warning
                </a>
            ) 
          })}
        </div>
      </div>
    );
  }
}

export default PortfolioElement;
