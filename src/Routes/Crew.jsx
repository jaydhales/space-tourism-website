import Header from "../Components/Header.jsx";

function Crew(props) {
  let crewInfo = props.data;
  return (
    <div className="app crew">
      <Header />
      <section>
        <h5>
          <span className="num">02</span> meet your crew
        </h5>
        <main>
          <div className="details">
            <p className="Subheading-1">{crewInfo[0].role}</p>
            <h3>{crewInfo[0].name}</h3>
            <p>{crewInfo[0].bio}</p>
            <div className="crew-name">
              {props.rawData.map((da) => (
                <button
                  onClick={props.crewChange}
                  id={da.name}
                  key={da.name}
                  style={{
                    width: 12,
                    height: 12,
                  }}
                ></button>
              ))}
            </div>
          </div>
          <img src={crewInfo[0].images.png} alt="" />
        </main>
      </section>
    </div>
  );
}

export default Crew;
