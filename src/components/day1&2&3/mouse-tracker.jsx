import React, { useState } from 'react';

function MouseTracker({ render }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = event => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{border: "1px solid red"}} onMouseMove={handleMouseMove}>
      {render({ mousePosition })}
    </div>
  );
}

export default MouseTracker;
