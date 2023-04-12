import './intro.scss'
import { init } from "ityped";
import { Fragment, useEffect, useRef, useState } from "react";


function TypedText({ strings }) {
  const[isMounted, setIsMounted] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && textRef.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 500,
        strings: ["Desenvolvimento de software.", "Engenharia de software.", "Desenvolvimento web."],
      });
    }
  }, [isMounted]);

  return <span ref={textRef} />;
}


export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src="assets/Allystor.png" alt="profile-image"/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Olá visitante! sou</h2>
          <h1>Álvaro Veiga</h1>
          <h3>Com o que trabalho? <span><Fragment><TypedText strings={[]}/></Fragment></span></h3>
        </div>
        <a href='#portfolio'>
          <img src="assets/down.png" alt="down-arrow"/>
        </a>
      </div>
    </div>
  )
}
