import React from 'react'
import { Bookmark } from "lucide-react"

const Card = (props) => {
  return (
    <div className="card">
      {/* Top Section */}
      <div className="top">
        <img src={props.brandLogo} alt={`${props.company} logo`} />
        <button>save <Bookmark size={12} /></button>
      </div>

      {/* Center Section */}
      <div className="center">
        <div className='center-header'>
          <h2>{props.company}</h2>
          <h3><span>{props.datePosted}</span></h3>
        </div>
        <h2>{props.post}</h2>
        <div>
          <h4>{props.tags}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
