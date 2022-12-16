import "./index.css";
import React from "react";
import { f_a_j_a, f_a_j_c, f_ } from "../../cssUtility";
import { Button } from "primereact/button";
import { NAV_BAR_CONTENT } from "../../constant/constant";

export default function NavigationBar() {
 
  return (
    <>
      <div
        className={`${f_a_j_a} w-screen  bg-white border-round-right border-round-left shadow-5`}
      >
        <div className={f_a_j_c}>
          <img src={NAV_BAR_CONTENT.Imageurl.img_1} alt="grid-logo" />
          <div className="text-900 font-bold text-4xl">{NAV_BAR_CONTENT.Title.title_1}</div>
        </div>
        <div className={`${f_} column-gap-4`}>
          <div className="text-900">{NAV_BAR_CONTENT.Title.title_2}</div>
          <ul className={f_}>
            {NAV_BAR_CONTENT.NavHeaders.map((N, I) => {
              return <li key={I} className='mx-3 text_color cursor-pointer'>{N.title}</li>;
            })}
          </ul>
        </div>
        <div>
          <Button label="Sign In" className="p-button-rounded cursor-pointer" />
        </div>
      </div>
    </>
  );
}
