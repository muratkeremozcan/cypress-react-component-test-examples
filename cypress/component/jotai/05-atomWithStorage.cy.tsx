import { useState } from 'react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import 'cypress-map'

// the taskListAtom is created using atomWithStorage,
// which persists the tasks in the local storage.
// each time a task is added or removed, the changes are automatically synced with the local storage.
const taskListAtom = atomWithStorage('taskList', [])
// const taskListAtom = atom([]) // same thing without local storage

const TaskInput = () => {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useAtom(taskListAtom)

  const addTask = () => {
    if (input) {
      // @ts-ignore
      setTasks([...tasks, input])
      setInput('')
    }
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}

const TaskList = () => {
  const [tasks, setTasks] = useAtom(taskListAtom)

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, idx) => idx !== index)
    setTasks(newTasks)
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} data-cy={`task-${task}`}>
          {task}{' '}
          <button onClick={() => removeTask(index)} data-cy={`remove-${task}`}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  )
}

const addTask = (task: string) => {
  cy.get('input').type(task)
  return cy.contains('button', 'Add Task').click()
}

const getLocalStorageItem = (key: string) =>
  cy.window().its('localStorage').invoke('getItem', key).apply(JSON.parse)

it('atomWithStorage example', () => {
  cy.mount(<App />)

  addTask('a')
  addTask('b')
  addTask('c')

  getLocalStorageItem('taskList').should('deep.equal', ['a', 'b', 'c'])

  cy.getByCy('remove-b').click()
  cy.getByCy('task-b').should('not.exist')
  cy.getByCy('task-a').should('be.visible')
  cy.getByCy('task-c').should('be.visible')

  getLocalStorageItem('taskList').should('deep.equal', ['a', 'c'])
})
