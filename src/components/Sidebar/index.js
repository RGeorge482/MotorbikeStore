import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>
    <SidebarMenu>
      <SidebarLink to='/'>Motorcycles</SidebarLink>
      <SidebarLink to='/'>Helmets</SidebarLink>
      <SidebarLink to='/'>Clothing</SidebarLink>
      <SidebarLink to='/'>Accessories</SidebarLink>
      <SidebarLink to='/'>Parts</SidebarLink>
    </SidebarMenu>
    <SideBtnWrap>
      <SidebarRoute to='/'>Brands</SidebarRoute>
    </SideBtnWrap>
  </SidebarContainer>
  )
}

export default Sidebar
