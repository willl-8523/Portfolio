import React from 'react';
import { Link } from 'react-router-dom';


const LinkFooter = ({link, icon}) => {
    return (
      <>
        <li className="inline-block mx-1.5 hover:text-white hover:scale-125 duration-300">
          <Link to={link} target="_blank">
            <i className={`bx bxl-${icon}`}></i>
          </Link>
        </li>
      </>
    );
}
 
export default LinkFooter;