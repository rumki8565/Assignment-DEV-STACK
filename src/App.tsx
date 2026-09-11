import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      toast.warn(`${technology.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const removed = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <>
      <Nav />
      <Banner />
      <div className="max-w-7xl mx-auto px-4 py-16 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
        <TechnologySection stack={stack} onAdd={handleAdd} />
        <StackSidebar
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
      <ToastContainer position="bottom-right" autoClose={2500} />
    </>
  );
}

export default App;
