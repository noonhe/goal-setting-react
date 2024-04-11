import React from 'react'
import { useState } from "react";

const GoalForm = ({onGoalSubmit}) => {
  const [newGoal, setGoal] = useState("");
  const handleChange = (event) => {
    setGoal(event.target.value);
  }
  const addNewGoal = (event) => {
    event.preventDefault();
    if(newGoal.trim()){
      onGoalSubmit({title: newGoal , id: new Date().now});
      setGoal("");
    }
  }
  return (
    <form onSubmit={addNewGoal} id="goal-form">
        <div>
        <label htmlFor="goal">Goal</label>
        <input type="text" id="goal" name="goal" value={newGoal} onChange={handleChange} />
        </div>
        <button  type="submit">Add goal</button>
    </form>
  )
}

export default GoalForm