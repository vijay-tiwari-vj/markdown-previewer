import React, { createContext, useState } from 'react'

export const MarkedContext = createContext()

export const MarkedContextProvider = (props) => {
  const [ markdown, setMarkdown ] = useState(
`# Markdown Previewer

## Feel free to edit this template and see how it renders!
### If you're new to Markdown, refer to these examples:

1. Here's a code block wrapped around a \`<div></div>\` element.
\`\`\`
  function sayHello(name) {
    return 'Hello \`name\`'
  }
\`\`\`

2. Make your text **bold**, _italic_, or **_both_**!
3. Or simply ~~strike-through~~.

4. Want to refer somewhere? Use [links](https://google.com).
5. Love quotes? Use
> Block Quotes!
6. Here's a list that you may find helpful:
- Item 1
- Item 2

7. Images? Of course you can use them!\n
![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
    `
  )

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  return (
    <MarkedContext.Provider value={{ markdown, handleChange }}>
      { props.children }
    </MarkedContext.Provider>
  )
}

export default MarkedContextProvider
