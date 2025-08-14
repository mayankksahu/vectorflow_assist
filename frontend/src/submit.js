// import { Bounce, Slide, toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useStore } from "./store";
// import { shallow } from "zustand/shallow";
// import { Button } from "@nextui-org/react";
// // import Spinner from "./components/Spinner";
// import { useState } from "react";

// export const SubmitButton = () => {
//   const { nodes, edges } = useStore(
//     (state) => ({
//       nodes: state.nodes,
//       edges: state.edges,
//     }),
//     shallow
//   );

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async () => {
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://vectorshift-assignment.onrender.com/pipelines/parse",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ nodes, edges }),
//         }
//       );

//       const result = await response.json();
//       console.log("API Response:", result);

//       if(!response.ok) {
//         throw new Error(result.error || "Submission failed");
//       }

//       toast.success(
//         <div className="flex flex-col p-1 text-base gap-1">
//           <span>
//             <b>Nodes:</b> {result.num_nodes}
//           </span>
//           <span>
//             <b>Edges: </b>
//             {result.num_edges}
//           </span>
//           <span>
//             <b>Is DAG: </b>
//             {result.is_dag ? "Yes" : "No"}
//           </span>
//         </div>,
//         {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Bounce,
//         }
//       );
//     } catch (error) {
//       console.error("Error submitting the pipeline:", error);
//       toast.error("Submission failed! Please try again.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//       });
//     }
//     finally{
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center fixed bottom-10 left-0 right-0">
//       <Button onClick={handleSubmit} color="primary" size="lg" type="submit">
//         Submit
//       </Button>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//         transition={Bounce}
//       />
//     </div>
//   );
// };





// import { Bounce, toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useStore } from "./store";
// import { shallow } from "zustand/shallow";
// import { Button, Spinner } from "@nextui-org/react";
// import { useState } from "react";

// export const SubmitButton = () => {
//   const { nodes, edges } = useStore(
//     (state) => ({
//       nodes: state.nodes,
//       edges: state.edges,
//     }),
//     shallow
//   );

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://vectorshift-assignment.onrender.com/pipelines/parse",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ nodes, edges }),
//         }
//       );

//       const result = await response.json();
//       console.log("API Response:", result);

//       if (!response.ok) {
//         throw new Error(result.error || "Submission failed");
//       }

//       toast.success(
//         <div className="flex flex-col p-1 text-base gap-1">
//           <span>
//             <b>Nodes:</b> {result.num_nodes}
//           </span>
//           <span>
//             <b>Edges: </b>
//             {result.num_edges}
//           </span>
//           <span>
//             <b>Is DAG: </b>
//             {result.is_dag ? "Yes" : "No"}
//           </span>
//         </div>,
//         {
//           position: "top-center",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           transition: Bounce,
//         }
//       );
//     } catch (error) {
//       console.error("Error submitting the pipeline:", error);
//       toast.error("Submission failed! Please try again.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center fixed bottom-10 left-0 right-0">
//       <Button
//         onClick={handleSubmit}
//         color="primary"
//         size="lg"
//         type="submit"
//         isDisabled={loading}
//       >
//         {loading ? <Spinner size="sm" color="white" /> : "Submit"}
//       </Button>

//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//         transition={Bounce}
//       />
//     </div>
//   );
// };






import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  );

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Load baseURL safely from .env with fallback
      const baseURL =
        process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

      if (!baseURL) {
        throw new Error(
          "API base URL is not set. Please check your .env file."
        );
      }

      const response = await fetch(`${baseURL}/pipelines/parse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      // If response not ok, throw
      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg || "Submission failed");
      }

      const result = await response.json();
      console.log("API Response:", result);

      toast.success(
        <div className="flex flex-col p-1 text-base gap-1">
          <span><b>Nodes:</b> {result.num_nodes}</span>
          <span><b>Edges:</b> {result.num_edges}</span>
          <span><b>Is DAG:</b> {result.is_dag ? "Yes" : "No"}</span>
        </div>,
        { position: "top-center", autoClose: 5000, theme: "dark", transition: Bounce }
      );
    } catch (error) {
      console.error("Error submitting the pipeline:", error);
      toast.error(`Submission failed! ${error.message}`, {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center fixed bottom-10 left-0 right-0">
      <Button onClick={handleSubmit} color="primary" size="lg" type="submit" isLoading={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
      <ToastContainer />
    </div>
  );
};
