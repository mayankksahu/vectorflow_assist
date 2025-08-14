import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  nodeIDs: {},

  // 🆕 Undo/Redo state
  history: [],
  redoStack: [],

  // 🆕 Save snapshot before change
  saveHistory: () => {
    const { nodes, edges, history } = get();
    const snapshot = {
      nodes: JSON.parse(JSON.stringify(nodes)),
      edges: JSON.parse(JSON.stringify(edges)),
    };
    set({
      history: [...history, snapshot],
      redoStack: [],
    });
  },

  // 🆕 Undo action
  undo: () => {
    const { history, nodes, edges, redoStack } = get();
    if (!history.length) return;
    const prev = history[history.length - 1];
    set({
      nodes: prev.nodes,
      edges: prev.edges,
      history: history.slice(0, -1),
      redoStack: [
        ...redoStack,
        {
          nodes: JSON.parse(JSON.stringify(nodes)),
          edges: JSON.parse(JSON.stringify(edges)),
        },
      ],
    });
  },

  // 🆕 Redo action
  redo: () => {
    const { redoStack, history, nodes, edges } = get();
    if (!redoStack.length) return;
    const next = redoStack[redoStack.length - 1];
    set({
      nodes: next.nodes,
      edges: next.edges,
      redoStack: redoStack.slice(0, -1),
      history: [
        ...history,
        {
          nodes: JSON.parse(JSON.stringify(nodes)),
          edges: JSON.parse(JSON.stringify(edges)),
        },
      ],
    });
  },

  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },

  addNode: (node) => {
    get().saveHistory();
    set({
      nodes: [...get().nodes, node],
    });
  },

  onNodesChange: (changes) => {
    get().saveHistory();
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes) => {
    get().saveHistory();
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection) => {
    get().saveHistory();
    set({
      edges: addEdge(
        {
          ...connection,
          animated: true,
          type: "smoothstep",
          markerEnd: {
            width: 15,
            height: 15,
            color: "#6B46C1",
          },
          style: {
            strokeWidth: 2,
            stroke: "#6B46C1",
          },
        },
        get().edges
      ),
    });
  },

  updateNodeField: (nodeId, fieldName, fieldValue) => {
    get().saveHistory();
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }
        return node;
      }),
    });
  },
}));
