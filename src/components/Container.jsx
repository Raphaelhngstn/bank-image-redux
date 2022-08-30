import React from "react";
import Image from "./Image";
import { useSelector, useDispatch } from "react-redux";
import { actionSetNewPage } from "../actions/data";

const Container = () => {
  //state for reducer
  const images = useSelector((state) => state.imageList);
  const totalResult = useSelector((state) => state.totalResult);
  const search = useSelector((state) => state.searchValue);

  const dispatch = useDispatch();

  // onClick on "more images"
  const handleClick = () => {
    dispatch(actionSetNewPage());
  };

  return (
    <>
      {totalResult ? (
        <p className="text-center text-white font-bold">
          {" "}
          {totalResult} picture{totalResult > 1 ? "s" : ""}
          {search ? ` for "${search}"` : ""}{" "}
        </p>
      ) : (
        ""
      )}
      {/* map on array of images */}
      <div className="mx-auto p-4 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((url, index) => {
          return <Image key={index} url={url} />;
        })}
      </div>

      {/* show button "more images" if more 9 results */}
      {totalResult > 9 ? (
        <div className="mx-auto grid w-48 mt-6 pb-8">
          {/* if we see all the results, skip the button "more images" */}
          {totalResult === images.length ? (
            ""
          ) : (
            <button
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              More images
            </button>
          )}
        </div>
      ) : (
        ""
      )}

      {/* if no result API */}
      {!totalResult && (
        <div
          className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 p-4 py-3 mx-4"
          role="alert"
        >
          <p className="font-bold">Informational message</p>
          <p className="text-sm">There is no images for your request.</p>
        </div>
      )}
    </>
  );
};

export default Container;
