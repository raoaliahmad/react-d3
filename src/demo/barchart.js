import React, { useEffect, useRef } from 'react'
import * as d3 from "d3"
import { transition } from 'd3'

const BarChart = () => {
	
	const canvas = useRef(null)
	const data = [2, 4, 2, 6, 8]
	
	useEffect(() => {
		if (canvas.current) {
			drawBarChart(data)
		}
	}, [canvas.current])
	
	const drawBarChart = (data) => {
		
		const canvasWidht = 600
		const canvasHeight = 400
		const scale = 20

		const svgCanvas = d3.select(canvas.current)
			.style("margin","20px")
			.append("svg")
			.attr("width", canvasWidht)
			.attr("height", canvasHeight)
			.style("border", "1px solid black")

		svgCanvas.selectAll("rect")
			.data(data)
			.enter()
			.append("rect")
			.attr("width", 40)
			.attr("height", (d) => d * scale)
			.attr("fill", "orange")
			.attr("x", (d, i) => i * 45)
			.transition()
			.duration(1000)
			.attr("y", (d) => canvasHeight - d * scale)
		
		svgCanvas.selectAll("text")
			.data(data)
			.enter()
			.append("text")
			.transition()
			.duration(1000)
			.attr("x", (d, i) => (i * 45) + 10)
			.attr("y", (d, i) => (canvasHeight - d * scale) - 10)
			.text(d => d)
	}


	return (<div ref={canvas}/>)
}

export default BarChart
