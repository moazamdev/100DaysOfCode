import React from 'react';

function Stopwatch() {
    const [isOn, setIsOn] = React.useState(false);
    const [timer, setTimer] = React.useState(0);

    React.useEffect(() => {
        let interval;

        if (isOn) {
            interval = setInterval(
                () => setTimer(timer => timer + 1),
                1000,
            );
        }

        return () => clearInterval(interval);
    }, [isOn]);

    const onReset = () => {
        setIsOn(false);
        setTimer(0);
    };
    return (
        <div>
            {timer}

            {!isOn && (
                <button type="button" onClick={() => setIsOn(true)}>
                    Start
                </button>
            )}

            {isOn && (
                <button type="button" onClick={() => setIsOn(false)}>
                    Stop
                </button>
            )}
            <button type="button" disabled={timer === 0} onClick={onReset}>
                Reset
            </button>
        </div>
    );
}

export default Stopwatch;