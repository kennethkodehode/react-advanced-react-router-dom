import styled from 'styled-components'

import { StyledMain } from '../styles'

export default function GreenRealm() {
  return (
    <StyledGreenRealm>
      <h1>You have chosen to enter the Green realm.</h1>
    </StyledGreenRealm>
  )
}

const StyledGreenRealm = styled(StyledMain)`
  background-color: rgb(0, 255, 0);
  color: #000000;
`