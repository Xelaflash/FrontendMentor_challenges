import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import Layout from '../components/Layout';
import addExternalScript from '../utils/addExternalScript.js';

const MarkdownPreviewerStyles = styled.div`
  color: var(--white);
  // MARKDOWN STYLES
#preview {
  padding: 0 1rem;

  blockquote {
    border-left: 3px solid #224b4b;
    color: #224b4b;
    padding-left: 5px;
    margin-left: 25px;
  }

  > p > code {
    padding: 3px;
  }

  code {
    background: white;
    font-size: 0.875rem;
    font-weight: bold;
    color:red
  }

  pre {
    display: block;
    overflow: auto;
    background: white;
    padding: 5px;
    line-height: 1.2;
  }

  h1 {
    border-bottom: 2px solid red;
  }

  h2 {
    border-bottom: 1px solid blue;
  }

  table {
    border-collapse: collapse;
  }

  td,
  th {
    border: 2px solid white;
    padding-left: 5px;
    padding-right: 5px;
  }

  img {
    display: block;
    max-width: 90%;
    margin: 2rem auto;
  }
}
`;

export default function MarkdownPreviewer() {
  const placeholder = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


  const [markdownText, setMarkdownText] = useState(placeholder);
  useEffect(() => {
    addExternalScript(
      'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    );
  }, []);

  return (
    <Layout>
      <MarkdownPreviewerStyles>
        <div className="markdown_editor m-15">
          <h2 className="text-6xl font-semibold tracking-wide my-6">
            Markdown Editor
          </h2>
          <textarea
            name="markdown"
            id="editor"
            className="rounded-md text-gray-700 placeholder-gray-700::placeholder text-black"
            cols="80"
            rows="20"
            placeholder="Type your markdown text here"
            onChange={(e) => setMarkdownText(e.target.value)}
            defaultValue={placeholder}
          ></textarea>
        </div>
        <div className="markdown_previewer">
          <h2 className="text-6xl font-semibold tracking-wide my-6">
            Markdown Previewer
          </h2>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </MarkdownPreviewerStyles>
    </Layout>
  );
}
