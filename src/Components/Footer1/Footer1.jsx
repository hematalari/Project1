import React from 'react'
import './Footer1.css'
import { FaCopyright , FaFacebook, FaYoutube, FaTwitter, FaInstagram} from "react-icons/fa";

const Footer1 = () => {
  return (
    <div className='copyright-container'>
    <div className="copyright">
      <FaCopyright style={{color:'white', fontSize:'larger'}}/>
        <p>2024. All Rights Reserved. Easy Crets</p>
        <div className="copyright1">
            <a href='https://www.facebook.com/share/NkDcpArbiFSnPym2/?mibextid=qi2Omg'>
      <FaFacebook />
      </a>
      <a href='https://www.instagram.com/easycerts?igsh=MWEwMnlhMmp1bHVpbw=='>
      <FaInstagram />
      </a>
      <a href='https://twitter.com/i/flow/login'>
      <FaTwitter />
      </a>
      <a href='https://www.youtube.com/@EasyCerts-t3r'>
      <FaYoutube />
      </a>
      </div>
      </div>
    </div>
  )
}

export default Footer1