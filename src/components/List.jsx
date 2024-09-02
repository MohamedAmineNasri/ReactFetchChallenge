import ListItem from "./ListItem"

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        // return <li key={item.id}>{item}</li>
        return <ListItem key={item.id} item={item} />
          })}
    </ul>
  )
}

export default List
