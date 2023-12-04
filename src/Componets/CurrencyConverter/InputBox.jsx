import React from "react";
// import { useEffect, useState } from "react";

const InputBox = ({ lable, Option, Amount, SetInamount, Icon, SetInval }) => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{lable}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={Amount}
          onChange={(e) => {
            SetInamount(Number(e.target.value));
          }}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={Icon}
          onChange={(e) => {
            SetInval(e.target.value);
          }}
        >
          {Option.map((item) => {
            if (item !== "00")
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
          })}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
