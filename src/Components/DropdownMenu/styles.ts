import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface DropdownProps {
  isVisible: boolean;
}

export const Container = styled.span`
  display: none !important;

  @media (max-width: 992px) {
    display: flex !important;
  }
`;

export const Dropdown = styled.ul<DropdownProps>`
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  margin: 0;
  min-width: 100px;
  overflow-y: auto;
  position: absolute;
  z-index: 9999;
  width: 100% !important;
  max-width: 200px;
  height: auto !important;
  max-height: 350px !important;

  list-style: none;

  background: #2f2f2f;
  padding: 1rem;
  border-radius: 8px;
  padding-right: 0px;

  display: none;
  ${(props) =>
    props.isVisible &&
    css`
      display: block;
      width: 200px;
      height: 273px;
      transform-origin: 100% 0px;
      opacity: 1;
      transform: scaleX(1) scaleY(1);
    `}
`;

export const StyledLink = styled(RouterLink)`
  display: flex;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  clear: both;
  cursor: pointer;
  min-height: 40px;
  line-height: 1.5rem;
  width: 100%;
  text-align: left;
  font-weight: 600;

  a {
    color: #1d6f93;
  }
`;

export const Divider = styled.li`
  background: #555;
  height: 1px;
  padding: 0;
  margin: 0;
`;
