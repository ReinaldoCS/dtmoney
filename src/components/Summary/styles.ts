import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  // 3 colocas de tamanhos iguais
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -7rem;

  div {
    background: var(--shape);
    padding: 1.5rem;
    border-radius: 0.25rem;
    color: var( -text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; //display: inline => não aceita margin-top
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`;