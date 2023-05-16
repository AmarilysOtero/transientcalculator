import "../index.css";
import React, { useState } from "react";
import TransientCal from "./TransientCalc";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

const Examples = () => {
  // const containerRef = useRef();
  // const [data, setData] = useState();

  // useEffect(() => {
  //   d3.csv("/gistemp.csv", d3.autoType).then(setData);
  // }, []);

  // useEffect(() => {
  //   if (data === undefined) return;
  //   const plot = Plot.plot({
  //     y: { grid: true },
  //     color: { scheme: "burd" },
  //     marks: [
  //       Plot.ruleY([0]),
  //       Plot.dot(data, { x: "Date", y: "Anomaly", stroke: "Anomaly" }),
  //     ],
  //   });
  //   containerRef.current.append(plot);
  //   return () => plot.remove();
  // }, [data]);

  // return <div ref={containerRef} />;

  return (
    <div className="examples-container">
      <TransientCal></TransientCal>
    </div>
  );
};
export default Examples;
