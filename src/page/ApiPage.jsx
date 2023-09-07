import React from 'react'
import useInput from '../hook/useInput'
import { styled } from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export default function ApiPage() {
  const { value, onChange } = useInput('bulbasaur')
  const [info, setInfo] = React.useState({})

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(res => res.json())
      .then(res => setInfo(res))
  }, [value])

  return (
    <div className="page">
      <StyledDiv>
        <input value={value} onChange={onChange} />
        <span>name: { info.name }</span>
        <span>height: { info.height }</span>
        <span>weight: { info.weight }</span>
      </StyledDiv>
    </div>
  )
}
