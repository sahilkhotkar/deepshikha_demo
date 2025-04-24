import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center" style={{paddingBlock: "2rem"}}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title" style={{marginTop: "4rem", }}>
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3" >
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
