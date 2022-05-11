import { Home } from '../templates/Home';
import data from '../api/dados.json';

export default function Index() {
  return <Home {...data.data.mmh.data} />;
}
