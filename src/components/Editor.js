import React, { useContext } from 'react'
import { MarkedContext } from '../contexts/MarkedContext'

export const Editor = () => {
  const { markdown, handleChange } = useContext(MarkedContext)
  return (
    <div>
      <textarea id="editor" onChange={ handleChange } value={ markdown }>

      </textarea>
    </div>
  )
}

export default Editor
