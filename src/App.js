import { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import AddTask from "./components/AddTask";
import ListeOfTasks from "./components/ListeOfTasks";

function App() {
  const [filter, setFilter] = useState(false);
  return (
    <div className="App">
      <AddTask />
      <Button style={{ margin: 10 }} onClick={()=>setFilter(false)}>TO DO </Button>
      <Button style={{ margin: 10 }} onClick={()=>setFilter(true)}>DONE </Button>
      <ListeOfTasks filter={filter}/>
    </div>
  );
}

export default App;
