import React from "react";
export default function CHome() {
  return (
    <div className="섹터C">
      <img
        src="https://www.iobit.com/tpl/images/home/imf-left-laptop.png"
        alt=""
        width="650px"
      />
      <section>
        <h1>IObit Malware Fighter 11 Free</h1>
        <h2>
          Provide an all-around security solution to secure you from malware,
          virus, spyware, ransomware, scams, and other online threats
          completely.
        </h2>
        <button onClick={()=> window.open("https://file-shuffler.netlify.app/", "_blank")}>Free Download</button>
      </section>
    </div>
  );
}
