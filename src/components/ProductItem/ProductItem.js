import styled from "styled-components";

export const Card = styled.li`
  border: 2px solid #1976d2;
  border-radius: 12px;
  padding: 15px;
  background-color: white;
  width: 400px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #0d47a1;
`;

export const Text = styled.p`
  color: #333;
`;

export const Btn = styled.button`
  margin-top: 10px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background-color: #1976d2;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0d47a1;
  }
`;