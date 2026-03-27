import "./global.css";

import { Secondary } from "./components/secondarySurface/secondary";
import { Form } from "./components/primarySurface/form";

function App() {
  return (
    <main className="cursor-default">
      <section className="flex flex-col-reverse md:flex-row">
        <Form />
        <Secondary />
      </section>
    </main>
  );
}

export default App;
