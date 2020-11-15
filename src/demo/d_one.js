import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import "./style.css"

export const One = () => {
	
	const temperatureData = [8, 5, 13, 9, 12]
	const temperatures = useRef(null)

	useEffect(() => {
		if (temperatures.current) {
			d3.select(temperatures.current)
				.selectAll("h2")
				.data(temperatureData)
				.enter()
					.append("h2")
					.text((datapoint) => datapoint + " degrees")
				.attr("class", (dp) => dp > 10 ? "highTemperature" : "lowTemperature")
				.transition()
					.duration(100)
				.delay((dp, it) => it)
				.attr("r", (dp) => Math.sqrt(dp * 2))
		}
	},[temperatureData])
	
	
	return (<div ref={temperatures} />)
}
