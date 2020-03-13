import React, { useState } from 'react';
import { NavArea, NavbarItemWrapper, NavbarLogo, NavbarLinkWrapper, NavbarLink, NavbarImage, NavbarDescription } from './style';
import { connect } from 'react-redux';
import { faShoppingCart, faCaretDown, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { HoveredContainer } from './containers/hoverDiv';

const Navbar = () => {
  const [navLinkDescriptions] = useState([
    {id: "plr", name: 'Parlor', route: '/parlor'},
    {id: "bdrm", name: 'Bedroom', route: '/bedroom'},
    {id: "ktcn", name: 'Kitchen', route: '/kitchen'},
    {id: "chrom", name: 'Kids Room', route: '/childen-room'}
  ])

  const PersonalLinks = () => {
    return (
      <NavbarLinkWrapper>
        <NavbarLink to="/cart">
          <NavbarImage icon={faShoppingCart}></NavbarImage>
          <NavbarDescription>Cart</NavbarDescription>
        </NavbarLink>
        <NavbarLink to="/account">
          <NavbarImage icon={faUserAlt}></NavbarImage>
          <NavbarDescription>Account</NavbarDescription>
        </NavbarLink>
      </NavbarLinkWrapper>)
  }
  
  return (
    <NavArea>
      <NavbarItemWrapper>
        <NavbarLogo src={require('../../assets/logo.png')}/>

        <NavbarLinkWrapper color="#176f4b">
          {navLinkDescriptions.map((item, i) => (
            <NavbarLink to={item.route} key={i}>
              <NavbarDescription textsize="1.85rem">{item.name}</NavbarDescription>
              <NavbarImage textsize="1.35rem" icon={faCaretDown}></NavbarImage>
              <HoveredContainer hoverValue={true} listItems={[{description: 'Heeeej'}, {description: 'asdasd'}, {description: 'asdasd'}]}></HoveredContainer>
            </NavbarLink>
          ))}
        </NavbarLinkWrapper>

        {PersonalLinks()}
      </NavbarItemWrapper>
    </NavArea>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
