import React, { useState } from 'react'
import Text from './Text'

const ShowHide = () => {
	const [ state, setState ] = useState(true);
	
  return (
	<div>
	  <h1 onClick={() => setState(!state)}>Show/Hide</h1>
	 { state ? <Text /> : null }
	</div>
  )
}

export default ShowHide
