import React from 'react'
import { Link } from 'gatsby'
/* import nyc from 'assets/images/bkbridge.jpg' 
import mount from 'assets/images/mountain.jpg'  */

const Herocard = (props) => {
    return (
        <Link to={props.page} className='card_hero'>
        {/* <Link to={props.page}> */}
        {/* <div className='card_hero'> */}
            <img src={props.imgSrc} alt={props.altTag} />

            <div className='card_desc'>
                {/* <h1>{props.title}</h1> */}
                {/* <h2>Hello</h2> */}

                
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
            

        </Link>
    )
}



export default Herocard;