import React, { useEffect, useState } from 'react'
import Digits from './Digits'
import Button from './Button'

const Stopwatch = () => {
	const [disabled, setDisabled] = useState(false)
	const [counter, setCounter] = useState({ 
		minutes: 25, 
		seconds: 0, 
		triggerFiveMin: false 
	})

	useEffect(() => {
		countdown()
	}, [disabled])

	const countdown = () => {
		// if we change seconds from 0 to 59 (line no.69), counter will start counting
		if (counter.seconds === 59) {
				const interval = setInterval(() => {
				setCounter(prevState => {

					// if seconds reaches 0, subtract minutes by 1 (line no.51)
					if (prevState.seconds === 0) {

						// if minutes reaches 0, start 5 min counting
						if (prevState.minutes === 0 && prevState.triggerFiveMin === false) {
							return {
								...prevState,
								minutes: 5,
								seconds: 0,
								triggerFiveMin: true
							}
						}

						// if 5 min counting is finished, reset the counter
						if (prevState.minutes === 0 && prevState.triggerFiveMin === true) {
							setDisabled(false)
							clearInterval(interval)
							return {
								...prevState,
								minutes: 25,
								seconds: 0,
								triggerFiveMin: false
							}
						}

						// minutes counting
						return {
							...prevState,
							minutes: prevState.minutes - 1,
							seconds: 59
						}
					}

					// seconds counting
					return {
						...prevState,
						seconds: prevState.seconds - 1
					}
				})
			}, 1000)
		}
	}
	
	const start = () => {
		setCounter({
			minutes: 24,
			seconds: 59,
			triggerFiveMin: false
		})
		setDisabled(true)
	}

	return (
		<>
			<br />
			<Digits number={counter.minutes} />
			<p>:</p>
			<Digits number={counter.seconds} />
			<br />
			<Button start={start} disabled={disabled} />
		</>
	)
}

export default Stopwatch