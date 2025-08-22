import React, { Fragment, useEffect, useMemo } from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  usePostProductMutation,
  useSingleProductQuery,
  useUpdateProductMutation,
} from "./redux/ApiSlice";
import Nav from "./Nav";
import { useDispatch } from "react-redux";
import { addToCart, removeCart } from "./redux/Reducer";

const App = () => {
  const { data: products, refetch,isLoading,isFetching } = useGetProductsQuery();
  // const { data: product } = useSingleProductQuery({
  //   id: 2,
  //   param: { value: 1, id: 1, brand: "categ" },
  // });
  const [postData, { data: respose }] = usePostProductMutation();
  const [updateData] = useUpdateProductMutation();
  const [deleteData] = useDeleteProductMutation();

  useEffect(() => {
    deleteData({ id: 1 });
    updateData({
      id: 2,
      body: {
        title: "abc",
        price: 100,
        description: "xyz",
        category: "string",
        image:
          "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
      },
    });
    refetch()
  }, []);

  //  const productData =[...products];

  const productData = useMemo(() => {
    if (!products ) {
      return [];
    }

    //return [...products, respose];
    return [...products];


  }, [products, respose]);

  const dispatch = useDispatch();
  return (
    <Fragment>
      {isLoading || isFetching ? <h1>Loading....</h1> : <> <Nav />
    
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: "10px",
        }}
      >
        {productData?.map((e) => {
          const { title, price, image, id } = e;
          return (
            <div
              key={id}
              style={{ border: "1px solid ", width: "350px", margin: "auto" }}
            >
              <img
                src={"image"}
                alt={"n"}
                style={{ width: "150px", height: "150px", margin: "auto" }}
              />
              <div style={{ display: "flex", gap: "16px" }}>
                <span>{title}</span>
                <span>Rs.{price}</span>
              </div>
              <div style={{ display: "flex", gap: "16px", margin: "16px" }}>
                <button
                  onClick={() =>
                    dispatch(addToCart({ id: id, price: price, title: title }))
                  }
                >
                  Add
                </button>
                <button
                  onClick={() =>
                    dispatch(removeCart({ id: id, price: price, title: title }))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div></>}
     
    </Fragment>
  );
};

export default App;
