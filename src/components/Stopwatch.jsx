import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
	const [disabled, setDisabled] = useState(false)
	const [countdown, setCountdown] = useState({ minutes: 5, seconds: 0, triggerFiveMin: false })

	useEffect(() => {
		if (countdown.seconds === 1) {
				const interval = setInterval(() => {
				setCountdown(prevState => {
					if (prevState.seconds === 0) {
						if (prevState.minutes === 0 && prevState.triggerFiveMin === false) {
							return {
								...prevState,
								minutes: 3,
								seconds: 1,
								triggerFiveMin: true
							}
						}
						if (prevState.minutes === 0 && prevState.seconds === 0 && prevState.triggerFiveMin === true) {
							setDisabled(false)
							clearInterval(interval)
							return {
								...prevState,
								minutes: 5,
								seconds: 0,
								triggerFiveMin: false
							}
						}
						return {
							...prevState,
							minutes: prevState.minutes - 1,
							seconds: 1
						}
					}
					return {
						...prevState,
						seconds: prevState.seconds - 1
					}
				})
			}, 1000)
		}
	}, [disabled])
	
	const start = () => {
		setCountdown({
			minutes: 5,
			seconds: 1,
			triggerFiveMin: false
		})
		setDisabled(true)
	}

	return (
		<>
			<br />
			{countdown.minutes < 10 && 0}{countdown.minutes}:{countdown.seconds < 10 && 0}{countdown.seconds}
			<br />
			<button 
				onClick={start} 
				disabled={disabled}
			>
				Start
			</button>
		</>
	)
}

export default Stopwatch