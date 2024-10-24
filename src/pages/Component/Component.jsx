import Counter from "../../components/counter/counter.jsx";
import Timer from "../../components/Timer/Timer";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Component.css";
import Add from "../../components/Add/add";
import Variable from "../../components/Variable/Variable";
import Temperatures from "../../components/temperatures/temperatures";

function Components() {
  return (
    <div>
      <h1>React Component</h1>
      <div className="main-container">

        <div className="container">
        <span className="container-1">
          <Counter name="Counter" value={0} />
          <Timer className="timer" name={Timer} />
        </span>

        <span className="container-2">
          <Add className="add" aValue={10} bValue={20} />
        </span>
      </div>
      <div className="container-3">
      <Temperatures />
      </div>
      </div>

      <h2>นายเจตนะ เหลืองสอาด รหัส 66018526</h2>
    </div>
  );
}

export default Components;