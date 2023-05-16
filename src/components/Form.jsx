import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function Form(props) {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const [l, setL] = useState(0);
  const [cycles, setCycles] = useState([]);

  function handleCalculateClick() {
    props.calculateTransient(n, m, l, cycles);
  }

  return (
    // <form className="form-container" onSubmit={handleSubmit}>
    //   <div className="form-group">
    //     <label htmlFor="formGroupExampleInput">How many cycles?</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="formGroupExampleInput"
    //       placeholder="Cycles input"
    //       value={cycles}
    //       onChange={(event) => setCycles(event.target.value)}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="formGroupExampleInput2">n</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="formGroupExampleInput2"
    //       placeholder="n input"
    //       value={n}
    //       onChange={(event) => setN(event.target.value)}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="formGroupExampleInput3">m</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="formGroupExampleInput3"
    //       placeholder="m input"
    //       value={m}
    //       onChange={(event) => setM(event.target.value)}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="formGroupExampleInput4">l</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       id="formGroupExampleInput4"
    //       placeholder="l input"
    //       value={l}
    //       onChange={(event) => setL(event.target.value)}
    //     />
    //   </div>
    //   <button type="submit" className="btn btn-primary">
    //     Calculate
    //   </button>
    // </form>
    <div>
      <label htmlFor="n-input">N:</label>
      <input
        type="number"
        id="n-input"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />

      <label htmlFor="m-input">M:</label>
      <input
        type="number"
        id="m-input"
        value={m}
        onChange={(e) => setM(e.target.value)}
      />

      <label htmlFor="l-input">L:</label>
      <input
        type="number"
        id="l-input"
        value={l}
        onChange={(e) => setL(e.target.value)}
      />

      <label htmlFor="cycles-input">Cycles:</label>
      <input
        type="text"
        id="cycles-input"
        value={cycles}
        onChange={(e) => setCycles(e.target.value.split(","))}
      />

      <button onClick={handleCalculateClick}>Calculate</button>
    </div>
  );
}
Form.propTypes = {
  calculateTransient: PropTypes.func.isRequired,
};
export default Form;
