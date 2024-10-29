import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-sky-600 shadow-2xl rounded-xl p-4 text-white text-center flex flex-col justify-center'>
            <h2>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-3xl my-5'>{name} </h4>

            <div className='pl-10 flex-grow '>
                {
                    features.map((feature,idx) => <Feature key={idx} feature={feature}> </Feature>)
                }
            </div>
            <button className='mt-12 bg-yellow-400 text-black w-full py-2 font-medium hover:bg-amber-400 rounded-lg'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;