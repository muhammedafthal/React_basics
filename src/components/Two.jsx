import React, {useContext} from 'react'
import { AppContext } from '../AppContext'

const Two = (props) => {
	// const {data} = props;
	const {data} = useContext(AppContext)
  return (
	<div style={{backgroundColor:'red', width:'80px'}}>
	  <h1>Layer 2 {data}</h1>
	</div>
  )
}

export default Two
