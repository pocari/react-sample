import React, {FC} from 'react'
import { useSelector} from 'react-redux'
import { RootState } from 'store/index'
import ColorfulBeadsComponent, {ColorfulBeadsProps} from 'components/ColorfulBeads'

const Counter: FC<{}> = () => {
  const props: ColorfulBeadsProps = {
    count: useSelector((state: RootState) => state.counter.count),
  };
  return (
    <ColorfulBeadsComponent {...props}/>
  )
}

export default Counter
