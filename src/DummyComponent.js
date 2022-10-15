import React, { Component } from "react";
export class DummyComponent extends Component {
  componentWillUnmount() {
    console.log("Unmounting Dummy component");
  }
  render() {
    return <div>DummyComponent</div>;
  }
}
export default DummyComponent;
