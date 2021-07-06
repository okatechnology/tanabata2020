import { useEffect } from 'react';
import { Top } from '../components/Top';

export const TopPage = () => {
  useEffect(() => {
    document.title = '七夕だお';
  }, []);

  return (
    <>
      <Top />
    </>
  );
};
