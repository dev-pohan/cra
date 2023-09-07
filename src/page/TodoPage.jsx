import React from 'react'
import { styled } from 'styled-components'
import useInput from '../hook/useInput'
import TodoItem from '../component/TodoItem'

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
`

const TodoInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  input {
    flex: 1;
  }
`

export default function TodoPage() {
  const { value, setValue, onChange } = useInput()
  const [todoList, setTodoList] = React.useState([
    { checked: false, text: '待辦事項1' },
    { checked: true, text: '待辦事項2' }
  ])

  const onAddBtnClick = () => {
    setTodoList(prev => [
      ...prev,
      { checked: false, text: value }
    ])
    setValue('')
  }

  const onCheckboxChange = (index, checked) => {
    todoList[index].checked = checked
    setTodoList([...todoList])
  }

  const onDelete = (index) => {
    setTodoList(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="page">
      <TodoContainer>
        <TodoInputContainer>
          <input value={value} onChange={onChange} />
          {value &&
            <button onClick={onAddBtnClick}>+</button>
          }
        </TodoInputContainer>
        {todoList.map((todo, i) => (
          <TodoItem
            key={i}
            index={i}
            checked={todo.checked}
            onChange={onCheckboxChange}
            onDelete={onDelete}
          >
            { todo.text }
          </TodoItem>
        ))}
      </TodoContainer>
    </div>
  )
}

