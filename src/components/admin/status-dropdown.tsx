"use client";
import React from "react";

interface StatusDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default StatusDropdown;
