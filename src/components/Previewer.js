import React, { useContext } from 'react'
import marked from 'marked'
import { MarkedContext } from '../contexts/MarkedContext'

export const Previewer = () => {
  const { markdown } = useContext(MarkedContext)
  const preview = marked(markdown)
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, language) {
      const hljs = require('highlight.js');
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(validLanguage, code).value;
    },
    gfm: true,
    breaks: true,
  });
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: preview }}>
      
    </div>
  )
}

export default Previewer
