import { IconContext } from "react-icons";
import { FaApple } from "react-icons/fa";
import { FaAtlassian } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaAiOutlineMenu } from "react-icons/fa";


// import { IconName } from "react-icons/fa";

import { red } from "@material-ui/core/colors";


function Footer() {
    return (
        <IconContext.Provider
        value={{ color: 'blue', size: '50px' }}
      >
        <div className="">
<footer>
   <div className="foot">
  <h1>Ahmed Mohamed Hassan</h1>
  <h1>Full-stack developer</h1>
  </div>
{/*  <FaApple  color="red" size="100px"/>
 */} 
 
 <div className="icons">
 <div><a href="https://www.facebook.com/ahmedbicir.ohirsi"><FaFacebookF/></a></div>
 <div> <a href="https://twitter.com/Ahmedbicir1"><FaTwitter/></a></div>
<div><FaInstagramSquare/></div>
{/* <div><ImMenu/></div> */}


</div>
</footer> 
        </div>
        </IconContext.Provider>            
    )
}

export default Footer
