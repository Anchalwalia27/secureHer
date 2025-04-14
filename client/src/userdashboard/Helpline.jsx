import React from "react";
import { Helpcontects } from "../App";
import Subcontect from "../components/user/Subcontect";

export default function Helpline() {
  return (
    <div className="m-2 md:m-4 lg:m-6 lg:p-2">
      <div className="m-1 p-2 md:m-4 lg:m-6 lg:p-2 shadow-2xs border-none rounded-2xl">
        <h1 className="text-md px-1 font-medium md:text-2xl lg:text-3xl lg:mb-2">National Number</h1>
        <span className="text-sm md:text-xl lg:text-xl">
          In case of an emergency, call an appropriate number for help.
        </span>
      </div>

      {/* Container to wrap all contacts */}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {Helpcontects.map((item, index) => (
          <Subcontect 
            key={index} 
            src={item.src} 
            title={item.title} 
            shortdescription={item.shortdescription} 
            longdescription={item.longdescription} 
          />
        ))}
      </div>
    </div>
  );
}
