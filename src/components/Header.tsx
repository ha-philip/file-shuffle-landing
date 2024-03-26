import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Header() {
  return (
    <div className="헤더-컨테이너">
      <header className="헤더">
        <Link to="/" className="헤더-로고">
          <h3>
            File <br />
            Shuffle
          </h3>
        </Link>
        <div className="헤더-메뉴컨테이너">
          <div className="헤더-작은메뉴">
            <Link to="">Partner</Link>|<Link to="">Support</Link>
          </div>
          <div className="헤더-메인메뉴">
            <h4>
              SpeedUp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="드롭다운">
              <Dropdown menu={1}/>
            </div>
            </h4>
            <h4>
              Driver Updater
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="드롭다운">
              <Dropdown menu={2}/>
            </div>
            </h4>
            <h4>
              Antivirus
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="드롭다운">
              <Dropdown menu={3}/>
            </div>
            </h4>
            <h4>
              Must-have Tools
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="드롭다운">
              <Dropdown menu={4}/>
            </div>
            </h4>
            <h4>
              Store
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="드롭다운">
              <Dropdown menu={5}/>
            </div>
            </h4>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
