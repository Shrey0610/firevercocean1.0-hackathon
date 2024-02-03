import './App.css';
import './Slider.css';
import React from 'react';

function Navbar(){
  return(
<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid" >
    <a class="navbar-brand" href="#">Welcome!!</a>
    <div className="scrollmenu">
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>

  </div>
       <button style={{ backgroundColor: "black" , borderColor: "black"}}
    className="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
    >
     <span class="navbar-toggler-icon" style={{ backgroundColor: "black" }}></span>
  </button>
  <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header">
      <h5 id="offcanvasRightLabel">Choose where you've to go...</h5>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body" >
      <a href="#"><li style= {{padding: '5px', }} type='none'/> First</a>
       <a href='#'> <li style= {{padding: '5px', }} type='none' /> Second </a>
       <a href='#'><li style= {{padding: '5px', }} type='none'/> Third</a> 

    </div>
  </div>
</div>
</nav>)
}

class App2 extends React.Component{
  constructor(props){
    super(props);
    this.state= {apiResponse:""};
  }


  fetchData=  ()=> {
    setTimeout( ()=>{
    fetch('http://localhost:9000/testapi')
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}));
  },);
  }

  dontfetchData=  ()=> {
    setTimeout( ()=>{
      fetch('http://localhost:9000/users')
      .then(res=>res.text())
      .then(res=>this.setState({apiResponse:res}));
    },);

  }

  handleButtonClick= ()=> {
    this.fetchData();
  }
  
  handleButtonOut= ()=> {
    this.dontfetchData();
  }
  
  

  
  render(){

    const imagePath = '/0de8bb3a6efbf2873c592ab073821045.jpg'; // Replace with the actual path to your image

    return (
      <>

      <Navbar/>

      <div className="card mb-3 d-flex" style={{ maxWidth: 540 }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={imagePath} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>


  <div className="blank">
    <h1 style={{ padding: 10 }}>Shrey Shah</h1>
  </div>
  <br />
  <p style= {{paddingLeft:10, margin: -4}}>
  <button onMouseOver={this.handleButtonClick
  } onMouseOut={this.handleButtonOut} style={{ color: 'red'}}>   Hover me once and then leave
    <p style={{ color: 'black'}}>{this.state.apiResponse}</p>
     
      </button>
  </p>
</>
  )
}
}


export default App2;
