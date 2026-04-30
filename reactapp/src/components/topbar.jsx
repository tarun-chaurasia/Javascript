import React from "react";
import {link, Navlink} from 'react-router-dom'

function TopBar() {
    return(
        <div>
            <h1>Logo</h1>
            <ul>
                <link to="/"><li>HomePage</li></link>
                <Navlink style={({isActive})=>({color:isActive?"red":blue})} to="/"><li>HomePage</li></Navlink>
                <Navlink style={({isActive})=>({color:isActive?"red":blue})} to="/article"><li>Article</li></Navlink>
                <link to="/article"><li>Article</li></link>
                <link to="/contact"><li>Contact</li></link>
            </ul>
        </div>
    )
}

export default TopBar