import { useState } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import TechnologySection, {
  type Technology,
} from "./Components/TechnologySection";
import StackSidebar from "./Components/StackSidebar";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((t) => t.id === technology.id);
    if (alreadyAdded) {
      console.warn(`${technology.name} is already in your stack.`); // becomes a toast in Stage 7
      return;
    }
    setStack((prev) => [...prev, technology]);
  };

  const handleRemove = (id: string) => {
    setStack((prev) => prev.filter((t) => t.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-4 py-16 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
        <TechnologySection stack={stack} onAdd={handleAdd} />
        <StackSidebar
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </>
  );
}

export default App;
