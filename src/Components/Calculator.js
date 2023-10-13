import { Component } from "react";
import Screen from "./Screen";
import Button from "./Button";
import { evaluate } from "mathjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      ques: "",
      ans: "",
      isDayMode: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleBackground = this.toggleBackground.bind(this);
  }

  handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case "=": {
        if (this.state.ques !== "") {
          try {
            const answer = evaluate(this.state.ques);
            if (answer === undefined) this.setState({ ans: "Error" });
            else this.setState({ ans: answer, ques: "" });
          } catch (err) {
            this.setState({ ans: "Error" });
          }
          break;
        }
        break;
      }
      case "Clear": {
        this.setState({ ques: "", ans: "" });
        break;
      }
      case "<=": {
        var str = this.state.ques;
        str = str.substr(0, str.length - 1);
        this.setState({ ques: str });
        break;
      }
      default: {
        this.setState((prevState) => ({ ques: prevState.ques + value }));
        break;
      }
    }
  }
  toggleBackground() {
    this.setState((prevState) => ({ isDayMode: !prevState.isDayMode }));
  }

  render() {
    const bgClass = this.state.isDayMode ? "bg1" : "bg2";
    const backgroundClass = this.state.isDayMode ? "back1" : "back2";
    document.body.className =backgroundClass;
    return (
      <div className={`Container ${bgClass}`}>
        <div style={{ width: "100%", padding:"1rem" }}>
          <button onClick={this.toggleBackground}>
            <FontAwesomeIcon icon={this.state.isDayMode ? faSun : faMoon} />
          </button>
        </div>

        <Screen ques={this.state.ques} ans={this.state.ans} />

        <div>
          <Button label={"Clear"} handleClick={this.handleClick} />
          <Button label={"^"} handleClick={this.handleClick} />
          <Button label={"%"} handleClick={this.handleClick} />
          <Button label={"<="} handleClick={this.handleClick} />
        </div>

        <div>
          <Button label={"7"} handleClick={this.handleClick} />
          <Button label={"8"} handleClick={this.handleClick} />
          <Button label={"9"} handleClick={this.handleClick} />
          <Button label={"/"} handleClick={this.handleClick} />
        </div>
        <div>
          <Button label={"4"} handleClick={this.handleClick} />
          <Button label={"5"} handleClick={this.handleClick} />
          <Button label={"6"} handleClick={this.handleClick} />
          <Button label={"*"} handleClick={this.handleClick} />
        </div>
        <div>
          <Button label={"1"} handleClick={this.handleClick} />
          <Button label={"2"} handleClick={this.handleClick} />
          <Button label={"3"} handleClick={this.handleClick} />
          <Button label={"-"} handleClick={this.handleClick} />
        </div>
        <div>
          <Button label={"0"} handleClick={this.handleClick} />
          <Button label={"."} handleClick={this.handleClick} />
          <Button label={"="} handleClick={this.handleClick} />
          <Button label={"+"} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
