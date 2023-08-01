import * as React from 'react';

const ToggleEffect = () => {
  const [toggle, setToggle] = React.useState(true);

  React.useEffect(() => {
    console.log("useEffect");
    return () => {
        console.log("unmounting");
    }
    });

    
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return <Toggler toggle={toggle} onToggle={handleToggle} />;
};

const Toggler = ({ toggle, onToggle }) => {
  return (
    <div>
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};

export default ToggleEffect;