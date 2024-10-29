import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyBarChart = () => {
    const salesData = [
        { month: 'January', sales: 4000, profit: 2400 },
        { month: 'February', sales: 3000, profit: 1398 },
        { month: 'March', sales: 5000, profit: 4300 },
        { month: 'April', sales: 2780, profit: 3908 },
        { month: 'May', sales: 1890, profit: 4800 },
        { month: 'June', sales: 2390, profit: 3800 },
        { month: 'July', sales: 3490, profit: 4300 },
        { month: 'August', sales: 2000, profit: 2500 },
        { month: 'September', sales: 3000, profit: 4100 },
        { month: 'October', sales: 4000, profit: 3200 },
        { month: 'November', sales: 2500, profit: 2400 },
        { month: 'December', sales: 4500, profit: 3400 },
      ];
      
    return (
        <div style={{ width: '100%', height: 400} }>
            <ResponsiveContainer width='100%' height= '100%' >
                <BarChart  data={salesData}>

                    <Bar dataKey='sales' fill='skyblue' ></Bar>
                    <Bar dataKey='profit'  fill='yellow'></Bar>
                    <XAxis dataKey='month'></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Rectangle></Rectangle>
                    <CartesianGrid strokeDasharray="3 3" />
                </BarChart>

            </ResponsiveContainer>
        </div>
    );
};



export default MyBarChart;