import "./global.css";

import { Secondary } from "./components/secondarySurface/secondary";
import { Form } from "./components/primarySurface/form";

function App() {
  return (
    <main className="cursor-default flex flex-col-reverse lg:flex-row lg:h-screen">
      <section className="flex-1 overflow-y-auto">
        <Form />
      </section>
      <aside className="lg:flex-1 lg:sticky lg:top-0 lg:h-screen">
        <Secondary />
      </aside>
    </main>
  );
}

export default App;
