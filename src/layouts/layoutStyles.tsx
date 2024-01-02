import { styled } from "styled-components";

const TOP_MENU_HEIGHT = 4;

export const LayoutWrap = styled.div`
  && {
    width: 100%;
  }
`;


export const LayoutTopMenuWrap = styled.div`
  && {
    background-color: blue;
    z-index: 999;
    height: ${TOP_MENU_HEIGHT}rem;
    width: 100%;
    position: -webkit-fixed;
    position: fixed;
    z-index: 999;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const LayoutContentWrap = styled.div`
  && {
    width: 100%;
  }
`;