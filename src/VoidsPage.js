import React, { Component } from "react";
import VoidForm from "./VoidForm";
import VoidContainer from "./VoidContainer";
const voidsURL = "http://localhost:3000/voids";

class VoidsPage extends Component {
  state = {
    voids: [],
  };
  componentDidMount() {
    fetch(voidsURL)
      .then((response) => response.json())
      .then((all_voids) => this.setState({ voids: all_voids }));
  }
  handleDelete = (voids) => {
    fetch(`${voidsURL}/${voids.id}`, {
      method: "DELETE",
    });
    const voidCollection = this.state.voids.filter((vd) => vd !== voids);
    this.setState({ voids: voidCollection });
  };
  render() {
    return (
      <div className="voids-page">
        <VoidForm />
        <VoidContainer voids={this.state.voids} delete={this.handleDelete} />
      </div>
    );
  }
}

export default VoidsPage;
