import React from 'react'

const GoalCard = ({goalInfo , onRemoveGoal}) => {

  return (
    <li id={goalInfo.id}>
      <span>{goalInfo.title}</span>
      <button onClick={() => {onRemoveGoal(goalInfo.id)}}>Remove</button>
    </li>
  )
}

export default GoalCard;