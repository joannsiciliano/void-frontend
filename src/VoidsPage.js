import React, { Component } from "react";
import VoidForm from "./VoidForm";
import VoidContainer from "./VoidContainer";
import Header from "./Header";
const voidsURL = "https://the-void-becomes-you.herokuapp.com/voids";
const moodsURL = "https://the-void-becomes-you.herokuapp.com/moods";

class VoidsPage extends Component {
  state = {
    voids: [],
    moods: [],
  };
  componentDidMount() {
    //fetches both URLS in promise and setState
    Promise.all([
      fetch(voidsURL).then((response) => response.json()),
      fetch(moodsURL).then((response) => response.json()),
    ]).then(([all_voids, all_moods]) =>
      this.setState({ moods: all_moods, voids: all_voids })
    );
  }
  // updates state of void entries upon POST
  addVoids = (voids) => {
    this.setState({
      voids: [...this.state.voids, voids],
    });
  };

  // deletes void entry from front and backend
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
        <Header />
        <VoidForm moods={this.state.moods} addVoids={this.addVoids} />

        <VoidContainer voids={this.state.voids} delete={this.handleDelete} />
      </div>
    );
  }
}

export default VoidsPage;
