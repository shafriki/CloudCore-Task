import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BiCategory } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2'; // ✅ SweetAlert2 import

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://admin.refabry.com/api/all/product/get');
        const allProducts = response?.data?.data?.data || [];

        const matchedProduct = allProducts.find(p => p.id.toString() === id);
        if (matchedProduct) {
          setProduct(matchedProduct);
        } else {
          setError('Product not found.');
        }
      } catch (err) {
        console.error('Error fetching all products:', err);
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchAllProducts();
    } else {
      setError('Invalid product ID');
    }
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
  </div>
  if (error) return <p className="text-center text-red-500 my-10">Error: {error}</p>;

  return (
    <div>

      {/* Parallax section */}
      <div className="relative">
        <div className="bg-cover bg-center bg-fixed w-full h-[200px] md:h-[300px]" style={{
            backgroundImage: `url(https://admin.refabry.com/storage/product/${product?.image})`,}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-4xl font-bold"> {product?.name}
          </div>
        </div>
      </div>

      {/* Product details card */}
      <div className="mx-auto flex flex-col md:flex-row justify-between w-full gap-12 p-6 cursor-pointer group my-10" data-aos="fade-up">

        {/* product image */}
        <div className="flex flex-col gap-6 flex-1" data-aos="fade-up">
          <div className="w-full overflow-hidden rounded-md">
            <img className="object-cover w-full md:h-[35rem] group-hover:scale-110 transition" src={`https://admin.refabry.com/storage/product/${product?.image}`} alt={product?.name} />
          </div>
        </div>

        <div className="md:gap-10 flex-1" data-aos="fade-up">

          {/* Product Info */}
          <h2 className="text-3xl font-bold text-gray-800">{product?.name}</h2>
          <div className=" flex items-center gap-10">
            <p className="text-xl text-rose-500 line-through my-4">৳{product?.price}</p>
            <p className="text-2xl font-semibold text-rose-600 my-4"> 
              ৳{product?.price - product?.discount_amount}
            </p>
          </div>
          <hr className="my-1" />
          
          <div className="text-xs md:text-lg font-light text-justify text-neutral-500 whitespace-pre-line">
            {product?.short_desc.split('\r\n').map((line, index) => {
              if (line.startsWith('*')) {
                return (
                  <p key={index} className="ml-4 list-inside list-disc">
                    {line}
                  </p>
                );
              }
              if (line.includes('Call :') || line.includes('WhatsApp')) {
                return (
                  <p key={index} className="text-blue-600 font-semibold">
                    {line}
                  </p>
                );
              }
              return (
                <p key={index}>
                  {line}
                </p>
              );
            })}
          </div>

          <hr className="my-6" />
          <div>
            <p className="gap-4 font-light text-neutral-500">
              <span className="font-semibold"><BiCategory className='inline-block mr-2'/>
              Category:</span> {product?.category?.name || 'N/A'}
            </p>
          </div>
          <hr className="my-6" />
          
          <button onClick={() => Swal.fire({ icon: 'success', title: 'Added Successfully!', showConfirmButton: false,
              timer: 1500})} className="btn w-full bg-rose-500 text-gray-50 hover:bg-rose-800 py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
