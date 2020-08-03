import React from "react";


import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'


library.add(faFacebookF); 

function Header() {
  return (
    <header className="float-panel fixed">
      <h1>
      <i class="footicon fab fa-twitter"></i><span> </span> twitter 
      </h1>
    </header>
  );
}

export default Header;
