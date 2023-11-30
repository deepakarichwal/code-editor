import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";

import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

function Editor(props) {
  const [open, setOpen] = useState(false);
  const { displayName, language, onChange, value } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? "collapse" : ""}`}>
      <div className="editor-title">
        {displayName}
        <button
          onClick={() => setOpen((open) => !open)}
          className="collapse-button"
        >
          {open ? <FiMaximize2 /> : <FiMinimize2 />}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lint: true,
          lineWrapping: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}

export default Editor;
