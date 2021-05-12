import React from "react";
import Sketch from "react-p5";
import VoidsPage from "./VoidsPage";
import "./App.css";
let angle = 50.0;
let offset = 500;
let scalar = 480;
let speed = 0.06;

function App() {
  // function windowResized() {}
  const setup = (p5, canvasParentRef) => {
    p5.frameRate(30);
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    p5.fill(0);
    p5.background(0);
  };
  const draw = (p5) => {
    let x = offset + Math.cos(angle) + scalar;
    let y = offset + Math.sin(angle) * scalar;
    p5.ellipse(x, y, 10, 10);
    p5.strokeWeight(0.6);

    p5.ellipse(x, y, 30, 30);
    p5.stroke(255, 255, 255);
    angle += speed;
    scalar += speed;
  };
  return (
    <div className="App">
      <VoidsPage />
      <Sketch className="p5-sketch" setup={setup} draw={draw} />
    </div>
  );
}

export default App;
