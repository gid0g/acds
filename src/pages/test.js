import React, { useState } from "react";

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "active" : ""} onClick={handleClick}>
      Content
    </div>
  );
}
export default MyComponent;