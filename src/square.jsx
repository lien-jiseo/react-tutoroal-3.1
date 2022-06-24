/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Square(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="square"
      onClick={() => onClick()}
    >
      {props.value}
    </button>
  );
}
