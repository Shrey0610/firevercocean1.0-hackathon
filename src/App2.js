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
        <p className="lead">
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
        <div className="col-md-7 wrap-about pb-md-5 ftco-animate">
          <div className="heading-section mb-5 pl-md-5">
            <div className="pl-md-5 ml-md-5">
              <span className="subheading subheading-with-line">
                <small className="pr-2 bg-white">About</small>
              </span>
              <h2 className="mb-4">
                A multifaceted approach to your employees’ mental wellness
              </h2>
            </div>
          </div>
          <div className="pl-md-5 ml-md-5 mb-5">
            <p>
              In the bustling digital age, the 'Serene Business' emerges as a
              beacon of serenity amid the chaos. This innovative venture aims to
              deliver a sanctuary of peace to users' fingertips, offering a
              diverse range of mindfulness and relaxation features. Through
              guided meditation sessions, soothing ambient sounds, and
              personalized stress-relief programs, the app becomes a virtual
              oasis for individuals seeking tranquility in their hectic lives.{" "}
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
  <section
    className="ftco-section ftco-counter img"
    id="section-counter"
    style={{
      backgroundImage:
        "url(/images/images/GettyImages-1470160123-400x400-c-default.webp)"
    }}
    data-stellar-background-ratio="0.5"
  >
    <div className="container">
      <div className="row d-md-flex align-items-center justify-content-end">
        <div className="col-lg-10">
          <div className="row d-md-flex align-items-center">
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={20}>
                    0
                  </strong>
                  <span>Years of Experienced</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={100}>
                    0
                  </strong>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={200}>
                    0
                  </strong>
                  <span>Finished Projects</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={300}>
                    0
                  </strong>
                  <span>Working Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-services">
    <div className="container">
      <div className="row justify-content-start mb-5 pb-5">
        <div className="col-md-4 heading-section ftco-animate">
          <h2 className="mb-4">Our Work Flow</h2>
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
                src="/images/images/Screenshot 2023-12-27 at 23.28.12.png"
                alt=""
                className="src"
              />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">
                Content tailored to your employees’ personal needs
              </h3>
              <p>
                Approachable mental health practices that are engaging,
                culturally relevant, and diverse.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon d-flex justify-content-center align-items-center">
              <img
                src="/images/images/Screenshot 2023-12-27 at 23.29.06.png"
                alt=""
                className="src"
              />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">
                User-friendly platform built for enterprise benefits leaders
              </h3>
              <p>
                Quickly and comprehensively make mental wellness a priority
                today with our enterprise-grade tools and resources, so you can
                focus on the long term.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon d-flex justify-content-center align-items-center">
              <img
                src="/images/images/Screenshot 2023-12-27 at 23.29.18.png"
                alt=""
                className="src"
              />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">
                Critical business outcomes measured with proper rigor
              </h3>
              <p>
                Leveraging Calm Science, we deliver evidence-based results that
                are meaningful to your organization and your employees when it
                comes to protecting their mental health.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-start mt-5 py-5">
        <div className="col-md-4 heading-section ftco-animate">
          <h2 className="mb-4">Our Services</h2>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
        <div className="col-md-8 ftco-animate">
          <div className="row d-flex">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="/images/images/Screenshot 2023-12-27 at 23.29.33.png"
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
                    src="/images/images/Screenshot 2023-12-27 at 23.29.33.png"
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
                    src="/images/images/Screenshot 2023-12-27 at 23.29.33.png"
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
                    src="/images/images/Screenshot 2023-12-27 at 23.29.33.png"
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
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="project">
            <img
              src="/images/images/young-boy-with-his-head-sky-eyes-closed-clear-day_181624-50883.avif"
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
              src="/images/images/woman-sitting-rock-side-view_23-2149726409.avif"
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
              src="/images/images/young-woman-holding-her-book-while-looking-out-window_23-2149029695.avif"
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
              src="/images/images/serene-young-indian-man-meditating-outdoors-with-his-eyes-closed_1262-12896.avif"
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
  <section className="ftco-section testimony-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate">
          <span className="subheading subheading-with-line">
            <small className="pr-2 bg-light">Testimony</small>
          </span>
          <h2 className="mb-4">Our satisfied customer says</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
        </div>
      </div>
      <div className="row ftco-animate">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel">
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div
                  className="user-img mb-5"
                  style={{
                    backgroundImage: "url(/images/images/person_1.jpg)"
                  }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-5 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="pl-5">
                    <p className="name">Garreth Smith</p>
                    <span className="position">
                      CEO Founder of Commercial Building
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div
                  className="user-img mb-5"
                  style={{
                    backgroundImage: "url(/images/images/person_2.jpg)"
                  }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-5 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="pl-5">
                    <p className="name">Garreth Smith</p>
                    <span className="position">
                      CEO Founder of Interior Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div
                  className="user-img mb-5"
                  style={{
                    backgroundImage: "url(/images/images/person_3.jpg)"
                  }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-5 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="pl-5">
                    <p className="name">Garreth Smith</p>
                    <span className="position">Exterior Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div
                  className="user-img mb-5"
                  style={{
                    backgroundImage: "url(/images/images/person_1.jpg)"
                  }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-5 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="pl-5">
                    <p className="name">Garreth Smith</p>
                    <span className="position">Landscape Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap p-4 pb-5">
                <div
                  className="user-img mb-5"
                  style={{ backgroundImage: "url(/images/images/team-4.jpg)" }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-5 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="pl-5">
                    <p className="name">Garreth Smith</p>
                    <span className="position">System Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate">
          <span className="subheading subheading-with-line">
            <small className="pr-2 bg-white">Expert Team</small>
          </span>
          <h2 className="mb-4">Our Team</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div
              className="img"
              style={{ backgroundImage: "url(/images/images/2.jpg)" }}
            />
            <div className="text px-4 pt-4">
              <h3>John Wilson</h3>
              <span className="position mb-2">Co-Founder / CEO</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social d-flex">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-google-plus" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div
              className="img"
              style={{ backgroundImage: "url(/images/images/5.jpeg)" }}
            />
            <div className="text px-4 pt-4">
              <h3>David Smith</h3>
              <span className="position mb-2">Achitect</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social d-flex">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-google-plus" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div
              className="img"
              style={{ backgroundImage: "url(/images/images/3.png)" }}
            />
            <div className="text px-4 pt-4">
              <h3>David Smith</h3>
              <span className="position mb-2">Achitect</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social d-flex">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-google-plus" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div
              className="img"
              style={{ backgroundImage: "url(/images/images/1.png)" }}
            />
            <div className="text px-4 pt-4">
              <h3>David Smith</h3>
              <span className="position mb-2">Achitect</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social d-flex">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-google-plus" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-start mb-5 pb-2">
        <div className="col-md-4 heading-section ftco-animate">
          <span className="subheading subheading-with-line">
            <small className="pr-2 bg-white">Blog</small>
          </span>
          <h2 className="mb-4">Recent Blog</h2>
        </div>
        <div className="col-md-8 pl-md-5 heading-section ftco-animate">
          <div className="pl-md-4 border-line">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry">
            <a
              href="blog-single.html"
              className="block-20"
              style={{
                backgroundImage:
                  'url("/images/images/smiling-tourist-hipster-girl-white-shirt-working-laptop-while-sitting-wooden-bench-beautiful-autumn-forest_613910-19126.avif")'
              }}
            ></a>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <a href="#">Jan. 20, 2019</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </a>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry" data-aos-delay={100}>
            <a
              href="blog-single.html"
              className="block-20"
              style={{
                backgroundImage:
                  'url("/images/images/young-man-sitting-using-laptop-against-scenery-landscape-forest-andaman-sea-phuket_34362-80.avif")'
              }}
            ></a>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <a href="#">Jan. 20, 2019</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </a>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ftco-animate">
          <div className="blog-entry" data-aos-delay={200}>
            <a
              href="blog-single.html"
              className="block-20"
              style={{
                backgroundImage:
                  'url("/images/images/young-girl-cafe-book-reading-coffee_1150-10652.avif")'
              }}
            ></a>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <a href="#">Jan. 20, 2019</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" className="meta-chat">
                    <span className="icon-chat" /> 3
                  </a>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-client">
    <div className="container">
      <div className="row justify-content-start mb-5 pb-2">
        <div className="col-md-4 heading-section ftco-animate">
          <span className="subheading subheading-with-line">
            <small className="pr-2 bg-white">Clients</small>
          </span>
          <h2 className="mb-4">Our CLients</h2>
        </div>
        <div className="col-md-8 pl-md-5 heading-section ftco-animate">
          <div className="pl-md-4 border-line"></div>
        </div>
      </div>
      <div className="row ftco-animate">
        <div className="col-md-12">
          <div className="carousel-client owl-carousel">
            <div className="item">
              <img
                src="/images/images/McDonalds-344x172-c-center.png"
                alt=""
                className="src"
              />
            </div>
            <div className="item">
              <img
                src="/images/images/Sinai-Health-344x172-c-center.png"
                alt=""
                className="src"
              />
            </div>
            <div className="item">
              <img
                src="/images/images/ASICS-344x172-c-center.png"
                alt=""
                className="src"
              />
            </div>
            <div className="item">
              <img
                src="/images/images/Reed-Smith-LLP-344x172-c-center.png"
                alt=""
                className="src"
              />
            </div>
            <div className="item">
              <img
                src="/images/images/Parkview-Health-344x172-c-center.png"
                alt=""
                className="src"
              />
            </div>
            <div className="item">
              <img
                src="/images/images/Unity-Health-Toronto-344x172-c-center.png"
                alt=""
                className="src"
              />
            </div>
            <div className="item">
              <img
                src="/images/images/CHRISTUS-Health-344x172-c-center.png"
                alt=""
                className="src"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</>
  )
}
}


export default App2;
