import React from 'react';
import { useState , useEffect } from 'react';
import goals from './goals.json';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
const App = () => {
  const [myGoals , setGoals] = useState([]);
  useEffect(() => {
    setGoals(goals); 
  }, []);
  const addNewGoal = (goal) => {
    console.log('hi')
    setGoals([...myGoals , goal]);
  }
  const removeGoal = (id) => {
    const filteredGoals = myGoals.filter((goal) => goal.id !== id);
    setGoals(filteredGoals);
  }
  return (
    <>
    <main>
      <h1>Manage your course goals</h1>
      <section>
        <GoalForm onGoalSubmit={addNewGoal} />
      </section>
      <section>
        <GoalList goals={myGoals} onRemoveGoal={removeGoal} />
      </section>
    </main>
    </>
  )
}

export default App
