import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
  // border:1px solid blue;
  posi
`;
export const Background = styled.nav`
  width: 100%;
  height: 100%;
`;

export const NavLink = styled(Link)`
  color: grey;
  display: flex;
  // border: 2px solid red;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 19px;
  &.active {
    color: #000000;
  }
  &:hover {
    color: white;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  border: 2px solid yellow @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
 
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  border:10px solid red;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  // border: 5px solid green;
  margin-left:130px
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: red;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
