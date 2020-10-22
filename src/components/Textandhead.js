import React from 'react'

const Textandhead = (props) => {

  return(

    <div className="port_text">

      <h1>{props.head}</h1>
      <p>{props.para}</p>

    </div>
  )
}

export default Textandhead