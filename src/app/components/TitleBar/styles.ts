
import { styled } from 'styled-components';
import { FiMinusCircle, FiStopCircle, FiXCircle } from "react-icons/fi";

export const Container = styled.div`
  height: 30px;
  background: #30353c;
  user-select: none;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const ContentMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #ebecee;
    text-decoration: none;
    font-size: 14px;
  }
`;

export const WrapperBasicIcons = styled.div`
  display: flex;
  /* justify-content: flex-end; */
`;

export const TitlebarButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  &:hover {
    background: #3c414a;
  }
`;

export const Minimize = styled(FiMinusCircle)`
  color: #ee08f2;
`;

export const Maximize = styled(FiStopCircle)`
  color: #7b68ee;
`;

export const Close = styled(FiXCircle)`
  color: #f17ead;
`;