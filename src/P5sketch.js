import React from "react";
import Sketch from "react-p5";
let angle = 0.0;
let offset = 340;
let scalar = 600;
let speed = 0.1;

function P5sketch() {
  const setup = (p5, canvasParentRef) => {
    p5.frameRate(30);
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    canvas.style("z-index", "-2");
    p5.fill(0);
    p5.background(0);
  };
  const draw = (p5) => {
    let x = offset + Math.cos(angle) + scalar;
    let y = offset + Math.sin(angle) * scalar;

    p5.strokeWeight(0.2);
    p5.line(x, y, 1450, 330);
    p5.fill(10, 10, 10, 150);
    p5.stroke(0, 255, 0);
    p5.strokeWeight(1);
    p5.ellipse(x, y, 30, 30);
    // p5.fill(255, 255, 255, 100);
    // p5.ellipse(x, y, 20, 20);
    p5.stroke(255, 255, 255);
    angle += speed;
    scalar += speed;
    return (
      <div className="right-p5-div">
        <Sketch className="right-p5-sketch" setup={setup} draw={draw} />
      </div>
    );
  };
}

export default P5sketch;
