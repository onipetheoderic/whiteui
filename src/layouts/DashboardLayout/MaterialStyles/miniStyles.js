import styled from "styled-components";

export const BackgroundWithImage = styled.div`
  /* the surrounding right background with the container in the middle */
  background: radial-gradient(98.58% 98.58% at 57.43% 48.15%, #5E81F4 0%, #1B51E5 100%);
  width: 100%;
  height: 100%
`;

export const DashboardDoubleIcon = styled.div`
padding-top: 30px;
padding-left: 30px;
display: flex;
width:10%;
justify-content: space-around;
`

export const DashboardTextContainer = styled.div`
padding-top: 30px;
padding-left: 30px;
display: flex;
width:25%;
justify-content:space-aroud;
`

export const NavTwoContainer = styled.div`
  background-color:white;
  width:27%; 
  -webkit-box-shadow: 2px 9px 26px -15px rgba(48,38,48,0.15);
-moz-box-shadow: 2px 9px 26px -15px rgba(48,38,48,0.15);
box-shadow: 2px 9px 26px -15px rgba(48,38,48,0.15);
`

export const NavThreeContainer = styled.div`
  width:65%; 
  background-color:#E5E5E5;
`

export const VerticalSection = styled.div`
  width: 100%; 
  height: 100%; 
  backgroundColor: white;
`

export const VerticalSectionFlex = styled.div`
  display:flex;
  justify-content: space-between;
`

export const BoxOutline = styled.div.attrs(( ) => ({ tabIndex: 0 })) `

border-radius: 1px;
height: 52px;
width:100%;
margin-top:10px;
&:hover {
  border-right: 2px solid #5E81F4; // <Thing> when hovered
}
`;


export const IconBox = styled.div `
    width: 52px;
    display:flex;
    justify-content:center;
    align-items:center;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    height: 52px;
    border-radius:4px;
    &:hover {
      background: linear-gradient(0deg, rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #FFFFFF;
    }
   
`;
