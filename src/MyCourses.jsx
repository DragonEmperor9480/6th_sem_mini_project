import React from 'react';
import './Mycourses.css'; // Import CSS file for component styling

const Mycourses = () => {
  // Retrieve data from local storage
  const localStorageData = {
    gamec: localStorage.getItem('gamec'),
    gamew: localStorage.getItem('gamew'),
    gamep: localStorage.getItem('gamep'),
    bootc: localStorage.getItem('bootc'),
    bootw: localStorage.getItem('bootw'),
    bootp: localStorage.getItem('bootp'),
    genaiC: localStorage.getItem('genaiC'),
    genaiW: localStorage.getItem('genaiW'),
    genaiP: localStorage.getItem('genaiP'),
    nodec: localStorage.getItem('nodec'),
    nodew: localStorage.getItem('nodew'),
    nodep: localStorage.getItem('nodep'),
    reactc: localStorage.getItem('reactc'),
    reactw: localStorage.getItem('reactw'),
    reactp: localStorage.getItem('reactp'),
    vimc: localStorage.getItem('vimc'),
    vimw: localStorage.getItem('vimw'),
    vimp: localStorage.getItem('vimp'),
    pyc: localStorage.getItem('pyc'),
    pyw: localStorage.getItem('pyw'),
    pyp: localStorage.getItem('pyp'),
  };

  return (
    <div className="mycourses-container"> {/* Apply a CSS class for styling */}
      <h2 className="section-heading">Correct Answers, Wrong Answers, and Percentage</h2>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Correct Answers</th>
            <th>Wrong Answers</th>
            <th>Percentage (%)</th>
          </tr>
        </thead>
        <tbody>
          {localStorageData.gamec && (
            <tr>
              <td>Game Programming</td>
              <td>{localStorageData.gamec}</td>
              <td>{localStorageData.gamew}</td>
              <td>{localStorageData.gamep}%</td>
            </tr>
          )}
          {localStorageData.bootc && (
            <tr>
              <td>Bootcamp</td>
              <td>{localStorageData.bootc}</td>
              <td>{localStorageData.bootw}</td>
              <td>{localStorageData.bootp}%</td>
            </tr>
          )}
          {localStorageData.genaiC && (
            <tr>
              <td>General AI</td>
              <td>{localStorageData.genaiC}</td>
              <td>{localStorageData.genaiW}</td>
              <td>{localStorageData.genaiP}%</td>
            </tr>
          )}
          {localStorageData.nodec && (
            <tr>
              <td>Node.js</td>
              <td>{localStorageData.nodec}</td>
              <td>{localStorageData.nodew}</td>
              <td>{localStorageData.nodep}%</td>
            </tr>
          )}
          {localStorageData.reactc && (
            <tr>
              <td>React.js</td>
              <td>{localStorageData.reactc}</td>
              <td>{localStorageData.reactw}</td>
              <td>{localStorageData.reactp}%</td>
            </tr>
          )}
          {localStorageData.vimc && (
            <tr>
              <td>Vim</td>
              <td>{localStorageData.vimc}</td>
              <td>{localStorageData.vimw}</td>
              <td>{localStorageData.vimp}%</td>
            </tr>
          )}
          {localStorageData.pyc && (
            <tr>
              <td>Python Programming</td>
              <td>{localStorageData.pyc}</td>
              <td>{localStorageData.pyw}</td>
              <td>{localStorageData.pyp}%</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Mycourses;
