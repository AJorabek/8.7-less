import styled from "@emotion/styled";

export const SideWrapper = styled.div`
  background-color: #000;
  color: #b3b3b3;
`;

export const Card = styled.article`
  max-width: 170px;
  padding: 10px;
  border-radius: 10px;
  background-color: aliceblue;
  & > img {
    border-radius: 10px;
  }
  & > h1 {
    font-size: 15px;
    margin-top: 4px;
  }
`;

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;
