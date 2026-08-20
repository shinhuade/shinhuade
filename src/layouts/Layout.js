import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: var(--primary-color);
`;

const Main = styled.main`
  margin-top: var(--navbar-height);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default Layout;
