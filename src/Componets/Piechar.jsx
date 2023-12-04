import React from 'react'
// import { Pie } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'
const Piechar = () => {
    const state = {
        labels: [
          'Online',
          'Cash',
          'Cheque'
        ],
        datasets: [{
          label: '',
          data: [63, 25, 12],
          backgroundColor: [
            '#4318FF',
            '#6AD2FF',
            'white'
          ],
        //   hoverOffset: 4,

        },
       
        ]
      };
  return (
    <div>
        <Pie
        data={state}
        options={{
            plugins:{
                legend:{
                  display:false
                }
            }
        }}
        />
    </div>
  )
}

export default Piechar;
