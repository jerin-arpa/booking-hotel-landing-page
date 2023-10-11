import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { FaObjectUngroup } from 'react-icons/fa';

const Hotel = ({ hotel }) => {
    const { hotel_image, hotel_name, hotel_place, hotel_rating, hotel_price, stay_duration_hotel } = hotel;

    return (
        <div className='p-5 shadow-xl rounded-3xl bg-white'>
            <img className='h-64 w-full rounded-3xl' src={hotel_image} alt="" />
            <h2 className='text-2xl font-bold py-3'>{hotel_name}</h2>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <div className='flex items-center text-xl text-yellow-400'>
                        <FaLocationDot></FaLocationDot>
                    </div>
                    <p>{hotel_place}</p>
                </div>
                <div className='flex gap-3'>
                    <div className='flex items-center  text-xl text-yellow-400'>
                        <AiFillStar></AiFillStar>
                    </div>
                    <p>{hotel_rating}</p>
                </div>
            </div>
            <div className='flex justify-between my-4'>
                <p className='text-3xl font-bold'>${hotel_price}</p>
                <div className='flex gap-3'>
                    <div className='flex items-center  text-xl'>
                        <FaObjectUngroup></FaObjectUngroup>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-xl'>{stay_duration_hotel}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Hotel.propTypes = {
    hotel: PropTypes.object,
};

export default Hotel;