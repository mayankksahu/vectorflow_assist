// // // ui.js
// // // Displays the drag-and-drop UI
// // // --------------------------------------------------

// // import { useState, useRef, useCallback } from "react";
// // import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
// // import { useStore } from "./store";
// // import { shallow } from "zustand/shallow";
// // import { InputNode } from "./nodes/inputNode";
// // import { LLMNode } from "./nodes/llmNode";
// // import { OutputNode } from "./nodes/outputNode";
// // import { TextNode } from "./nodes/textNode";
// // import { NumberInputNode } from "./nodes/numberInputNode";
// // import { CheckboxNode } from "./nodes/checkBoxNode";
// // import { ColorPickerNode } from "./nodes/colorPickerNode";
// // import { MultiplierNode } from "./nodes/multiplierNode";
// // import { StringConcatenateNode } from "./nodes/stringConcatenateNode";

// // import "reactflow/dist/style.css";

// // const gridSize = 20;
// // const proOptions = { hideAttribution: true };
// // const nodeTypes = {
// //   customInput: InputNode,
// //   llm: LLMNode,
// //   customOutput: OutputNode,
// //   text: TextNode,
// //   numberInput: NumberInputNode,
// //   checkboxNode: CheckboxNode,
// //   stringConcatenate: StringConcatenateNode,
// //   colorPicker: ColorPickerNode,
// //   multiplierNode: MultiplierNode,
// // };

// // const selector = (state) => ({
// //   nodes: state.nodes,
// //   edges: state.edges,
// //   getNodeID: state.getNodeID,
// //   addNode: state.addNode,
// //   onNodesChange: state.onNodesChange,
// //   onEdgesChange: state.onEdgesChange,
// //   onConnect: state.onConnect,
// // });

// // export const PipelineUI = () => {
// //   const reactFlowWrapper = useRef(null);
// //   const [reactFlowInstance, setReactFlowInstance] = useState(null);
// //   const {
// //     nodes,
// //     edges,
// //     getNodeID,
// //     addNode,
// //     onNodesChange,
// //     onEdgesChange,
// //     onConnect,
// //   } = useStore(selector, shallow);

// //   const getInitNodeData = (nodeID, type) => {
// //     let nodeData = { id: nodeID, nodeType: `${type}` };
// //     return nodeData;
// //   };

// //   const onDrop = useCallback(
// //     (event) => {
// //       event.preventDefault();

// //       const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
// //       if (event?.dataTransfer?.getData("application/reactflow")) {
// //         const appData = JSON.parse(
// //           event.dataTransfer.getData("application/reactflow")
// //         );
// //         const type = appData?.nodeType;

// //         // check if the dropped element is valid
// //         if (typeof type === "undefined" || !type) {
// //           return;
// //         }

// //         const position = reactFlowInstance.project({
// //           x: event.clientX - reactFlowBounds.left,
// //           y: event.clientY - reactFlowBounds.top,
// //         });

// //         const nodeID = getNodeID(type);
// //         const newNode = {
// //           id: nodeID,
// //           type,
// //           position,
// //           data: getInitNodeData(nodeID, type),
// //         };

// //         addNode(newNode);
// //       }
// //     },
// //     [reactFlowInstance]
// //   );

// //   const onDragOver = useCallback((event) => {
// //     event.preventDefault();
// //     event.dataTransfer.dropEffect = "move";
// //   }, []);

// //   return (
// //     <>
// //       <div ref={reactFlowWrapper} style={{ width: "100wv", height: "88vh" }}>
// //         <ReactFlow
// //           nodes={nodes}
// //           edges={edges}
// //           onNodesChange={onNodesChange}
// //           onEdgesChange={onEdgesChange}
// //           onConnect={onConnect}
// //           onDrop={onDrop}
// //           onDragOver={onDragOver}
// //           onInit={setReactFlowInstance}
// //           nodeTypes={nodeTypes}
// //           proOptions={proOptions}
// //           snapGrid={[gridSize, gridSize]}
// //           connectionLineType="smoothstep"
// //           connectionLineStyle={{
// //             stroke: "#6B46C1",
// //             strokeWidth: 2,
// //           }}
// //         >
// //           <Background color="#aaa" gap={gridSize} size={1.5} />
// //           <Controls />
// //           <MiniMap />
// //         </ReactFlow>
// //       </div>
// //     </>
// //   );
// // };







// // ui.js
// import { useState, useRef, useCallback } from "react";
// import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
// import { useStore } from "./store";
// import { shallow } from "zustand/shallow";
// import { InputNode } from "./nodes/inputNode";
// import { LLMNode } from "./nodes/llmNode";
// import { OutputNode } from "./nodes/outputNode";
// import { TextNode } from "./nodes/textNode";
// import { NumberInputNode } from "./nodes/numberInputNode";
// import { CheckboxNode } from "./nodes/checkBoxNode";
// import { ColorPickerNode } from "./nodes/colorPickerNode";
// import { MultiplierNode } from "./nodes/multiplierNode";
// import { StringConcatenateNode } from "./nodes/stringConcatenateNode";

// import "reactflow/dist/style.css";

// const gridSize = 20;
// const proOptions = { hideAttribution: true };
// const nodeTypes = {
//   customInput: InputNode,
//   llm: LLMNode,
//   customOutput: OutputNode,
//   text: TextNode,
//   numberInput: NumberInputNode,
//   checkboxNode: CheckboxNode,
//   stringConcatenate: StringConcatenateNode,
//   colorPicker: ColorPickerNode,
//   multiplierNode: MultiplierNode,
// };

// const selector = (state) => ({
//   nodes: state.nodes,
//   edges: state.edges,
//   getNodeID: state.getNodeID,
//   addNode: state.addNode,
//   onNodesChange: state.onNodesChange,
//   onEdgesChange: state.onEdgesChange,
//   onConnect: state.onConnect,
// });

// export const PipelineUI = () => {
//   const reactFlowWrapper = useRef(null);
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);
//   const {
//     nodes,
//     edges,
//     getNodeID,
//     addNode,
//     onNodesChange,
//     onEdgesChange,
//     onConnect,
//   } = useStore(selector, shallow);

//   const getInitNodeData = (nodeID, type) => {
//     return { id: nodeID, nodeType: `${type}` };
//   };

//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();
//       const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

//       if (event?.dataTransfer?.getData("application/reactflow")) {
//         const appData = JSON.parse(
//           event.dataTransfer.getData("application/reactflow")
//         );
//         const type = appData?.nodeType;

//         if (!type) return;

//         const position = reactFlowInstance.project({
//           x: event.clientX - reactFlowBounds.left,
//           y: event.clientY - reactFlowBounds.top,
//         });

//         const nodeID = getNodeID(type);
//         addNode({
//           id: nodeID,
//           type,
//           position,
//           data: getInitNodeData(nodeID, type),
//         });
//       }
//     },
//     [reactFlowInstance]
//   );

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "move";
//   }, []);

//   return (
//     <div className="relative w-full h-[88vh] sm:h-[90vh]" ref={reactFlowWrapper}>
//       {/* Undo/Redo Button Container */}
//       <div className="absolute top-2 left-2 z-50 flex gap-2 flex-wrap bg-white/80 p-2 rounded-lg shadow-md">
//         <button className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">
//           Undo
//         </button>
//         <button className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">
//           Redo
//         </button>
//       </div>

//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         onDrop={onDrop}
//         onDragOver={onDragOver}
//         onInit={setReactFlowInstance}
//         nodeTypes={nodeTypes}
//         proOptions={proOptions}
//         snapGrid={[gridSize, gridSize]}
//         connectionLineType="smoothstep"
//         connectionLineStyle={{
//           stroke: "#6B46C1",
//           strokeWidth: 2,
//         }}
//       >
//         <Background color="#aaa" gap={gridSize} size={1.5} />
//         <Controls />
//         <MiniMap className="hidden md:block" />
//       </ReactFlow>
//     </div>
//   );
// };




import { useState, useRef, useCallback, useEffect } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";
import { NumberInputNode } from "./nodes/numberInputNode";
import { CheckboxNode } from "./nodes/checkBoxNode";
import { ColorPickerNode } from "./nodes/colorPickerNode";
import { MultiplierNode } from "./nodes/multiplierNode";
import { StringConcatenateNode } from "./nodes/stringConcatenateNode";

import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  numberInput: NumberInputNode,
  checkboxNode: CheckboxNode,
  stringConcatenate: StringConcatenateNode,
  colorPicker: ColorPickerNode,
  multiplierNode: MultiplierNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    return { id: nodeID, nodeType: `${type}` };
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;
        if (!type) return;

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        saveHistory(); // Save before change
        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const saveHistory = () => {
    setHistory((prev) => [...prev, { nodes, edges }]);
    setRedoStack([]);
  };

  const undo = () => {
    if (history.length > 0) {
      const prevState = history[history.length - 1];
      setRedoStack((r) => [...r, { nodes, edges }]);
      useStore.setState({ nodes: prevState.nodes, edges: prevState.edges });
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[redoStack.length - 1];
      setHistory((h) => [...h, { nodes, edges }]);
      useStore.setState({ nodes: nextState.nodes, edges: nextState.edges });
      setRedoStack((r) => r.slice(0, -1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "z") {
        undo();
      }
      if (e.ctrlKey && e.key.toLowerCase() === "y") {
        redo();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div ref={reactFlowWrapper} style={{ width: "100vw", height: "88vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(changes) => {
          saveHistory();
          onNodesChange(changes);
        }}
        onEdgesChange={(changes) => {
          saveHistory();
          onEdgesChange(changes);
        }}
        onConnect={(connection) => {
          saveHistory();
          onConnect(connection);
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        connectionLineType="smoothstep"
        connectionLineStyle={{
          stroke: "#6B46C1",
          strokeWidth: 2,
        }}
      >
        <Background color="#aaa" gap={gridSize} size={1.5} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
