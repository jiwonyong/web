import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder: string;
  type?: string;
  // onFoucs: () => void;
  // onBlur: () => void;
  // onChange: ()=> void
  className?: string;
  width?: string;
  height?: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputBoxProps {
  placeholder: string;
  height: string;
  width: string;
}

const InputContainer = styled.div`
  height: auto;
`;

const InputBox = styled.input<InputBoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 4px;
  border: 1px solid var(--color-border-default);
  padding: 8px 16px;
  font-size: 16px;

  &::placeholder {
    color: var(--color-text-disabled);
  }

  &:focus {
    border: 1px solid var(--color-border-primary);
  }
`;

export default function Input({
  placeholder = "",
  // onFoucs,
  // onBlur,
  // onChange={onChange},
  type = "text",
  width = "100%",
  height = "48px",
  className,
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <InputContainer>
      <InputBox
        type="text"
        placeholder={placeholder}
        // onFocus={onFoucs}
        // onBlur={onBlur}
        // onChange={onChange}
        width={width}
        height={height}
        className={`input ${className}`}
        value={value}
        onChange={onChange}
      />
      <label htmlFor="">{label}</label>
    </InputContainer>
  );
}
