import "./App.css";
import UseState from "./components/useState/UseState";
import EffectVsMemo from "./components/useEffectVsUseMemo/EffectVsMemo";
import UseCallback from "./components/useCallback/UseCallback";
import UseEffect from "./components/useEffect/UseEffect";
import UseLayoutEffect from "./components/useLayoutEffect/UseLayoutEffect";
import UseMemo from "./components/useMemo/UseMemo";
import UseReducer from "./components/useReducer/UseReducer";
import UseRef from "./components/useRef/UseRef";
import Custom from "./components/custom/Custom";
function App() {
  const data = Custom();
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      {/* <UseMemo/> */}
      {/* <EffectVsMemo/> */}
      {/* <UseCallback/> */}
      {/* <UseLayoutEffect/> */}
      {/* <UseReducer/> */}
      
      <h1>Count up: {data.count}</h1>
      <button type="button" onClick={data.handleIncreament}>
        Increament
      </button>
    </div>
  );
}

export default App;
