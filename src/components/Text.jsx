import React, { useState } from 'react'

const Text = () => {
	const [count, setCount] = useState(0);
  return (
	<div>
		<button onClick={() => setCount(count + 1)}>Increment</button>
	   <h1>This is our component: {count}</h1>
	</div>
  )
}

export default Text
