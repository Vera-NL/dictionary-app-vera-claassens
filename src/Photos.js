import React from "react";
import "./Photos.css";

export default function Photos (props) {
    if (props.photos) {
        return (
            <section className="Photos">
                <div classname="row">
                    {props.photos.map(function(photo, index) {
                        return (
                            <div classname="col-3" key={index}>
                                <a href={photo.src.original} target="blank" rel="noreferrer">
                                <img alt="" className="img-fluid" src={photo.src.tiny} />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    } else {
        return null;
    }
}