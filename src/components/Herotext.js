import React, { useEffect } from 'react'

import gsap, {Power3} from 'gsap'

const Herotext = (props) => {

  useEffect(() => {
    gsap.timeline()
    .to(
      '.heroText',
      {
        height: '50vh',
        delay: .4,
        duration: .5,
        ease: Power3.ease
      }
    )
    .to(
      '.mainItem',
      {
        opacity: 1,
        y: -20,
        skewX: 0,
        delay: .3,
        duration: .8,
        ease: Power3.easeOut,
      }
    )
  })

  return (

    <div className="heroText">
      <h1 className="mainItem">{props.main}</h1>
      <h2 className="mainItem">{props.sub}</h2>
    </div>

  )
}

export default Herotext;