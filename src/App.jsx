import { useRef, useState } from "react";
import Carousel from "./Carousel";

const App = () => {
  const items = useRef([
    { title: "item 1", color: "#E7CC88" },
    { title: "item 2", color: "#88E7A2" },
    { title: "item 3", color: "#C888E7" },
    { title: "item 4", color: "#88D6E7" },
  ]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <div className="h-screen w-full bg-zinc-700 grid place-items-center p-5">
      <Carousel
        items={items.current}
        activeItemIndex={activeItemIndex}
        setActiveItemIndex={setActiveItemIndex}
      />
    </div>
  );
};
export default App;
