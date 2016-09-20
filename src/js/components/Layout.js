import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import {Link} from "react-router"; // buat bikin link tag

export default class Layout extends React.Component {
  // getVal(val){
  //   return "Will" + val;
  // }
  // constructor() {
  //   super(); // react Component
  //   this.state = {
  //     title: "Welcome ",
  //   };
  // }

  //
  // changeTitle(title) {
  //   this.setState({title});
  // }

  render() {
    return (
      <div>
        <h1>Tesst ajah </h1>
        {this.props.children}
        <Link to="archives" class ="btn btn-danger">Archives</Link>
        //<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
