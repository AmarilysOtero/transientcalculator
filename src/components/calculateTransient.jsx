import * as d3Graph from "d3-graphviz";
import * as d3 from "d3";
import * as dagreD3 from "dagre-d3";

export default function calculateTransient(n, m, l, i = 0) {
  var depen;
  var initial_vec;
  var mat;
  var tt;
  if (n === 1) {
    return 2 * l + m - 2;
  }
  if (n === 2) {
    return 2 * l + 2 * m - 3;
  } else {
    depen = getDepen(n, m, l);
    initial_vec = generateZ(1, n + m + l - 2);
    initial_vec[initial_vec.length - 1] = 0;
    mat = [initial_vec];
    tt = dynamicalSystem(depen, initial_vec, mat, i);
    // Replace 'return tt.length - 1;' with the following line:
    return tt;
  }
}

function countElement(arr, el) {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      total += 1;
    }
  }
  return total === arr.length;
}

function generateZ(it, len) {
  var zeros = [];
  for (let i = 0; i < len; i++) {
    zeros.push(it);
  }
  return zeros;
}

function getDepen(n, m, l) {
  var dict = {};

  for (let i = 1; i < n + m + l - 1; i++) {
    if (!(i in dict) && i !== m + n + l - 2) {
      if (!dict[i]) {
        dict[i] = [];
      }
      dict[i].push(i + 1);
    }
    if (i === n) {
      if (!dict[i]) {
        dict[i] = [];
      }
      dict[i].push(1);
      dict[i].sort();
    }
    if (i === m + n - 1) {
      if (!dict[i]) {
        dict[i] = [];
      }
      dict[i].push(n);
      dict[i].sort();
    }
    if (i === m + n + l - 2) {
      if (!dict[i]) {
        dict[i] = [];
      }
      dict[i].push(n + m - 1);
      dict[i].sort();
    }
  }
  return dict;
}

function dynamicalSystem(dependencies, initial_vec, mat, count) {
  var copy_vec = [];
  var total = 1;
  if (
    countElement(initial_vec, 0) === true ||
    countElement(initial_vec, 1) === true ||
    count === 50
  ) {
    // console.log(...initial_vec)
    return mat.map((row) => row[0]); // Flatten the matrix and return it
  } else {
    // console.log(...initial_vec)
    copy_vec = generateZ(0, initial_vec.length);
    // console.log(copy_vec);
    for (let prop in dependencies) {
      total = 1;
      // console.log(prop);
      const ref = dependencies[prop];
      for (let items = 0; items < ref.length; items++) {
        // console.log(items-1);
        total *= initial_vec[ref[items] - 1];
      }
      copy_vec[prop - 1] = total;
    }
    mat.push(copy_vec);
    return dynamicalSystem(dependencies, copy_vec, mat, count + 1);
  }
}

function animate(depen, mat) {
  const width = 900;
  const height = 600;
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  const g = new dagreD3.graphlib.Graph().setGraph({});

  for (const k in depen) {
    for (const item of depen[k]) {
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

  for (const instances of mat) {
    const colors = g.nodes().map((node) => {
      if (instances[parseInt(node) - 1] === 0) {
        return "red";
      } else {
        return "black";
      }
    });

    g.nodes().forEach((node, index) => {
      g.node(node).style = `fill: ${colors[index]}`;
    });

    render(svg.select("g"), g);
  }
}

export { calculateTransient, getDepen };

//}
//console.log(calculateTransient(3, 7, 11));
