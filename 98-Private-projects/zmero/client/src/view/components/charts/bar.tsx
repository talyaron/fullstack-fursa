import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function BarChart() {
    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                borderWidth: 2,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [65, 59, 80, 81, 56]
            }
        ]
    }
    return (<div>
        <Bar
            data={state}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }
            }}
        />

    </div>)
}

export default BarChart