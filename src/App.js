import React, {useState, useEffect} from 'react';
import './App.css';
import img1 from './img/img3.png';
import arrow from './img/Arrow.png';
import bgVideo from './video/bgVideo.mp4';
import imgGithub from './img/github.png';
import imgBehance from './img/behance.png';
import imgLinkedin from './img/linkedin.png';
import imgInstagram from './img/instagram.png';
import imgGmail from './img/email.png';
import imgPhone from './img/phone.png';
import imgLocation from './img/location.png';
import imgBackToTop from './img/ArrowTop.png';

function App() {

  const [showGmailPopup, setShowGmailPopup] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const toggleGmailPopup = () => {
    setShowGmailPopup(!showGmailPopup);
  };

  const togglePhonePopup = () => {
    setShowPhonePopup(!showPhonePopup);
  };

  const toggleAddressPopup = () => {
    setShowAddressPopup(!showAddressPopup);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollPosition > windowHeight / 2) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="relative App font-sans h-screen">
      <video 
        src={bgVideo} 
        autoPlay 
        loop 
        muted 
        className='w-full h-full object-cover absolute top-0 z-0 opacity-20'
      />
      {/* <video 
        src={bgVideo} 
        autoPlay 
        loop 
        muted 
        className='w-full h-full object-cover absolute top-full left-0 z-0 opacity-10'
      />
      <video 
        src={bgVideo} 
        autoPlay 
        loop 
        muted 
        className='w-full h-full object-cover absolute top-full mt-52 left-0 z-0 opacity-20'
      /> */}
      <div className='absolute w-full z-10'>
        <div className='h-5 w-full bg-primary md:w-full md:h-10'></div>
        <div className='flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-5 py-20 md:py-36 px-5 md:px-56'>
          <div className='w-60 md:w-72 border-8 border-primary rounded-full overflow-hidden'>
            <img src={img1} alt=''/>
          </div>
          <div className='flex flex-col items-center md:items-start text-primary gap-5'>
            <h1 className='text-center md:text-left font-extrabold text-3xl md:text-5xl'>
              Hey there,<br/>I’m Pravil Wijesinghe.
            </h1>
            <p className='text-justify w-3/4 md:w-[631px] text-secondary'>
              An IT undergraduate deeply passionate about software design and development, currently pursuing a B.Sc. in IT at MIT. 
              With a relentless drive to innovate, seeks opportunities to create impactful IT solutions for societal advancement. Proficient 
              in graphic design, UI/UX design, web development, and software development. Committed to a career in IT, strives to contribute 
              innovative solutions to organizational challenges.
            </p>
            <a href='#contact-me'>
              <button className='bg-primary hover:bg-secondary rounded-full text-white px-4 py-2'>
                Contact Me
                <img src={arrow} alt='' className='h-4 inline-block ml-2' />
              </button>
            </a>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center w-full px-5 md:px-56 text-primary font-bold text-xl gap-8 md:gap-20 pb-20 md:pb-36'>
          <h3 className='hover:scale-125 hover:cursor-pointer transition-transform duration-300'>UI/UX Engineer</h3>
          <h3 className='hover:scale-125 hover:cursor-pointer transition-transform duration-300'>Web Developer</h3>
          <h3 className='hover:scale-125 hover:cursor-pointer transition-transform duration-300'>Graphic Designer</h3>
          <h3 className='hover:scale-125 hover:cursor-pointer transition-transform duration-300'>Front-End Developer</h3>
        </div>
        <div className='flex flex-col items-center w-full px-5 md:px-56 text-primary pb-20 md:pb-36 gap-8 md:gap-20'>
          <h1 className='md:text-4xl text-3xl font-extrabold'>Connect with My Works</h1>
          <div className='flex flex-col md:flex-row justify-center items-center w-full text-lg font-medium gap-10 md:gap-24'>
            <a href="https://github.com/Pravil-Wijesinghe" target="_blank" rel="noopener noreferrer">
              <button>
                <img src={imgGithub} alt='' className='h-24'/>
                Github
              </button>
            </a>
            <a href="https://www.behance.net/pravilwijesinghe" target="_blank" rel="noopener noreferrer">
              <button>
                <img src={imgBehance} alt='' className='h-24'/>
                Behance
              </button>
            </a>
            <a href="https://www.linkedin.com/in/pravil-wijesinghe-b6908a233/" target="_blank" rel="noopener noreferrer">
              <button>
                <img src={imgLinkedin} alt='' className='h-24'/>
                Linkedin
              </button>
            </a>
            <a href="https://www.instagram.com/designs.by.pravil/" target="_blank" rel="noopener noreferrer">
              <button>
                <img src={imgInstagram} alt='' className='h-24'/>
                Instagram
              </button>
            </a>
          </div>
        </div>
        <div id='contact-me' className='flex flex-col items-center w-full px-5 md:px-56 text-primary pb-20 md:pb-36 gap-8 md:gap-20'>
          <h1 className='md:text-4xl text-3xl font-extrabold'>Contact Me</h1>
          <div className='flex flex-row justify-center w-full text-lg font-medium gap-8 md:gap-24'>
            <button onClick={toggleGmailPopup}>
              <img src={imgGmail} alt='' className='md:h-24 h-16'/>
              Gmail
            </button>
            <button onClick={togglePhonePopup}>
              <img src={imgPhone} alt='' className='md:h-24 h-16'/>
              Phone
            </button>
            <button onClick={toggleAddressPopup}>
              <img src={imgLocation} alt='' className='md:h-24 h-16'/>
              Address
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center w-full p-5 md:gap-10 h-fit md:h-10 bottom-0 bg-primary text-center text-white'>
          <p>Copyright © 2024 Pravil Wijesinghe.</p>
        </div>
      </div>
      {showGmailPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center px-5 z-20 bg-black bg-opacity-50">
          <div className="flex flex-col items-center bg-white p-5 rounded-lg">
            <img src={imgGmail} alt='' className='h-24' />
            <p className="text-lg">pravilwijesinghe@gmail.com</p>
            <button className="mt-4 bg-primary rounded-full text-white px-4 py-2" onClick={toggleGmailPopup}>Close</button>
          </div>
        </div>
      )}
      {showPhonePopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center px-5 z-20 bg-black bg-opacity-50">
          <div className="flex flex-col items-center bg-white p-5 rounded-lg">
            <img src={imgPhone} alt='' className='h-24' />
            <p className="text-lg">(+94) 76 319 3321</p>
            <button className="mt-4 bg-primary rounded-full text-white px-4 py-2" onClick={togglePhonePopup}>Close</button>
          </div>
        </div>
      )}
      {showAddressPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center px-5 z-20 bg-black bg-opacity-50">
          <div className="flex flex-col items-center bg-white p-5 rounded-lg">
            <img src={imgLocation} alt='' className='h-24' />
            <p className="text-lg text-center">27/A/1, Mavita West, Danawala, Neluwa, Galle, Sri Lanka</p>
            <button className="mt-4 bg-primary rounded-full text-white px-4 py-2" onClick={toggleAddressPopup}>Close</button>
          </div>
        </div>
      )}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-20 bg-primary hover:bg-secondary p-3 rounded-full shadow-lg"
        >
          <img src={imgBackToTop} alt="Back to Top" className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default App;
