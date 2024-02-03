import './App2.css';
import './Slider.css';
import React from 'react';

function FirstContent(){
    const imagePath = '/woman-alone-nature-listening-music-with-headphones-dig_53876-146116.jpg';

    const imagePath2 = '/Who-We-Serve-Nav-400x400-c-default.webp';

  return(
    <div className="container my-5" >
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
         Are you a student who is looking for quick but apt solutions?
        </h1>
        <p className="lead" style= {{paddingTop: 10}}>
          Well then you're at the right place!
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
          >
            Primary
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Default
          </button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img
          className="rounded-lg-3"
          src= {imagePath}
          alt=""
          width={600}
          />
      </div>
    </div>
  </div>
  )
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
    return (
      <>

      <FirstContent/>
      <br/>

      <section className="ftco-section ftc-no-pb">
    <div className="container">
      <div className="row no-gutters">
        <div
          className="col-md-5 p-md-5 img img-2"
          style={{
            backgroundImage:
              "url(/Who-We-Serve-Nav-400x400-c-default.webp)",
            height: 500
          }}
        ></div>
        <div className="col-md-7 wrap-about pb-md-5 ftco-animate" style= {{padding: 15}}>
          <div className="heading-section mb-5 pl-md-5" >
            <div className="pl-md-5 ml-md-5">
              <span className="subheading subheading-with-line">
                <small className="pr-2 bg-white">About</small>
              </span>
              <h2 className="mb-4">
                A multifaceted approach to the students' career</h2>
            </div>
          </div>
          <div className="pl-md-5 ml-md-5 mb-5">
            <p>
            The proposed educational innovations utilize Generative AI to revolutionize learning experiences. From personalized learning pathways to multilingual content creation, these platforms cater to diverse needs. The tools include an adaptive content summarizer, homework assistant, and inclusive learning material generator, ensuring accessibility and inclusivity. Collaborative platforms and virtual lab assistants enhance global collaboration and hands-on learning, shaping a future-focused educational landscape.{" "}
            </p>
            <p>
              Utilizing cutting-edge technology, the business integrates
              biofeedback mechanisms and customizable experiences, tailoring
              each user's journey to optimal relaxation. With a mission to
              enhance mental well-being, the Serene Business becomes a
              indispensable companion in the pursuit of mindfulness and balance.
            </p>
            <p>
              <a href="#" className="btn-custom">
                Learn More <span className="ion-ios-arrow-forward" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
          <br/>
          <br/>
  <section className="ftco-services">
    <br/>
    <div className="container">
      <div className="row justify-content-start mb-5 pb-5">
        <div className="col-md-4 heading-section ftco-animate">
          <h2 style= {{fontSize: 50}}> Our Work Flow-</h2>
        </div>
        <div className="col-md-8 pl-md-5 ftco-animate">
          <div className="pl-md-4 border-line"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon d-flex justify-content-center align-items-center">
              <img
                src="/Screenshot 2023-12-27 at 23.28.12.png"
                alt=""
                className="src"
              />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">
              Analyze students' styles, strengths, and weaknesses. Generate tailored pathways, recommending topics, resources, and activities to enhance understanding.
              </h3>

            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon d-flex justify-content-center align-items-center">
              <img
                src="/Screenshot 2023-12-27 at 23.29.06.png"
                alt=""
                className="src"
              />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">
              Use AI to analyze and adapt educational content. Generate summaries catering to various reading levels, promoting accessibility for diverse audiences.
              </h3>
           
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon d-flex justify-content-center align-items-center">
              <img
                src="/Screenshot 2023-12-27 at 23.29.18.png"
                alt=""
                className="src"
              />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">
              Facilitate collaboration by curating and sharing Open Educational Resources. Employ Generative AI to recommend resources based on user preferences, ensuring diversity and evolution of materials.
              </h3>

            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-start mt-5 py-5">
        <div className="col-md-4 heading-section ftco-animate">
          <h2 className="mb-4">Our Services</h2>
          <p>
           What can you expect from us...
          </p>
        </div>
        <div className="col-md-8 ftco-animate">
          <div className="row d-flex">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="/Screenshot 2023-12-27 at 23.29.33.png"
                    alt=""
                    className="src"
                  />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Design</h3>
                  <p>
                    Provide a selection of ambient sounds like nature sounds,
                    calming music, or white noise, allowing users to create a
                    personalized and serene environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="/Screenshot 2023-12-27 at 23.29.33.png"
                    alt=""
                    className="src"
                  />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Relaxation Techniques</h3>
                  <p>
                    Incorporate diverse relaxation techniques, including
                    deep-breathing exercises, progressive muscle relaxation, and
                    mindfulness-based stress reduction.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="/Screenshot 2023-12-27 at 23.29.33.png"
                    alt=""
                    className="src"
                  />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Guided Meditations</h3>
                  <p>
                    Offer a variety of guided meditation sessions tailored to
                    different needs, such as stress reduction, sleep
                    enhancement, or focus improvement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="/Screenshot 2023-12-27 at 23.29.33.png"
                    alt=""
                    className="src"
                  />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Support &amp; Renovation</h3>
                  <p>
                    {" "}
                    Regular usage enables users to develop resilience, manage
                    stress, and cultivate a sense of calmness. The app's
                    adaptability to individual preferences ensures a
                    personalized journey, fostering a lasting and transformative
                    relationship with inner tranquility. In essence, it acts as
                    a digital sanctuary for users, providing ongoing support and
                    renovation for their mental and emotional well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pb">
    <div className="container">
      <div className="row justify-content-start mb-5 pb-2">
        <div className="col-md-4 heading-section ftco-animate">
          <span className="subheading subheading-with-line">
            <small className="pr-2 bg-white">Projects</small>
          </span>
          <h2 className="mb-4">Featured Projects</h2>
        </div>
        <div className="col-md-8 pl-md-5 heading-section ftco-animate">
          <div className="pl-md-4 border-line">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in. A small river named Duden flows by their place and
              supplies it with the necessary regelialia. It is a paradisematic
              country, in which roasted parts of sentences fly into your mouth.
            </p>
            <p className="category mt-5">
              <span className="active mr-2">
                <a href="#">All Work</a>
              </span>
              <span className="mr-2">
                <a href="#">Interior</a>
              </span>
              <span className="mr-2">
                <a href="#">Exterior</a>
              </span>
              <span className="mr-2">
                <a href="#">Landscape</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-wrap">
      <div className="row no-gutters">
        <div className="col-md-5 col-lg-3 ftco-animate">
          <div className="project">
            <img
              src="/young-boy-with-his-head-sky-eyes-closed-clear-day_181624-50883.avif"
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="text">
              <span>Interior Design</span>
              <h3>
                <a href="project.html">Office Interior Design</a>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="project">
            <img
              src="/woman-sitting-rock-side-view_23-2149726409.avif"
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="text">
              <span>Interior Design</span>
              <h3>Office Interior Design</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="project">
            <img
              src="/young-woman-holding-her-book-while-looking-out-window_23-2149029695.avif"
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="text">
              <span>Interior Design</span>
              <h3>Office Interior Design</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="project">
            <img
              src="/serene-young-indian-man-meditating-outdoors-with-his-eyes-closed_1262-12896.avif"
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="text">
              <span>Interior Design</span>
              <h3>Office Interior Design</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  <br /><br />


</>
  )
}
}


export default App2;
