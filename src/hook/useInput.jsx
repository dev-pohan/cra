import React from 'react'

// Custom Hook
export default function useInput(defaultValue = '') {
  const [value, setValue] = React.useState(defaultValue)

  const onChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  return { value, setValue, onChange }
}
