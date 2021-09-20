import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Layout from '../components/Layout';
import addExternalScript from '../utils/addExternalScript.js';

const MarkdownPreviewerStyles = styled.div`
  color: var(--white);
  .markdown_editor,
  .markdown_previewer {
    width: fit-content;
    border-radius: 5px;
    margin: 20px auto;
    filter: drop-shadow(3px 2px 6px rgb(255 255 255 / 50%));
    textarea {
      resize: none;
    }
  }

  // MARKDOWN STYLES
  #preview {
    white-space: pre-line;
    ul {
      list-style-type: disc;
      list-style-position: inside;
    }
    ol {
      list-style-type: decimal;
      list-style-position: inside;
    }
    ul ul,
    ol ul {
      list-style-type: circle;
      list-style-position: inside;
      margin-left: 15px;
    }
    ol ol,
    ul ol {
      list-style-type: lower-latin;
      list-style-position: inside;
      margin-left: 15px;
    }
    blockquote {
      border-left: 3px solid #224b4b;
      color: #224b4b;
      padding-left: 5px;
      margin-left: 25px;
    }
    p > code {
      padding: 3px;
    }

    code {
      background: white;
      font-size: 1.2rem;
      font-weight: bold;
    }

    pre {
      display: block;
      overflow: auto;
      background: white;
      padding: 5px;
      line-height: 1.2;
    }

    table {
      border-collapse: collapse;
    }

    td,
    th {
      border: 2px solid #224b4b;
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

![Random Image](https://picsum.photos/400/600)
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
        <div className="markdown_editor m-15 my-20">
          <h2 className="rounded-md text-6xl font-semibold tracking-wide bg-green-700 p-6 text-center ">
            Markdown Editor
          </h2>
          <textarea
            name="markdown"
            id="editor"
            className="rounded-md text-gray-700 text-white bg-green-400"
            cols="80"
            rows="20"
            placeholder="Type your markdown text here"
            onChange={(e) => setMarkdownText(e.target.value)}
            defaultValue={placeholder}
          />
        </div>
        <hr />
        <div className="markdown_previewer my-20 m-15">
          <h2 className="rounded-md text-6xl font-semibold tracking-wide bg-green-700 p-6 text-center">
            Markdown Previewer
          </h2>
          <div
            id="preview"
            className="rounded-md text-gray-700 text-white bg-green-400 p-10"
          >
            <ReactMarkdown
              children={markdownText}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        </div>
        <div
          className="disclaimer text-red-700 text-center
      "
        >
          Last test (#8) not passing because i did not used the markdown lib
          recommanded by FCC. React-markdown pkg does not have an options for
          line breaks.
        </div>
      </MarkdownPreviewerStyles>
    </Layout>
  );
}
