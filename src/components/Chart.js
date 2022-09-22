import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({product, quantity}) => {

    const [labels, setLabels] = useState([])
    const [quant, setQuant] = useState([])

    console.log(labels);

    useEffect(() => {
        setLabels(product);
        setQuant(quantity)
    }, [product, quantity])
    

    const data = {
        labels: labels,
        datasets: [
          {
            label: '# of Votes',
            data: quant,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'DeepPink',
              'MediumVioletRed',
              'PaleVioletRed',
              'Coral',
              'Tomato',
              'OrangeRed',
              'OrangeGreen',
              'OrangeYellow',
              'OrangeYellowGreen',
              'DarkOrange',
              'Orange',
              'Yellow',
              'YellowGreen',
              'Fuchsia',
              'Gray',
              'GrayYellow',
              'Magenta',
              'MediumOrchid',
              'RebeccaPurple',
              'LawnGreen',
              'LimeGreen',
              'MediumAquamarine',
              'LightSeaGreen',
              'Aqua',
              'SteelBlue'
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'DeepPink',
              'MediumVioletRed',
              'PaleVioletRed',
              'Coral',
              'Tomato',
              'OrangeRed',
              'OrangeGreen',
              'OrangeYellow',
              'OrangeYellowGreen',
              'DarkOrange',
              'Orange',
              'Yellow',
              'YellowGreen',
              'Fuchsia',
              'Gray',
              'GrayYellow',
              'Magenta',
              'MediumOrchid',
              'RebeccaPurple',
              'LawnGreen',
              'LimeGreen',
              'MediumAquamarine',
              'LightSeaGreen',
              'Aqua',
              'SteelBlue'
             ],
            borderWidth: 1,
          },
        ],
      };
      

  return (

    <Doughnut data={data} />
  )
}

export default Chart;
