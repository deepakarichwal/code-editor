import { useEffect, useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  // const [html, setHtml] = useLocalStorage("html", "");
  // const [css, setCss] = useLocalStorage("css", "");
  // const [js, setJs] = useLocalStorage("js", "");

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(
    function () {
      const timeout = setTimeout(function () {
        setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
        `);
      }, 600);

      return () => clearTimeout(timeout);
    },
    [html, css, js]
  );

  return (
    <>
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          language="xml"
          onChange={setHtml}
          value={html}
        />
        <Editor
          displayName="CSS"
          language="css"
          onChange={setCss}
          value={css}
        />
        <Editor
          displayName="JavaScript"
          language="javascript"
          onChange={setJs}
          value={js}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
