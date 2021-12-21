import { Header, Footer } from "@components/presentational";
import styled from "styled-components";

const Container = styled.div`
  max-width: 28rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 9px 20px #f9f9f9;
`;

const Contents = styled.main`
  height: 100vh;
`;

const Layout = ({ children, isHeaderVisible, isFooterVisible }) => {
  return (
    <Container>
      {isHeaderVisible && <Header />}
      <Contents>{children}</Contents>
      {isFooterVisible && <Footer />}
    </Container>
  );
};

export default Layout;
