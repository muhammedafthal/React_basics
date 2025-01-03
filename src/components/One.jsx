import React from 'react'
import Two from './Two'


const One = (props) => {
	// const {data} = props;
  return (
	<div style={{backgroundColor: 'yellow', width:'120px'}}>
	  <h1>Layer 1</h1>
	  <Two></Two>
	</div>
  )
}

export default One
