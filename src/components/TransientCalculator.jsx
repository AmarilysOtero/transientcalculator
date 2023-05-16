import React from "react";
import calculateTransient from "./calculateTransient";
import Button from "./Button";
import OutputScreen from "./OutputScreen";

// Create a Class Component Calculator.
class TransientCalculator extends React.Component {
  constructor() {
    super();

    // set our default state
    this.state = {
      question: "",
      n: "",
      m: "",
      l: "",
      answer: "",
      data: [],
    };

    // Bind our handleClick method (sets 'this' explicitly
    // to refer to this component) We did this because 'this'
    // would refer to the source of the click events
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  render() {
    return (
      <div className="frame">
        <h1> Transient Calculator </h1>
        <div class="mainCalc">
          <OutputScreen
            answer={this.state.answer}
            question={this.state.question}
          />
          <div className="input-row">
            <input
              type="number"
              value={this.state.n}
              onChange={this.handleInputChange}
              name="n"
              placeholder="n"
            />
            <input
              type="number"
              value={this.state.m}
              onChange={this.handleInputChange}
              name="m"
              placeholder="m"
            />
            <input
              type="number"
              value={this.state.l}
              onChange={this.handleInputChange}
              name="l"
              placeholder="l"
            />
          </div>
          <div className="button-row">
            <Button label={"Clear"} handleClick={this.handleClick} />
            <Button label={"Delete"} handleClick={this.handleClick} />
            <Button label={"."} handleClick={this.handleClick} />
            <Button label={"/"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"7"} handleClick={this.handleClick} />
            <Button label={"8"} handleClick={this.handleClick} />
            <Button label={"9"} handleClick={this.handleClick} />
            <Button label={"*"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"4"} handleClick={this.handleClick} />
            <Button label={"5"} handleClick={this.handleClick} />
            <Button label={"6"} handleClick={this.handleClick} />
            <Button label={"-"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"1"} handleClick={this.handleClick} />
            <Button label={"2"} handleClick={this.handleClick} />
            <Button label={"3"} handleClick={this.handleClick} />
            <Button label={"+"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"0"} handleClick={this.handleClick} />
            <Button label={"="} handleClick={this.handleClick} />{" "}
          </div>
          <div className="transient">
            <Button
              label={"Calculate"}
              handleClick={() =>
                this.setState({
                  answer: calculateTransient(
                    this.state.n,
                    this.state.m,
                    this.state.l
                  ),
                })
              }
            />
          </div>
        </div>
      </div>
    );
  }
  // our method to handle all click events from our buttons
  handleClick(event) {
    // get the value from the target element (button)
    const value = event.target.value;

    switch (value) {
      case "=": {
        // if it's an equal sign, use the eval module
        // to evaluate the question ,convert the answer
        // (in number) to String
        if (this.state.question !== "") {
          var ans = "";
          try {
            ans = eval(this.state.question);
          } catch (err) {
            this.setState({ answer: "Math Error" });
          }
          if (ans === undefined) this.setState({ answer: "Math Error" });
          // update answer in our state.
          else this.setState({ answer: ans.toString(), question: "" });
          break;
        }
        break;
      }
      case "Clear": {
        // if it's the Clears sign, just clean our
        // question and answer in the state
        this.setState({
          question: "",
          n: "",
          m: "",
          l: "",
          answer: "",
        });
        break;
      }

      case "Delete": {
        var str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
        break;
      }
      case "Calculate": {
        const { n, m, l } = this.state;
        const result = calculateTransient(n, m, l);
        this.setState({ answer: result });
        break;
      }

      default: {
        // for every other command, update the answer in the state
        // this.setState({ question: (this.state.question += value) });
        // break;
        this.setState((prevState) => ({
          question: prevState.question + value,
        }));
        break;
      }
    }
  }
  handleInputChange(event) {
    const { name, value } = event.target;
    // this.setState({ [name]: value });
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
}

// Export Calculator.
export default TransientCalculator;
