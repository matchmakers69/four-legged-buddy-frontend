import styled from "styled-components";

export const GridItem = styled.div`
  height: 100%;
  position: relative;
`;

export const ImageOuterWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const ImageFrame = styled.div`
  position: relative;
  border: 0.625em solid transparent;
`;

export const ImageOuter = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.titleGreen};
  overflow: hidden;
  z-index: 3;
`;

export const FrameFront = styled.div`
  display: block;
  position: absolute;
  top: -0.625em;
  left: -0.625em;
  width: 100%;
  height: 100%;
  border: 0.525em solid ${({ theme }) => theme.colors.titleGreen};
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  z-index: 2;
  background: ${({ theme }) => theme.colors.powderWhite};
`;

export const FrameBack = styled.div`
  background: ${({ theme }) => theme.colors.darkMustard};
  z-index: 1;
  box-sizing: content-box;
  display: block;
  position: absolute;
  top: -0.525em;
  left: -0.525em;
  width: 100%;
  height: 100%;
  border: 0.525em solid ${({ theme }) => theme.colors.titleGreen};
  margin: 4.56% 0 0 4.56%;
`;

export const ImageContainer = styled.figure`
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
  padding-top: 52.5%;
  overflow: hidden;
  top: 0;
  .image-grid {
    width: 100%;
    height: auto;
    vertical-align: middle;
    max-width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    object-fit: cover;
    border: none;
  }
`;

export const GridItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10.12% 0 0 6.56%;
`;

export const GridItemList = styled.ul`
  margin: 1.5rem 0;
  padding: 0;
`;

export const GridItemListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const GridItemListItemLabel = styled.span`
  display: inline-block;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: inherit;
  font-size: inherit;
  margin-right: 1rem;
`;

export const GridItemListItemTitle = styled.span`
  display: inline-block;
  font-size: inherit;
`;

export const GridItemFooter = styled.footer`
  margin-bottom: 10px;
`;
