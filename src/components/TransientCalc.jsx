import React, { useState, useRef, useEffect } from "react";
import { calculateTransient, getDepen } from "./calculateTransient";
import Graph from "./Graph";
import * as d3 from "d3";

function TransientCalc() {
  const [n, setN] = useState("");
  const [m, setM] = useState("");
  const [l, setL] = useState("");
  const [result, setResult] = useState("");
  const [data, setData] = useState([]);
  const svgRef = useRef();
  // const [dependencies, setDependencies] = useState(null);
  // const [mat, setMat] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      const width = 800;
      const height = 400;
      const padding = 50;

      const xScale = d3
        .scaleLinear()
        .domain([0, data.length - 1])
        .range([padding, width - padding]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data) * 1.1])
        .range([height - padding, padding]);

      const svg = d3.select(svgRef.current);

      //Draw lines between circles
      svg
        .selectAll("line")
        .data(data.slice(1), (_, i) => i) // Provide the index as the key
        .join("line")
        .attr("x1", (d, i) => xScale(i))
        .attr("y1", (d, i) => yScale(data[i])) // Use the index to access the previous data point
        .attr("x2", (d, i) => xScale(i + 1))
        .attr("y2", (d) => yScale(d))
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2);

      svg
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", (d, i) => xScale(i))
        .attr("cy", (d) => yScale(d))
        .attr("r", 5)
        .attr("fill", "steelblue");

      svg
        .append("g")
        .attr("transform", `translate(0, ${height - padding})`)
        .call(d3.axisBottom(xScale).ticks(10)) //x
        .selectAll("text")
        .attr("transform", "rotate(-45)") // Rotate the text by -45 degrees
        .style("text-anchor", "end"); // Set the text anchor to the end of the text

      svg
        .append("g")
        .attr("transform", `translate(${padding}, 0)`)
        .call(d3.axisLeft(yScale).tickFormat(d3.format(".0f"))); //y
    }
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const transient = calculateTransient(Number(n), Number(m), Number(l));
    setResult(transient);
    setData(transient); // Set the graphData state
    // const depen = getDepen(Number(n), Number(m), Number(l));
    // setResult(transient.length - 1);
    // setDependencies(depen);
    // setMat(transient);
  };

  return (
    <div>
      <div className="transient">
        <h1>Transient Calculator</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="n">Enter n:</label>
          <input
            type="number"
            id="n"
            name="n"
            value={n}
            onChange={(e) => setN(e.target.value)}
          />
          <br />
          <label htmlFor="m">Enter m:</label>
          <input
            type="number"
            id="m"
            name="m"
            value={m}
            onChange={(e) => setM(e.target.value)}
          />
          <br />
          <label htmlFor="l">Enter l:</label>
          <input
            type="number"
            id="l"
            name="l"
            value={l}
            onChange={(e) => setL(e.target.value)}
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Calculate Transient
          </button>
        </form>

        {result && <p>The transient is {result.length - 1}</p>}
      </div>
      <div className="graph-container">
        <svg ref={svgRef} width="800" height="400"></svg>
        {/* {dependencies && mat && <Graph dependencies={dependencies} mat={mat} />} */}
      </div>
    </div>
  );
}

export default TransientCalc;
