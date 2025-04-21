import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../../redux/productSlice';
import axios from 'axios';

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get('https://admin.refabry.com/api/all/product/get');
        if (response.data?.data?.data) {
          dispatch(setProducts(response.data.data.data));
        } else {
          dispatch(setError('Invalid data structure from API'));
        }
      } catch (err) {
        dispatch(setError('Failed to fetch products'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) return <p className="text-center text-xl my-10">Loading products...</p>;
  if (error) return <p className="text-center text-red-500 my-10">Error: {error}</p>;

  return (
    <div className="max-w-screen-xl mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-10">All Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <div key={product.id} className="card group cursor-pointer rounded-none text-white bg-gray-100 ">
            <figure>
              <img
                src={`https://admin.refabry.com/storage/product/${product.image}`}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-all"
              />
            </figure>
            <div className="p-4 text-center">
              <h3 className="text-lg text-black font-semibold mb-1">{product.name}</h3>
              <p className="mb-2 text-black">৳{product.price}</p>
              <button className="btn w-full rounded-none bg-rose-500 text-gray-50 hover:bg-rose-800 border-none ">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
