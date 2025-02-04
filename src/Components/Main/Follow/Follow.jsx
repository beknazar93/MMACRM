import React from "react"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Follow() {
    return(
        <div className="follow">
            <h1 className="follow__title">Follow MMA_Academy.Mashrapov</h1>
            <div className="follow__net">
                <a href="https://www.instagram.com/mma_academy.mashrapov/" target="_blank"><FaInstagram className="follow__net-social"/></a>
                <a href="https://www.tiktok.com/@mm.academy.mashrapov?_t=8nuXWRTUqgB&_r=1" target="_blank"><FaTiktok className="follow__net-social"/></a>
            </div>
        </div>
    )
}
export default Follow;