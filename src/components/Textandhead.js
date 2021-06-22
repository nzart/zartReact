import React from 'react'

const Textandhead = (props) => {

  return(

    <div className="port_text">

      <h3>{props.head}</h3>
      <p>{props.para}</p>

    </div>
  )
}

export default Textandhead