import * as React from 'react';

const TimerComponent = () => {
    const [timer, setTimer] = React.useState(0);

    // cleanup
    React.useEffect(() => {
        const interval = setInterval(() => setTimer(timer + 1), 1000);
        console.log("timer incremented")

        return () => {
            clearInterval(interval)
            console.log("timer cleared")
        };
    }, [timer]);

    return <div>{timer}</div>;
};

export default TimerComponent;