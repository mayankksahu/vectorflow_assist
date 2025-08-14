import { Handle, Position } from "reactflow";
import { useState, useEffect } from "react";
import FieldRenderer from "./FieldRenderer";

export const BaseNode = ({
  id,
  label,
  data = {},
  customFields = [],
  inputHandles = [],
  outputHandles = [],
  nodeStyle = {},
  handleStyle = {},
  children,
  className = "",
}) => {
  const [nodeData, setNodeData] = useState(data);

  const defaultHandleStyle = {
    background: "#fff",
    width: "15px",
    height: "15px",
    border: "1px solid #000",
  };

  useEffect(() => {
    const defaultData = {};
    customFields.forEach((field) => {
      if (!nodeData[field.name]) {
        if (field.name.includes("Name")) {
          defaultData[field.name] = id.replace(
            `custom${label}-`,
            `${label.toLowerCase()}_`
          );
        } else {
          defaultData[field.name] = field.default || "";
        }
      }
    });
    setNodeData((prev) => ({ ...prev, ...defaultData }));
  }, [id, customFields, label]);

  const handleInputChange = (fieldName, value) => {
    setNodeData({
      ...nodeData,
      [fieldName]: value,
    });
  };

  return (
    <div
      style={nodeStyle}
      className={`px-4 py-3 w-full max-w-[320px] sm:max-w-[350px] md:max-w-[380px] border-2 bg-white flex flex-col gap-2 border-blue-600 shadow-lg rounded-lg ${className}`}
    >
      <div>
        <span className="text-blue-500 text-base sm:text-lg">{label}</span>
      </div>
      {children && <div>{children}</div>}
      <div className="flex flex-col gap-3">
        {customFields?.map((field, index) => (
          <FieldRenderer
            key={index}
            field={field}
            value={nodeData[field.name]}
            onChange={handleInputChange}
            label={field.label}
          />
        ))}
      </div>
      {inputHandles?.map((handle, index) => (
        <Handle
          key={`${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{ ...handleStyle, ...handle.style, ...defaultHandleStyle }}
          className="bg-white w-3 h-3 rounded-full border-1 border-purple-500"
        />
      ))}
      {outputHandles?.map((handle, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={handle.id}
          className="bg-white w-3 h-3 rounded-full border-1 border-purple-500"
          style={{ ...handleStyle, ...handle.style, ...defaultHandleStyle }}
        />
      ))}
    </div>
  );
};
