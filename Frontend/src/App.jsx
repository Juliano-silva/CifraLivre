import { useEffect, useState } from "react";

function App() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMensagem(data.message));
  }, []);

  return (
    <div>
      <h1>React + Flask</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
