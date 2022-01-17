import Header from "../Components/Header.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="app">
      <Header />
      <section>
        <h5>So You want to go to</h5>
        <main>
          <div className="details">
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well{" "}
              <br />
              genuinely go to outer space and not hover kind of on the <br />
              edge of it. Well sit back, and relax because we’ll give you a{" "}
              <br />
              truly out of this world experience!
            </p>
          </div>
          <Link to="/destination" className="landing-page-main-btn">
            <p className="h5">Explore</p>
          </Link>
        </main>
      </section>
    </div>
  );
}

export default Home;
