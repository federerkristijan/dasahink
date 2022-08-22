import React from 'react'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <span>(49)17639956749</span>
      <a href='/'>hhinkis@gmail.com</a>
      <a href='https://www.instagram.com/dasa_hink/'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  )
}

export default Footer
