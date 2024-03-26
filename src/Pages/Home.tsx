import React from "react";
import { Helmet } from "react-helmet";
import AHome from "../components/AHome";
import BHome from "../components/BHome";
import CHome from "../components/CHome";
import DHome from "../components/DHome";
import EHome from "../components/EHome";

function Home() {
  return (
    <>
      <Helmet>
        <title>파일셔플 | 홈</title>
      </Helmet>
      <section className="메인-배경">
        <div className="메인-인덱스">
          <h1>Driver Booster 11 Free</h1>
          <h2>
            No.1 Free 1-click utility for driver management. Trusted by 280
            million users for over 10 years.
          </h2>
          <div className="메인-체크">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              1-click to auto scan, repair, and update all outdated drivers on a
              schedule.
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              6,500,000+ Driver Database keeps your hardware always up to date.
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Fix crashes, and sound/connection/Bluetooth issues for a smoother
              gaming experience.
            </p>
          </div>
          <button onClick={()=> window.open("https://file-shuffler.netlify.app/", "_blank")}>
            Free Download
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </div>
      </section>
      <AHome/>
      <BHome/>
      <CHome/>
      <DHome/>
      <EHome/>
    </>
  );
}

export default Home;
