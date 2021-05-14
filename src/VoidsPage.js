import React, { Component } from "react";
import VoidForm from "./VoidForm";
import VoidContainer from "./VoidContainer";
import Header from "./Header";
const voidsURL = "https://the-void-becomes-you.herokuapp.com/";

class VoidsPage extends Component {
  state = {
    voids: [],
    moods: [],
  };
  componentDidMount() {
    Promise.all([
      fetch(voidsURL).then((response) => response.json()),
      fetch("https://the-void-becomes-you.herokuapp.com/moods").then(
        (response) => response.json()
      ),
    ]).then(([all_voids, all_moods]) =>
      this.setState({ moods: all_moods, voids: all_voids })
    );
  }

  addVoids = (voids) => {
    this.setState({
      voids: [...this.state.voids, voids],
    });
  };

  handleDelete = (voids) => {
    fetch(`${voidsURL}/${voids.id}`, {
      method: "DELETE",
    });
    const voidCollection = this.state.voids.filter((vd) => vd !== voids);
    this.setState({ voids: voidCollection });
  };

  // displayVoids = () => {
  //   return props.voids.map((voids) => {
  //     console.log(voids);
  //     return (
  //       <VoidCard
  //         key={this.state.voids.id}
  //         voids={this.state.voids}
  //         delete={this.handleDelete}
  //       />
  //     );
  //   });
  // };

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
