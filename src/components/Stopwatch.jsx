import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
	const [seconds, setSeconds] = useState(0)
	const [starter, setStarter] = useState(false)

	useEffect(() => {
		if (seconds === 59) {
			setInterval(() => {
				setSeconds(prevState => {
					if (prevState === 0) {
						return 59
					}
					return prevState - 1
				})
			}, 1000)
		}
	}, [starter])
	
	const start = () => {
		setSeconds(59)
		setStarter(true)
	}

	return (
		<>
			<br />
			{seconds < 10 && 0}{seconds}
			<br />
			<button 
				onClick={start} 
				disabled={starter}
			>
				Start
			</button>
		</>
	)
}

export default Stopwatch