import React, { Component } from "react";
import axios from "axios";
import style from "./style";

class RangeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numChance: 3,
      numValue: 0,
      textValue: "",
      isSuccess: false,
      disable: false,
      display: "none",
      predefinedValue: ""
    };
    this.handleRangeSubmit = this.handleRangeSubmit.bind(this);
    this.loadRangeValue = this.loadRangeValue.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.pollInterval = null;
    this.rangeValue = 5;
    this.userRangeData = [];
  }

  loadRangeValue() {
    axios.get(this.props.url + "getRangeValue/").then(res => {
      // this.setState({ data: res.data });
      console.log("response", res.data);
      this.userRangeData = res.data;
      console.log("userRangeData", this.userRangeData);
      this.setPredefinedValue(res.data);
    });
  }

  setPredefinedValue(data) {
    this.setRangeValue = data.UserDetails.map(val => {
      this.setState({ predefinedValue: val.predefinedValue });
    });

    console.log("this. state", this.state.predefinedValue);
  }

  handleRangeSubmit(e) {
    e.preventDefault();
    let val = this.state.numChance - 1;
    this.setState({ textValue: this.state.textValue, numChance: val });
    val === 0 ? this.setState({ disable: true, display: "block" }) : "";
    if (this.state.textValue === this.state.predefinedValue) {
      this.setState({
        isSuccess: true,
        disable: true,
        display: "block",
        numChance: 0
      });
    } else {
      this.setState({ isSuccess: false, display: "block" });
    }
  }

  componentDidMount() {
    this.loadRangeValue();
  }

  componentWillUnmount() {}

  handleRangeChange(e) {
    this.setState({ textValue: e.target.value });
  }

  render() {
    const displayStyle = { display: this.state.display };
    return (
      <div style={style.commentBox}>
        <label>Number Of Chances : {this.state.numChance} </label>
        <form style={style.commentForm} onSubmit={this.handleRangeSubmit}>
          <input
            type="text"
            placeholder="Enter Number..."
            style={style.commentFormAuthor}
            value={this.state.textValue}
            onChange={this.handleRangeChange}
          />
          <button
            type="submit"
            style={style.commentFormPost}
            disabled={this.state.disable}
            value="Check"
          >
            CHECK
          </button>
        </form>
        <div style={displayStyle}>
          {this.state.isSuccess ? (
            <h2 style={style.success}>              
              Yes You are Right , the Number is {this.state.textValue}
            </h2>
          ) : this.state.numChance > 0 ? (
            <span style={style.error}>Sorry Try Again</span>
          ) : (
            <span style={style.error}>             
              Sorry you have reached number of limits
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default RangeBox;
