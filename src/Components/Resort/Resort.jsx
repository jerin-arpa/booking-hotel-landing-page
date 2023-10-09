import PropTypes from 'prop-types';

const Resort = ({ resort }) => {
    const { image, resort_name, resort_place, rating, price, stay_duration } = resort;

    return (
        <div className='p-5 shadow-xl rounded-3xl'>
            <img className='h-64 w-full rounded-3xl' src={image} alt="" />
            <h2 className='text-2xl font-bold py-3'>{resort_name}</h2>
            <div className='flex justify-between'>
                <p>{resort_place}</p>
                <p>{rating}</p>
            </div>
            <div className='flex justify-between my-4'>
                <p className='text-3xl font-bold'>${price}</p>
                <p className='text-xl'>{stay_duration}</p>
            </div>
        </div>
    );
};

Resort.propTypes = {
    resort: PropTypes.object,
};

export default Resort;