import React from 'react';

const validationComponent = (props) => {
  const text = props.inputLength > 4 ? "Text long enough" : "Text too short";
  return <p>Validation: {text}</p>
}

export default validationComponent;