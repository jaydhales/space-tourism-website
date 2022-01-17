// import React from "react";
import Header from "../Components/Header.jsx";

function Destination(props) {
  let data = props.data;

  return (
    <div className="app destination">
      <Header />

      <section>
        <h5>
          <span className="num">01</span> Pick your Destination
        </h5>
        <main>
          <img src={data[0].images.png} alt="" />
          <div className="details">
            <div className="destination-name">
              {props.rawData.map((da) => (
                <button
                  onClick={props.destinationChange}
                  id={da.name}
                  key={da.name}
                  style={{ borderRadius: 0, padding: 5 }}
                >
                  {da.name}
                </button>
              ))}
            </div>
            <h2>{data[0].name}</h2>
            <p>{data[0].description}</p>
            <div
              style={{
                content: "",
                width: "100%",
                height: 1,
                background: "#d0d6f9",
              }}
            />

            <div
              style={{
                display: "flex",
              }}
            >
              <div className="det">
                <p className="Subheading-2">avg. distance</p>
                <p className="Subheading-1">{data[0].distance}</p>
              </div>
              <div className="det">
                <p className="Subheading-2">est. travel time</p>
                <p className="Subheading-1">{data[0].travel}</p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Destination;
