import React from "react";
// import  RiProductHuntLine  from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <img  style={{width: '30px', height: '30px', marginTop:'13px'}} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKS3A8fONRDCP_jM8tIbSxx66uJJDxlvw8fGn-amRqBeYB5JcLP_zdqps7xgYlQJaagSPh2zZ2JjWeOjpi8X0p8lqmKtibZxlj7_E9j106S6Qlz613Ac2IHnbzAgzmcjTjEEouhZDeJ2sKPRln5imBBQ_B2OrcotW3-llXoh0Il2_7_NiKurIj1t6-Pd63/w945-h600-p-k-no-nu/Logo.png"/ >
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Free Trial 1 Month</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
