import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import ConnectionStatus from "./components/ConnectionStatus";

function App() {
  return (
    <div>
      <ConnectionStatus />
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
