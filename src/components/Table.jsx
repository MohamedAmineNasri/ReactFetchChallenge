import Row from "./Row"

const Table = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
            {items.map((item) => {
               return <Row item={item} key={item.id}/>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
