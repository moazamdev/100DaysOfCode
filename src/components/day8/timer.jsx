import * as React from 'react';

const TimerComponent = () => {
    const [timer, setTimer] = React.useState(0);

    // cleanup
    React.useEffect(() => {
        const interval = setInterval(
            () => setTimer((currentTimer) => currentTimer + 1),
            1000
        );
    })

    return <div>{timer}</div>;
};

export default TimerComponent;