import React, { useEffect, useRef, useState } from "react";
import './style.css';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import { useMediaQuery } from 'react-responsive';
import Skills from "./components/Skills";
import axios from 'axios';

const throttle = function (callback, waitTime) {
  let timerId = null;
  return (e) => {
      if (timerId) return;
      timerId = setTimeout(() => {
          callback.call(this, e);
          timerId = null;
      }, waitTime);
  };
};

function App() {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document)

  const handleScroll = () => {
      const {pageYOffset} = window;
      const deltaY = pageYOffset - pageY;
      const hide = pageYOffset !== 0 && deltaY >= 0;
      setHide(hide);
      setPageY(pageYOffset)
  }

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
      documentRef.current.addEventListener('scroll', throttleScroll);
      return () => documentRef.current.removeEventListener('scroll', throttleScroll);
  }, [pageY]);

  const isTablet = useMediaQuery({query : '(min-width: 768px) and (max-width: 1023px)'})
  const isMobile = useMediaQuery({query : '(max-width:768px)'})

  return (
    <div className="App">
        <Header hide={hide} isTablet={isTablet} isMobile={isMobile}/>
        <main>
          <Home isTablet={isTablet} isMobile={isMobile} />
          <About isTablet={isTablet} isMobile={isMobile}/>
          <Skills isTablet={isTablet} isMobile={isMobile}/>
          <Portfolio isTablet={isTablet} isMobile={isMobile} />
        </main>
    </div>
  );
}

export default App;
