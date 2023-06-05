import styled from 'styled-components';

import backgroundVectors from '../../../../assets/background_vectors.png';

export const Container = styled.div`
  background: url(${backgroundVectors});
`;

export const TopSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: -50px;
`;

export const SearchBox = styled.main`
  width: 100%;
  max-width: 1180px;
`;

export const GradientEffect = styled.div`
  width: 100%;
  height: 150px;
  opacity: 0.5;
  bottom: 0;
`;

export const Content = styled.main`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  padding: 128px 0px;

  @media only screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 56px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  h1 {
    width: 100%;
    max-width: 576px;
    font-size: 3.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.text.title};
  }

  p {
    width: 100%;
    max-width: 576px;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.text.title};
  }
`;

export const ImgContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  img {
    width: 632px;
    height: 632px;
  }

  @media only screen and (max-width: 980px) {
    order: -1;

    img {
      width: 329px;
      height: 335px;
    }
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
