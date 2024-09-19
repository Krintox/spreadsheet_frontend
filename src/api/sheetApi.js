export const getSheetData = async (spreadsheetId, range) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:5000/sheets/read`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ spreadsheetId, range }),
    });
    const data = await response.json();
    return data;
  };
  