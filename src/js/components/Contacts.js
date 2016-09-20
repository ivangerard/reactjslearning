import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Contacts extends React.Component {
  getVal(val){
    return "Will" + val;
  }
  constructor() {
    super(); // react Component
    this.state = {
      title: "Welcome ",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    const name = "Will";

    return (
      <div>
        <h1>Its {this.getVal(1)}! </h1>
        //<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
