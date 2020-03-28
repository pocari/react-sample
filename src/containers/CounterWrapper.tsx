import React, {FC} from 'react'
import { Container } from 'semantic-ui-react'
import Counter from 'containers/Counter'
import ColorfulBeads from 'containers/ColorfulBeads'

const CounterWrapper: FC<{}> = () => (
  <Container className="counter-wrapper">
    <Counter />
    <ColorfulBeads/>
  </Container>
)

export default CounterWrapper
