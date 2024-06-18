import { IMG_CDN_URL } from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice"


const ItemList = (props) => {
  const items = props.item;
  // console.log(props, "itemList");
  const dispatch = useDispatch();
  const hadleAddItem = (item) =>{
      dispatch(addItem(item));
  }
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-4 border-gray-200 border-b-2 text-left flex justify-between border-r-2"
        >
          <div className="w-9/12">
            <div className="p-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info.price / 100
                  : item?.card?.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-40 p-4 ">
            <div className="absolute">
              <button
                className="p-1 mx-16   bg-black
                 text-white rounded-lg shadow-lg"
                 onClick={() => hadleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={IMG_CDN_URL + item?.card?.info.imageId}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
