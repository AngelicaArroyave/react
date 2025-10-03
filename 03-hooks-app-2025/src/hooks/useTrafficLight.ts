import { useEffect, useState } from 'react';

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}
type TrafficLightColor = keyof typeof colors

export const useTrafficLight = (initialValue = 'red') => {
    const [light, setLight] = useState<TrafficLightColor>(initialValue as TrafficLightColor)
    const [countDown, setCountDown] = useState(5)

    // countDown Effect
    useEffect(() => {
        if (countDown === 0) return

        const intervalId = setInterval(() => {
            setCountDown(prev => countDown - 1)
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [countDown, light])

    // Change light color Effect
    useEffect(() => {
        if (countDown > 0) return

        setCountDown(5)

        if (light === 'red') {
            setLight('green')
            return
        }

        if (light === 'yellow') {
            setLight('red')
            return
        }

        if (light === 'green') {
            setLight('yellow')
            return
        }
    }, [countDown, light])

    return {
        // Props
        countDown,

        // computed
        percentage: (countDown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500'
    }
}