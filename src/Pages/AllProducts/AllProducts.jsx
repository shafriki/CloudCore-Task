import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../../redux/productSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  if (loading) return <div className="flex justify-center items-center h-screen">
  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
</div>
  if (error) return <p className="text-center text-red-500 my-10">Error: {error}</p>;

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-10">All Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <div key={product.id} className="card mx-3 md:mx-0 group cursor-pointer rounded-none text-white bg-gray-100 ">
            <figure>
              <img
                src={`https://admin.refabry.com/storage/product/${product.image}`}
                alt={product.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition-all"
              />
            </figure>
            <div className="p-4 text-center">
              <h3 className="text-lg text-black font-semibold mb-1">{product.name}</h3>
              <p className="mb-2 text-black">৳{product.price}</p>
              <Link to={`/product-details/${product.id}`}>
              <button className="btn w-full rounded-none bg-rose-500 text-gray-50 hover:bg-rose-800 border-none ">
                View Product
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
