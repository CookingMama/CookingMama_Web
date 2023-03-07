const MainItemList = ({ id, imageSrc, imageAlt, name, color, price }) => {
  return (
    <div key={id} className="py-2">
      <div className="flex aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        <img src={imageSrc} alt={imageAlt} className="object-fill w-44 h-44" />
      </div>
      <div className="flex flex-col">
        <div>
          <h3 className="my-1 text-sm text-gray-700">
            <a href="/#">
              <span aria-hidden="true" className="inset-0" />
              {name}
            </a>
          </h3>
          <p className="text-xs text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
        <div>
          <p className="float-left text-sm text-gray-900">heart</p>
        </div>
      </div>
    </div>
  );
};

export default MainItemList;
