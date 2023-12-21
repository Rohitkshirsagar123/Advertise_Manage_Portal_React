import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';

// json file dummy data
import Mockdata from "./MOCK_DATA.json";
import secondDummy from "./maleFemaleDummy.json"

// icons
// import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartDoughnut } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';



import Chart from 'chart.js/auto'; // Import Chart.js library

const Dashboard = () => {
  const [data, setData] = useState(Mockdata);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [showDoughnut, setShowDoughnut] = useState(true);
  //   const [chartInstance, setChartInstance] = useState(null);



  //   ------------------------------------------------------------------------------
  //   create dummy data for DoughnutChart
  const getDoughnutChartData = () => {
    // Your dummy data here
    return {

      datasets: [
        {
          data: [40, 35, 25],
          backgroundColor: ['rgb(255,130,60)', 'rgb(0,150,255)', 'rgb(50,60,70)'],
        },
      ]
    };
  };


  //  Second table dummy data - male female data
  const SecondTableComponent = ({ tableData }) => {
    // Implement your table rendering logic here using the 'tableData'
    return (
      <table>
        <thead>
          <tr>
            <th >
              Groups
            </th>
            <th >
              Clicks
            </th>
            <th >
              Cost

            </th>
            <th >
              Conversion

            </th>
            <th>
              Revenue

            </th>
          </tr>
        </thead>
        <tbody>
          {secondDummy.map((d) => (
            <tr key={d.id}>
              <td>{d.Group}</td>
              <td>{d.Clicks}</td>
              <td>USD {d.Cost}</td>
              <td>{d.Conversion}</td>
              <td>USD {d.Revenue}</td>
            </tr>
          ))}

          <tr>
            <td>Total</td>
            <td>{getTotal('Clicks')}</td>
            <td>USD {getTotal('Cost')}</td>
            <td>{getTotal('Conversion')}</td>
            <td>USD {getTotal('Revenue')}</td>
          </tr>

        </tbody>
      </table>
    );
  };




  //   -----------------------------------------------------------------------

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    if (sortConfig.key) {
      const sorted = [...data].sort((a, b) => {
        let keyA = a[sortConfig.key];
        let keyB = b[sortConfig.key];


        // Compare based on sorting direction
        if (sortConfig.direction === 'asc') {
          return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
        } else {
          return keyA > keyB ? -1 : keyA < keyB ? 1 : 0;
        }
      });
      return sorted;
    }
    return data;
  };

  const getTotal = (key) => {
    return sortedData().reduce((acc, d) => acc + d[key], 0);
  };

  useEffect(() => {
    // Set initial sorting direction based on a predefined value
    const initialDirection = 'asc'; // Set this value based on your requirement
    setSortConfig({ key: 'Campaign', direction: initialDirection });
  }, []); // Run this effect only once when the component mounts

  const getSortIndicatorStyles = (key, indicator) => {
    const isActive = sortConfig.key === key;
    const color = isActive ? (sortConfig.direction === indicator ? 'black' : 'lightblue') : 'black';
    const visibility = isActive ? 'visible' : 'hidden';
    return {
      fontWeight: isActive && sortConfig.direction === indicator ? 'bold' : 'light',
      visibility: visibility,
      color: color,
      marginLeft: '4px', // Add margin to separate the indicator from the text
      display: 'inline-block', // Display indicators on the same line
    };
  };

  return (
    <>
      {/* <h1>Dash board</h1> */}
      <div className='dashboard_sec'>
        <div className='left_part'>
          <div className='heading'>
            <h4>Ad Insights</h4>
          </div>
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('Campaign')}>
                  Campaign
                  <span style={getSortIndicatorStyles('Campaign', 'asc')}>&#9650;</span>
                  <span style={getSortIndicatorStyles('Campaign', 'desc')}>&#9660;</span>
                </th>
                <th onClick={() => handleSort('Clicks')}>
                  Clicks
                  <span style={getSortIndicatorStyles('Clicks', 'asc')}>&#9650;</span>
                  <span style={getSortIndicatorStyles('Clicks', 'desc')}>&#9660;</span>
                </th>
                <th onClick={() => handleSort('Cost')}>
                  Cost
                  <span style={getSortIndicatorStyles('Cost', 'asc')}>&#9650;</span>
                  <span style={getSortIndicatorStyles('Cost', 'desc')}>&#9660;</span>
                </th>
                <th onClick={() => handleSort('Conversion')}>
                  Conversion
                  <span style={getSortIndicatorStyles('Conversion', 'asc')}>&#9650;</span>
                  <span style={getSortIndicatorStyles('Conversion', 'desc')}>&#9660;</span>
                </th>
                <th onClick={() => handleSort('Revenue')}>
                  Revenue
                  <span style={getSortIndicatorStyles('Revenue', 'asc')}>&#9650;</span>
                  <span style={getSortIndicatorStyles('Revenue', 'desc')}>&#9660;</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData().map((d) => (
                <tr key={d.id}>
                  <td>{d.Campaign}</td>
                  <td>{d.Clicks}</td>
                  <td>USD {d.Cost}</td>
                  <td>{d.Conversion}</td>
                  <td>USD {d.Revenue}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td>{getTotal('Clicks')}</td>
                <td>USD {getTotal('Cost')}</td>
                <td>{getTotal('Conversion')}</td>
                <td>USD {getTotal('Revenue')}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='right_part'>
          <div className='heading'>
            <h4>Ad Insights</h4>
            <select >
              <option value="Click">Click</option>

            </select>
          </div>
          {showDoughnut ? (
            <>
              <div id="doughnut-chart-container">
                <Doughnut id="doughnut-chart" data={getDoughnutChartData()} />
                <div className='doug_title'>
                  <li><span className="color-dot" style={{ backgroundColor: 'rgb(255,130,60)' }}></span>40% Male</li>
                  <li><span className="color-dot" style={{ backgroundColor: 'rgb(0,150,255)' }}></span>35% Female</li>
                  <li><span className="color-dot" style={{ backgroundColor: 'rgb(50,60,70)' }}></span>25% Unknown</li>
                </div>
              </div>
            </>
          ) : (
            <SecondTableComponent tableData={secondDummy} />
          )}

          <div className="chart-buttons">
            <button
              onClick={() => {
                setShowDoughnut(true);
              }}
              style={{
                backgroundColor: showDoughnut ? 'rgb(0,150,255)' : 'transparent',
                border: 'none',
                height: '35px',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faChartPie} style={{ color: 'black', height: "23px" }} />
            </button>
            <button
              onClick={() => {
                setShowDoughnut(false);
              }}
              style={{
                backgroundColor: showDoughnut ? 'transparent' : 'rgb(0,150,255)',
                border: 'none',
                height: '35px',
                cursor: 'pointer',
                color: "white",
              }}
            >
              <FontAwesomeIcon icon={faTable} style={{ color: 'black', height: "23px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
