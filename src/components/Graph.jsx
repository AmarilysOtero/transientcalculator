// import React, { useRef, useEffect, useState, useCallback } from "react";
// import { calculateTransient, getDepen } from "./calculateTransient";
// import * as d3Graph from "d3-graphviz";
// import * as d3 from "d3";
// import * as Plot from "@observablehq/plot";

// function Graph({ n, m, l, startAnimation }) {
//   const [transientValues, setTransientValues] = useState([]);
//   const [currentStep, setCurrentStep] = useState(0);
//   const svgRef = useRef();

//   const animate = useCallback(
//     (depen, mat) => {
//       const graph = d3Graph.graphviz.graphviz(svgRef.current);

//       const renderGraph = (step) => {
//         const instance = mat[step];
//         let dot = "digraph G {";
//         for (let k in depen) {
//           for (let item of depen[k]) {
//             dot += `${k} -> ${item}`;
//             if (instance[parseInt(k) - 1] === 0) {
//               dot += ' [color="red"];';
//             } else {
//               dot += ' [color="black"];';
//             }
//           }
//         }
//         dot += "}";

//         graph.renderDot(dot);
//       };

//       renderGraph(currentStep);
//     },
//     [currentStep]
//   );

//   useEffect(() => {
//     if (transientValues.length > 0) {
//       const plotData = generatePlotData(transientValues);
//       const plot = new Plot.plot({
//         marks: [
//           Plot.line(plotData, { x: "x", y: "y" }),
//           Plot.dot(plotData, { x: "x", y: "y" }),
//         ],
//       });
//       svgRef.current.appendChild(plot);
//     }
//   }, [transientValues]);

//   useEffect(() => {
//     if (startAnimation) {
//       const transient = calculateTransient(Number(n), Number(m), Number(l));
//       setTransientValues(transient);
//       setCurrentStep(0);
//     }
//   }, [startAnimation, n, m, l]);

//   useEffect(() => {
//     if (transientValues.length > 0) {
//       const depen = getDepen(Number(n), Number(m));
//       animate(depen, transientValues);
//     }
//   }, [currentStep, transientValues, animate]);

//   const handleNextStep = () => {
//     setCurrentStep((prevStep) => (prevStep + 1) % transientValues.length);
//   };

//   const generatePlotData = (transientValues) => {
//     const plotData = [];
//     transientValues.forEach((transientValue, index) => {
//       plotData.push({ x: index, y: transientValue });
//     });
//     return plotData;
//   };

//   return (
//     <div>
//       <br />
//       <button onClick={handleNextStep}>Next Step</button>
//       <svg ref={svgRef} style={{ width: "100%", height: "300px" }} />
//     </div>
//   );
// }

// export default Graph;
import React, { useRef, useEffect } from "react";
import { dynamicalSystem } from "./calculateTransient";
import * as d3 from "d3";
import * as dagreD3 from "dagre-d3";

const Graph = ({ dependencies, mat }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (dependencies && mat) {
      const width = 900;
      const height = 600;
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height);
      const g = new dagreD3.graphlib.Graph().setGraph({});

      for (const k in dependencies) {
        for (const item of dependencies[k]) {
          g.setNode(k, { label: k });
          g.setNode(item, { label: item });
          g.setEdge(k, item, {});
        }
      }

      const render = new dagreD3.render();
      render(svg.select("g"), g);

      const xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
      svg.attr("height", g.graph().height * 1.1);
      svg.select("g").attr("transform", `translate(${xCenterOffset}, 20)`);
    }
  }, [dependencies, mat]);

  return (
    <div>
      <svg ref={svgRef}>
        <g />
      </svg>
    </div>
  );
};

export default Graph;
