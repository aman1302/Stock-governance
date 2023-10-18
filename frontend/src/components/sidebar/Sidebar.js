import React, { useState } from "react";
import "./Sidebar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiProductHuntLine } from "react-icons/ri";
import menu from "../../data/sidebar";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="layout">
      <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
          <img  style={{width: '25px', height: '25px', marginTop:'13px'}} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKS3A8fONRDCP_jM8tIbSxx66uJJDxlvw8fGn-amRqBeYB5JcLP_zdqps7xgYlQJaagSPh2zZ2JjWeOjpi8X0p8lqmKtibZxlj7_E9j106S6Qlz613Ac2IHnbzAgzmcjTjEEouhZDeJ2sKPRln5imBBQ_B2OrcotW3-llXoh0Il2_7_NiKurIj1t6-Pd63/w945-h600-p-k-no-nu/Logo.png"/>
          </div>

          <div
            className="bars"
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>

      <main
        style={{
          paddingLeft: isOpen ? "230px" : "60px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
