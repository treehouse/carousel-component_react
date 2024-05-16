const CarouselItems = ({ items, activeItemIndex }) => {
  return (
    <div className="w-full max-w-[500px] rounded-lg bg-white h-[300px] overflow-hidden">
      <div
        className="h-[300px] grid place-items-center"
        style={{ backgroundColor: items[activeItemIndex].color }}
      >
        {items[activeItemIndex].title}
      </div>
    </div>
  );
};
export default CarouselItems;
