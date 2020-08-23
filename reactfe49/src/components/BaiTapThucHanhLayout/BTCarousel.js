import React, { Component } from 'react'

export default class BTCarousel extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block img-fluid" src="https://picsum.photos/400/600" alt="First slide" style={{width:'100%', height:'400px'}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="https://picsum.photos/400/600" alt="Second slide" style={{width:'100%', height:'400px'}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="https://picsum.photos/400/600" alt="Third slide" style={{width:'100%', height:'400px'}}/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

            </div>
        )
    }
}
