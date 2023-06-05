import styled from 'styled-components';

import backgroundVectors from '../../../../assets/background_vectors.png';

export const Container = styled.div`
  background: url(${backgroundVectors});
  width: 100%;
`;

export const TopSection = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: -50px;
`;

export const SearchText = styled.h1`
  color: ${(props) => props.theme.colors.text.title};
  font-size: 3.5rem;
`;

export const ResultText = styled.p`
  font-size: 2rem !important;
  color: ${(props) => props.theme.colors.gray[450]};

  span {
    color: ${(props) => props.theme.colors.text.title};
  }
`;

export const SearchBox = styled.main`
  width: 100%;
  max-width: 1180px;

  @media only screen and (max-width: 979px) {
    padding-left: 64px;
    padding-right: 64px;
  }
`;

export const GradientEffect = styled.div`
  width: 100%;
  height: 150px;
  opacity: 0.5;
  bottom: 0;
`;

export const Content = styled.main`
  width: 100%;
  padding: 0 64px;

  @media only screen and (max-width: 979px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  /* max-width: 896px; */
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
