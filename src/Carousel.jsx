import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import CarouselItems from "./CarouselItems";
const Carousel = ({ items, activeItemIndex, setActiveItemIndex }) => {
  return (
    <div className="flex justify-between items-center gap-5 w-full max-w-[600px]">
      <button
        onClick={() => {
          activeItemIndex === 0
            ? setActiveItemIndex(0)
            : setActiveItemIndex((prev) => prev - 1);
        }}
        className="size-[50px] bg-black bg-opacity-50 grid place-items-center text-white rounded-full min-w-[50px]"
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      <CarouselItems items={items} activeItemIndex={activeItemIndex} />
      <button
        onClick={() => {
          activeItemIndex === items.length - 1
            ? setActiveItemIndex(items.length - 1)
            : setActiveItemIndex((prev) => prev + 1);
        }}
        className="size-[50px] bg-black bg-opacity-50 grid place-items-center text-white rounded-full min-w-[50px]"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};
export default Carousel;
