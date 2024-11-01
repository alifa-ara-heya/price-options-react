// import PropTypes from 'prop-types';
import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Standard workout equipment",
                "Limited gym hours",
                "Access to locker room"
            ],
            "price": 30.00
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "Extended gym hours",
                "Group fitness classes",
                "Access to locker room"
            ],
            "price": 50.00
        },
        {
            "id": 3,
            "name": "Platinum Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "24/7 gym access",
                "Personal training sessions",
                "Access to sauna and spa",
                "Access to locker room",
                "Towel service"
            ],
            "price": 80.00
        }
    ];


    return (
        <div className="m-12">
            <h2 className="text-5xl font-medium my-6">Best prices in the town</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
                {
                     priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;