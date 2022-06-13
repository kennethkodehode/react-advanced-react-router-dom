import styled from 'styled-components'

import { StyledMain } from '../styles'

export default function RedRealm() {
  return (
    <StyledRedRealm>
      <h1>You have chosen to enter the Red realm.</h1>
    </StyledRedRealm>
  )
}

const StyledRedRealm = styled(StyledMain)`
  background-color: rgb(255, 0, 0);
  color: #FFFFFF;
`