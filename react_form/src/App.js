import FORM from "./components/FORM/form";
import FORM2 from "./components/FORM/form2";
import CHILD from "./components/STATE_LIFTING/Child";
import Todo from "./components/STATE_LIFTING/Todo";

function App() {
  const data = "i am form parent (app)";
  const handleChild = (childData) =>{
    console.log(childData);
  }

  const handleTodo = (todo) =>{
    console.log(todo);
  }

  return (
    <div>
      <FORM /><hr/>
      <FORM2 /><hr />
      <CHILD data={data} onChildData={handleChild}/><hr/>
      <Todo onHandleTodo={handleTodo}/>
    </div>
  );
}

export default App;
