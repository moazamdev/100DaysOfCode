import React from "react"

const ToggleWithTitle = () => {
    const [toggle, setToggle] = React.useState(true);
  
    const handleToggle = () => {
      setToggle(!toggle);
    };
  
    return <Toggler toggle={toggle} onToggle={handleToggle} />;
  };

  const Toggler = ({ toggle, onToggle }) => {
    const [title, setTitle] = React.useState('Hello React');
  
    React.useEffect(() => {
      console.log('I run if toggle or title change (and on mount).');
    }, [toggle, title]);
  
    const handleChange = (event) => {
      setTitle(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={title} onChange={handleChange} />
  
        <button type="button" onClick={onToggle}>
          Toggle
        </button>
  
        {toggle && <div>{title}</div>}
      </div>
    );
  };

  export default ToggleWithTitle;