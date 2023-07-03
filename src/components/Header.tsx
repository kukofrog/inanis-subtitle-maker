import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Positioner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 32px;
    color: var(--text-primary-color);
  }
`;

const LocaleButton = styled.button`
  border: 1px solid var(--text-primary);
  color: var(--text-primary);
  width: 60px;
  height: 32px;
  border-radius: 50px;
  display: block;

  :hover {
    background-color: var(--text-primary);
    color: var(--background);
  }
`;

function Header() {
  const router = useRouter();
  return (
    <Positioner>
      <Contents>
        <h1>Inanis Subtitle Maker</h1>
      </Contents>
    </Positioner>
  );
}

export default Header;
