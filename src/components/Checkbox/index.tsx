import React from "react";
import styled from "styled-components";

interface CheckboxProps {
  label: string;
  width?: string;
  height?: string;
}

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const SteyldCheckbox = styled.input<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid var(--color-border-default);
  margin-right: 8px;
`;

export default function Checkbox({
  label = "",
  width = "16px",
  height = "16px",
}: CheckboxProps) {
  return (
    <CheckboxContainer>
      <SteyldCheckbox
        type="checkbox"
        width={width}
        height={height}
        className="checkbox"
      />
      <label htmlFor="" className="checkbox-label">
        {label}
      </label>
    </CheckboxContainer>
  );
}
