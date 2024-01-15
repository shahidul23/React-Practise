import Index from "./components/EVENT_HANDLER_CLASS";
import EVENT_BINDING from "./components/EVENT_BINDING";
import HOOK_USESTATE from "./components/HOOK_USESTATE";
import HOOK_USESTATE1 from "./components/HOOK_USESTATE/indexFun";
import HOOK_USESTATE2 from "./components/HOOK_USESTATE/indexFun2";
import HOOK_USESTATE3 from "./components/HOOK_USESTATE/eventPropagation";
import './app.css';

function App() {
  return (
    <div>
      <Index /><hr/>
      <EVENT_BINDING /><hr />
      <HOOK_USESTATE /><hr/>
      <HOOK_USESTATE1 /><hr/>
      <HOOK_USESTATE2 /><hr/>
      <HOOK_USESTATE3 />
    </div>
  );
}

export default App;
