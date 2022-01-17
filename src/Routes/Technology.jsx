import Header from "../Components/Header.jsx";

function Technology(props) {
  let techInfo = props.data;
  return (
    <div className="app tech">
      <Header />
      <section>
        <div className="tech-nav">
          {props.rawData.map((da) => (
            <button onClick={props.techChange} id={da.name} key={da.name}>
              <h5 style={{ color: "#0b0d17", padding: 0 }}>
                {props.rawData.indexOf(da) + 1}
              </h5>
            </button>
          ))}
        </div>
        <h5>
          <span className="num">03</span> space launch 101
        </h5>
        <main>
          <div className="details">
            <p className="Subheading-2">the terminology</p>
            <h3>{techInfo[0].name}</h3>
            <p>{techInfo[0].description}</p>
          </div>
          <img src={techInfo[0].images.portrait} alt="" />
        </main>
      </section>
    </div>
  );
}

export default Technology;
