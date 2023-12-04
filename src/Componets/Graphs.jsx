import React from "react";
import Chart, { scales } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import './Password.css'
const Graphs = () => {
  const state = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
      //  label: 'Revenue',
        backgroundColor: "#F2EFFF",
        borderColor: "rgba(0,0,0,1)",
        hoverBackgroundColor: [
          '#5932EA'
        ],
        borderRadius:8,
        
        data: [100, 100, 100, 90, 80, 70, 50, 35, 30, 20, 10, 10],
      },
    ],
  };
 
  
  return (
    <div style={{window:"300px"}}>
      <Bar
        data={state}
        options={{
            plugins:{
                tooltip:{
                    backgroundColor:"black",
                    color:"white",
                    titleColor:"black",
                    yAlign:"bottom",
                    
                },
                legend:{
                  display:false
                }

            },
          scales:{
            //xAxes: [{gridLines: { color: "#131c2b" }}],
            x:{
                
                backgroundColor:"white",
                grid:{
                    drawOnChartArea:false
                }
                
            },
            y:{
                display:false,
                grid:{
                    drawOnChartArea:false
                }
            }
          },
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default Graphs;
