import { styled } from 'styled-components'

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    flex: 1;
  }
  button {
    background: transparent;
    color: red;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`

function TodoItem(props) {
  const textStyle = {
    textDecoration: props.checked ? 'line-through' : 'none',
    color: props.checked ? 'gray' : 'inherit'
  }

  const onChange = (e) => {
    props.onChange(props.index, e.target.checked)
  }

  const onDelete = () => {
    props.onDelete(props.index)
  }

  return (
    <TodoItemWrapper>
      <input type="checkbox" checked={props.checked} onChange={onChange} />
      <span style={textStyle}>{ props.children }</span>
      <button onClick={onDelete}>×</button>
    </TodoItemWrapper>
  )
}

export default TodoItem
