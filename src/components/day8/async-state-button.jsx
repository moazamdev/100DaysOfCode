import React from "react";

const AsyncStateButton = () => {
    const [count, setCount] = React.useState(0);
  
    const handleIncrease = () => {
        console.log("handleIncrease")
        setTimeout(() => setCount(prev => prev + 1), 1000);
    };
    
    const handleDecrease = () => {
        console.log("handleDecrease")
      setTimeout(() => setCount(prev => prev - 1), 1000);
    };
  
    return (
      <div>
        Count: {count}
        <hr />
        <div>
          <button type="button" onClick={handleIncrease}>
            Increase
          </button>
          <button type="button" onClick={handleDecrease}>
            Decrease
          </button>
        </div>
      </div>
    );
  };

export default AsyncStateButton;