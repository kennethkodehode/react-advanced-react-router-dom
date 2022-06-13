import styled from 'styled-components'

import { StyledMain } from '../styles'

export default function BlueRealm() {
  return (
    <StyledBlueRealm>
      <h1>You have chosen to enter the Blue realm.</h1>
    </StyledBlueRealm>
  )
}

const StyledBlueRealm = styled(StyledMain)`
  background-color: rgb(0, 0, 255);
  color: #FFFFFF;
`