import { ContainerTable,RowTable } from "./style";
const Table = () =>{
  return (
    <ContainerTable>
      <thead>
        <RowTable>
          <th>#</th>
          <th>Crypto</th>
          <th>Price</th>
          <th>Change</th>
          <th>Trade</th>
        </RowTable>
      </thead>
      <tbody>
        <RowTable>
          <td>João</td>
          <td>25</td>
          <td>Masculino</td>
        </RowTable>
        <RowTable>
          <td>João</td>
          <td>25</td>
          <td>Masculino</td>
        </RowTable>
        <RowTable>
          <td>João</td>
          <td>25</td>
          <td>Masculino</td>
        </RowTable>
        <RowTable>
          <td>João</td>
          <td>25</td>
          <td>Masculino</td>
        </RowTable>
      </tbody>
    </ContainerTable>
  )
}
export default Table;
