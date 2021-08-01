import Cover from '../components/Cover';
import MainGrid from '../components/MainGrid';
import Plans from '../components/Plans';

export default function Home() {
  return (
    <MainGrid>
      <Cover />
      <Plans />
    </MainGrid>
  );
}
