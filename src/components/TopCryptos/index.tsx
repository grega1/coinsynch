import {
  ContainerTopCryptos,
  ViewMoreButton,
} from './style';
import Table from 'components/Table';



export default function TopCryptos() {

  return (
    < ContainerTopCryptos>
    <h3> Top Cryptos</h3>
    <Table />
    <ViewMoreButton>View more +</ViewMoreButton>
    </ ContainerTopCryptos>
  );
}
