// // toolbar.js
// import { DraggableNode } from "./draggableNode";
// import { MdInput } from "react-icons/md";
// import { TbBoxModel2 } from "react-icons/tb";
// import { MdOutlineOutput } from "react-icons/md";
// import { CiText } from "react-icons/ci";
// import { GoNumber } from "react-icons/go";
// import { IoIosCheckboxOutline } from "react-icons/io";
// import { VscSymbolString } from "react-icons/vsc";
// import { IoColorPaletteOutline } from "react-icons/io5";
// import { TbMultiplier2X } from "react-icons/tb";

// export const PipelineToolbar = () => {
//   return (
//     <div className="bg-white w-full overflow-x-auto">
//       <div
//         className="flex flex-wrap gap-3 p-4 bg-white shadow-md"
//         style={{
//           boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
//         }}
//       >
//         <DraggableNode type="customInput" label="Input" icon={<MdInput />} />
//         <DraggableNode type="llm" label="LLM" icon={<TbBoxModel2 />} />
//         <DraggableNode
//           type="customOutput"
//           label="Output"
//           icon={<MdOutlineOutput />}
//         />
//         <DraggableNode type="text" label="Text" icon={<CiText />} />
//         <DraggableNode type="numberInput" label="Input" icon={<GoNumber />} />
//         <DraggableNode
//           type="checkboxNode"
//           label="Checkbox"
//           icon={<IoIosCheckboxOutline />}
//         />
//         <DraggableNode
//           type="stringConcatenate"
//           label="Concatenate"
//           icon={<VscSymbolString />}
//         />
//         <DraggableNode
//           type="colorPicker"
//           label="Color"
//           icon={<IoColorPaletteOutline />}
//         />
//         <DraggableNode
//           type="multiplierNode"
//           label="Multiplier"
//           icon={<TbMultiplier2X />}
//         />
//       </div>
//     </div>
//   );
// };



import { useState } from "react";
import { DraggableNode } from "./draggableNode";
import { MdInput } from "react-icons/md";
import { TbBoxModel2 } from "react-icons/tb";
import { MdOutlineOutput } from "react-icons/md";
import { CiText } from "react-icons/ci";
import { GoNumber } from "react-icons/go";
import { IoIosCheckboxOutline } from "react-icons/io";
import { VscSymbolString } from "react-icons/vsc";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbMultiplier2X } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon

export const PipelineToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toolbarContent = (
    <div
      className="flex flex-wrap gap-2 p-4 bg-white"
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <DraggableNode type="customInput" label="Input" icon={<MdInput />} />
      <DraggableNode type="llm" label="LLM" icon={<TbBoxModel2 />} />
      <DraggableNode type="customOutput" label="Output" icon={<MdOutlineOutput />} />
      <DraggableNode type="text" label="Text" icon={<CiText />} />
      <DraggableNode type="numberInput" label="Input" icon={<GoNumber />} />
      <DraggableNode type="checkboxNode" label="Checkbox" icon={<IoIosCheckboxOutline />} />
      <DraggableNode type="stringConcatenate" label="Concatenate" icon={<VscSymbolString />} />
      <DraggableNode type="colorPicker" label="Color" icon={<IoColorPaletteOutline />} />
      <DraggableNode type="multiplierNode" label="Multiplier" icon={<TbMultiplier2X />} />
    </div>
  );

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block bg-white">{toolbarContent}</div>

      {/* Mobile View */}
      <div className="md:hidden">
        <button
          className="p-2 bg-purple-600 text-white"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu size={24} />
        </button>

        {/* Sidebar */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-bold">Nodes</h2>
                <button onClick={() => setIsOpen(false)}>✖</button>
              </div>
              {toolbarContent}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
