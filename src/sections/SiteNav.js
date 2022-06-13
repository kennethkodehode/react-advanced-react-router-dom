import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

export default function SiteNav() {
  const location = useLocation()

  return (
    <StyledNav>
      <StyledLink to="/" className={location.pathname == '/' ? 'active' : ''}>Home</StyledLink>
      <StyledLink to="/red" className={location.pathname == '/red' ? 'active' : ''}>Red realm</StyledLink>
      <StyledLink to="/green" className={location.pathname == '/green' ? 'active' : ''}>Green realm</StyledLink>
      <StyledLink to="/blue" className={location.pathname == '/blue' ? 'active' : ''}>Blue realm</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  background-color: #EAEAEA;
  display: flex;
  padding: .5em;
  gap: .5em;
`

const StyledLink = styled(Link)`
  background-color: #FFFFFF;
  padding: .5em;
  text-align: center;
  text-transform: uppercase;
  color: blueviolet;
  text-decoration: none;
  font-weight: 600;
  transition: .25s ease-in-out;

  &.active,
  &:hover {
    background-color: blueviolet;
    color: #FFFFFF;
  }
`