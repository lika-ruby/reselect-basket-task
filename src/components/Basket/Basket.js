import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  color: #1565c0;
  font-size: 32px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 450px;
  padding: 20px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #dbeafe;
`;

export const Name = styled.h3`
  margin: 0;
  color: #1565c0;
  font-size: 24px;
`;

export const Price = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
`;

export const Text = styled.p`
  margin: 0;
  color: #475569;
  line-height: 1.5;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
`;

export const Count = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
`;

export const Btn = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 10px;
  background-color: #1976d2;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #1259a7;
  }
`;