import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const TagsStyles = styled.div`
  color: white;
`;

export default function Tags() {
  return (
    <Layout>
      <TagsStyles>
        <header>
          <h1 className="title">User input tags</h1>
          <ol>
            <li>1.Tags must be removable</li>
            <li>2.Form submit on enter</li>
            <li>3.Can't have duplicate tags</li>
            <li>4.Autocomplete based on JSON list</li>
          </ol>
        </header>
      </TagsStyles>
    </Layout>
  );
}
