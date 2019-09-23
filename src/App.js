import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedComponent: null,
      previousStatus: null,
      currentStatus: null,
      designHistory: []
    }
  }

  $"#canvas".click(function(e){
    getPosition(e);
  })

  drawPoint = (x, y) => {
    const pointSize = 3;
    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = "ff2626"; //Red Color
    ctx.beginPath(); //Start Path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); //Draw a point with the arc function of the canvas with a point structure.
    ctx.fill(); //Close the path and fill.
  }

  getPosition = (event) => {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left; // x == the location of the click in the document
    let y = event.clientY - rect.left; // y == the location of the click in the document

    this.drawPoint(x, y);
  }
  // <img src={logo} className="App-logo" alt="logo" />
  // <p>
  //   Edit <code>src/App.js</code> and save to reload.
  // </p>
  // <a
  //   className="App-link"
  //   href="https://reactjs.org"
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   Learn React
  // </a>

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Jubilant Octo-Engine</h1>
          <canvas
            id="canvas"
            width="750"
            height="500"
            style="cursor:crosshair;background:url(http://www.mundoanimalia.com/images/articles/66/58/06/7f6ffaa6bb0b408017b62254211691b5/gallina.jpg)"
          >
          </canvas>
        </header>
      </div>
    )
  }
}
