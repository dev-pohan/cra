import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledLi = styled.li`
  padding: 10px 0;
  font-size: 30px;
`

function App() {
  return (
    <div className="page">
      <ol>
        <StyledLi><Link to="/counter">計數器</Link></StyledLi>
        <StyledLi><Link to="/todo">待辦事項</Link></StyledLi>
        <StyledLi><Link to="/api">呼叫API</Link></StyledLi>
      </ol>
    </div>
  );
}

export default App;
