import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { Skeleton, Stack } from "@mui/material";
import { LinearProgress } from "@mui/material";
import "./Loading.css"

export default function LoadingSpinner() {
 return <div><svg style={{left:"50%", top: "50%", position: "absolute",  transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)", preserveAspectRatio:"xMidYMid meet", viewBox:"0 0 187.3 93.7", height:"300px", width:"400px",marginTop:"10rem" ,marginLeft:"5rem"}}>
      <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none" id="outline" stroke="#0DA2E7"></path>
      <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#0DA2E7" fill="none" opacity="0.05" id="outline-bg"></path>
    </svg>
      <h5 style={{left:"55%", top: "65%", position: "absolute",  transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)", preserveAspectRatio:"xMidYMid meet", viewBox:"0 0 187.3 93.7", height:"300px", width:"400px",marginTop:"10rem" ,marginLeft:"5rem"}}> Loading...</h5>
     </div>

 

}
