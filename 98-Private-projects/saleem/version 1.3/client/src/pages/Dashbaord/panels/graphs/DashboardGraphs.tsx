import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale, BarElement, Title,RadialLinearScale} from 'chart.js';
import { Pie,Bar,PolarArea } from 'react-chartjs-2';
import faker from "@faker-js/faker"

import "./style/DashbboardGraphsStyle.scss";
import { useIntl } from 'react-intl';
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,
    LinearScale, BarElement, Title,RadialLinearScale );

    
    export function DashbboardGraphs() {
      const intl = useIntl();

     const Piedata = {
      labels: [useIntl().formatMessage({ id: 'over' }), useIntl().formatMessage({ id:'close' }), useIntl().formatMessage({ id: 'done' }), useIntl().formatMessage({ id: 'delayed' })],
      datasets: [
        {
          label: '# of Votes',
          data: [12,  3, 5, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 0.1,
        },
      ],
    };
     const Baroptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text:useIntl().formatMessage({ id: 'taskstatusineachproject' }),
          },
        },
      };
      
      const labels = ['project 1', 'project 2', 'project 3', 'project 4', 'project 5', 'project 6', 'project 7'];
      
       const Bardata = {
        labels,
        datasets: [
          {
            label: useIntl().formatMessage({ id: 'done' }),
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: useIntl().formatMessage({ id: 'over' }),
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
    
          },
        ],
    
      };
     const TaskPerProject = {
      labels: ['projec1', 'projec2', 'projec3', 'projec4', 'projec5', 'projec6'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
          ],
          borderWidth: 1,
        },
      ],
    };
    
    
      return (
        <div className='graphsContainer'>
            <div className='taskstatus'>
              <h2>{intl.formatMessage({ id: 'totaltasksstatus' })}</h2>
              <Pie data={Piedata} />
            </div>
            <div className='projectstaskstatus'>
              <h2>{intl.formatMessage({ id: 'projectsTasksstatus' })}</h2>
              <Bar options={Baroptions} data={Bardata} width={400} height={400} />
            </div>
            <div className='TaskPerProject'>
              <h2>{intl.formatMessage({ id: 'TaskPerProject' })}</h2>
              <PolarArea data={TaskPerProject} />
            </div>
          </div>
      );
    }