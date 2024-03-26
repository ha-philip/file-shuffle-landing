import React from "react";
export default function AHome() {
  return <>
    <section className="섹터A">
        <h1>Advanced SystemCare 17 Free</h1>
        <hr/>
        <h2>Best FREE PC Cleaner & Optimizer Software for Windows. Cleaner, Faster, Safer.</h2>
        <div className="섹터A-내용">
            <img src="https://www.iobit.com/tpl/images/home/asc-laptop.png" alt="" width="750px"/>
            <div className="섹터A-콘텐츠">
                <div className="섹터A-아이콘텍스트">
                    <img src="https://www.iobit.com/tpl/images/home/icon-cleanerpc.png" alt="" width="52"/>
                    <span>
                        <h4>Clean PC with AI</h4>
                        <p>Empowered by AI to clean junk files, unwanted programs, and useless registries, to free up 20% more disk space.</p>
                    </span>
                </div>
                <div className="섹터A-아이콘텍스트">
                    <img src="https://www.iobit.com/tpl/images/home/icon-fasterpc.png" alt="" width="52"/>
                    <span>
                        <h4>Boost startup & Internet speed</h4>
                        <p>Troubleshoot startup process and manage browser configuration for faster startup and Internet connection.</p>
                    </span>
                </div>
                <div className="섹터A-아이콘텍스트">
                    <img src="https://www.iobit.com/tpl/images/home/icon-saferpc.png" alt="" width="52"/>
                    <span>
                        <h4>Protect privacy data</h4>
                        <p>All-round privacy protections to sweep off traces and hide real identity for 100% safe online browsing.</p>
                    </span>
                </div>
            </div>
        </div>
        <button onClick={()=> window.open("https://file-shuffler.netlify.app/", "_blank")}>Free Download</button>
    </section>
  </>;
}
