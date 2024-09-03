import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Table from "./components/Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error("Did Not Recive Expected Data");
        const data = await response.json();
        setItems(data);
        console.log(data)
        setFetchError(null);
      } catch (error) {
        console.log(error);
        setFetchError(error.message);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items ={items}/>
    </div>
  );
}

export default App;
