import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  width?: string;
  height?: string;
  theme: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

type ThemeType = "primary" | "delete" | "secondary";

const StyledButton = styled.button<{
  width: string;
  height: string;
  theme: ThemeType;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 5px;
  font-family: "Noto sans KR";
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.theme === "primary" &&
    css`
      background: var(--color-bg-default);
      color: var(--color-text-sub);
      border: 1px solid var(--color-bg-primary);

      &:hover {
        background: var(--color-bg-primary-light);
      }
      &:active {
        background: #ffbc80;
      }
      &:disabled {
        background: none;
        border: 1px solid var(--button-disabled);
        color: var(--button-disabled);
        cursor: not-allowed;
      }
    `}
`;

export default function Button({
  width = "100%",
  height = "48px",
  theme,
  type = "submit",
  children,
}: ButtonProps) {
  return (
    <StyledButton width={width} height={height} type={type} theme={theme}>
      {children}
    </StyledButton>
  );
}
