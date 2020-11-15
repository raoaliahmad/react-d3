import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3'
import { useEffect, useRef } from 'react';
import {One} from "./demo/d_one"
import BarChart from './demo/barchart';

const App = () => {

	const myDiv = useRef(null)

	useEffect(() => {
		if (myDiv.current) {
			d3
				.select(myDiv.current)
				.style("background-color", "#ededed")
				.style("color", "#333333")
				.style("padding", "20px")
				.append("li")
				.text("bananas")
				.transition().duration(750)
				.style("background-color", "red")
		}

	}, [ myDiv.current ])

  return (
		<div className="App">
			<BarChart/>
			<One/>
			<div ref={myDiv}>My Div</div>
    </div>
  );
}

export default App;
