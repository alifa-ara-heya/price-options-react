import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Audio } from 'react-loader-spinner';



const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(data => setPhones(data.data.data))
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
                setLoading(false)
            })

    }, [])



    return (
        <div>
            {loading &&
                <div className="flex justify-center">
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="blue"
                        ariaLabel="three-dots-loading"
                        wrapperStyle
                        wrapperClass
                    />
                </div>}
            {/* old method */}
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer >
                    <BarChart width={1200} height={400} data={phones}>
                        <Bar dataKey="price" fill="#8884d8" />
                        <XAxis dataKey='name'></XAxis>
                        <YAxis></YAxis>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Phones;