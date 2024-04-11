import React from 'react'
import GoalCard from './GoalCard';
const GoalList = ({goals , onRemoveGoal}) => {
  return (
    <ul id="goals">
      {goals.map((goal) =>  <GoalCard key={goal.id} goalInfo={goal} onRemoveGoal={onRemoveGoal}></GoalCard>)}
    </ul>
  )
}

export default GoalList