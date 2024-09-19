import React, { useState } from 'react';
import { getSheetData } from '../api/sheetApi';

const SheetData = () => {
  const [data, setData] = useState([]);
  const [spreadsheetId, setSpreadsheetId] = useState('');
  const [range, setRange] = useState('');

  const handleFetchData = async () => {
    try {
      const response = await getSheetData(spreadsheetId, range);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Google Sheets Data</h2>
      <input
        type="text"
        placeholder="Spreadsheet ID"
        value={spreadsheetId}
        onChange={(e) => setSpreadsheetId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Range (e.g., Sheet1!A1:D10)"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      />
      <button onClick={handleFetchData}>Fetch Data</button>
      <table>
        <thead>
          <tr>{data[0]?.map((cell, idx) => <th key={idx}>{cell}</th>)}</tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, idx) => <td key={idx}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SheetData;
