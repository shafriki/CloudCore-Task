import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../../../redux/productSlice';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

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

  if (loading) return <div className="flex justify-center items-center h-screen">
  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
</div>
  if (error) return <p className="text-center text-red-500 my-10">Error: {error}</p>;

  return (
    <div className="my-10 bg-fixed py-10 relative bg-cover bg-center bg-no-repeat px-5"
      
      style={{ backgroundImage: "url('https://i.ibb.co.com/qM0kSwtJ/Charcoal-Abstract-Liquid-Illustration-Desktop-Wallpaper.png')" }}

    >
      <div className="absolute inset-0 flex items-center justify-center  bg-opacity-80" />
      <div className="relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-white">Our Products</h2>
        <div className='max-w-screen-xl mx-auto'>
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, FreeMode]}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {products.map(product => (
              <SwiperSlide key={product.id} className="relative">
                <div className="card rounded-none text-white bg-gray-700 opacity-90 hover:opacity-100 shadow-xl group cursor-pointer">
                  <figure>
                    <img
                      src={`https://admin.refabry.com/storage/product/${product.image}`}
                      alt={product.name}
                      className="w-full h-[12rem] object-cover group-hover:scale-105 transition-all"
                    />
                  </figure>
                  <div className="py-4 px-3">
                    <h2 className="text-lg text-center font-semibold mb-2">{product.name}</h2>
                    <p className="text-white text-center font-medium">৳{product.price}</p>
                    <Link to={`/product-details/${product.id}`}>
                    <button className="btn rounded-none bg-white hover:bg-gray-400 shadow-none border-none text-gray-800 w-full mt-3">
                      View Product
                    </button></Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
