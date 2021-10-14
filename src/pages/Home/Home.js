import React, { useState,useEffect } from 'react'

import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { Animated } from 'react-animated-css';


function Home() {
 
    return (
        <div className="home">
            <div className="home_container">

            
                <Link to="/weather">
                        <button>
                            Weather<br />
                            <FontAwesomeIcon icon={faCloud} />
                        </button>
                </Link>
            
            
                <Link to="/todo">
                    <button>
                        Todo-list<br />
                        <FontAwesomeIcon icon={faStickyNote} />
                    </button>
                </Link>
            
            </div>
            
        </div>
    )
}

export default Home
