import React from "react";
export default function BHome() {
  return (
    <div className="섹터B">
      <h1>IObit Uninstaller 13 Free</h1>
      <h2>
        A light and free solution to scan, manage and delete software in bulk.<br/>
        Completely uninstall all unwanted programs, stubborn programs, and
        extensions.
      </h2>
      <button onClick={()=> window.open("https://file-shuffler.netlify.app/", "_blank")}>
        Free Download
      </button>
    </div>
  );
}
