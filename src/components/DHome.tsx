import React from "react";
export default function DHome() {
  return <div className="섹터D">
  <section>
    <h1>IObit Software Updater 6</h1>
    <h2>
    Simply and fastly keep all software up to date, reduce the risk of security flaws from old software.
    </h2>
    <button onClick={()=> window.open("https://file-shuffler.netlify.app/", "_blank")}>Free Download</button>
  </section>
  <img
    src="https://www.iobit.com/tpl/images/home/isu-right-laptop.png"
    alt=""
    width="600px"
  />
</div>
}
