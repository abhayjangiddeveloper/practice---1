import React from "react";
import './Box.css';

const Box = (props) =>{
    return(
        <>
            <div className="box_container">
                <div className="img">
                    {props.img}
                </div>
                <div className="box_heading_and_pera">
                    <div className="box_heading">
                        {props.heading}
                    </div>
                    <div className="box_pera">
                        {props.pera}
                    </div>
                </div>
                <div className="button">
                    {props.button} {props.button_arrow}
                </div>
            </div>
        </>
    );
}

export default Box;