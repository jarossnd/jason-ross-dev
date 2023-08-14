import React, { useState } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Footer from './Footer';

const ContentStyles = styled.div`
`;

export default function Layout({ children }) {
    return (
      <div>
        <GlobalStyles />
        <Nav />
        <ContentStyles>{children}</ContentStyles>
        <Footer />
      </div>
    );
  }