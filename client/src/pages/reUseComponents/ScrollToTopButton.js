import React, {useState} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaAngleUp } from 'react-icons/fa';
import "../../App.css";

const ScrollToTopButton= ()=> {
    const [showButton, setShowButton] = useState(false);
  
    const handleScrollToTop = () => {
      scroll.scrollToTop({
        duration: 900,
        smooth: 'easeInOutCubic',
      });
    };
  
    const handleScroll = () => {
      // Check if the user has scrolled more than 300 pixels from the top
      setShowButton(window.scrollY > 300);
    };
  
    // Attach event listener to handle scroll
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll); 
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={`scroll-to-top ${showButton ? 'show' : ''}`} onClick={handleScrollToTop}>
        <FaAngleUp />
      </div>
    );
  }
  

  export default ScrollToTopButton


  