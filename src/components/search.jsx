import React, { Component } from "react";

const Searchbox = ({ value, onChange }) => {
  return (
    <input
      className="form-control my-3"
      type="text"
      name="query"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default Searchbox;
