import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  width: 100%;

  @media (min-width: 640px) {
    padding: 3rem 10%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 4rem;
  text-align: center;
  `;

export const Description = styled.h2`
  text-align: center;
  font-size: 2rem;
  line-height: 4rem;
`;

export const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(30rem, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  }
`;

export const Box = styled.div`
  text-align: center;
  padding: 3rem;
  border: 1px solid var(--offwhite);
  border-radius: 1rem;
  width: 100%;
`;

export const Price = styled.p`
  font-size: 3rem;
`;

export const Separator = styled.span`
  display: block;
  border-top: 1px solid var(--offwhite);
  margin: 2rem 0;
`;

export const Benefit = styled.p`
  font-size: 2rem;
  color: var(--gray);
`;
