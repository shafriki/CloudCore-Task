import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../../../redux/productSlice';
import axios from 'axios';

const HomeProduct = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get('https://admin.refabry.com/api/all/product/get');

        if (response.data && response.data.data && response.data.data.data) {
          dispatch(setProducts(response.data.data.data));
        } else {
          dispatch(setError('Invalid data structure from API'));
        }
      } catch (err) {
        console.error('Failed to fetch products:', err);
        dispatch(setError('Failed to fetch products'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Home Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(products) && products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img
                src={`https://admin.refabry.com/storage/product/${product.image}`}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-3"
                />

              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-700">৳{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default HomeProduct;
