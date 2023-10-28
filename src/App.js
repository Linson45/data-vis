import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const initialData = [
  {id: 1, name: 'John', value: 10},
  {id: 2, name: 'Jane', value: 15},
  {id: 3, name: 'Bob', value: 20},
];

const App = () => {
  const [data, setData] = useState(initialData);

  const handleCheck = (checked, item) => {
    if (checked) {
      setData([...data, item]);
    } else {
      setData(data.filter(i => i.id !== item.id));
    }
  }

  const checkedData = data.map(item => item.value);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {initialData.map(item => (
            <tr key={item.id}>
              <td>
                <input 
                  type="checkbox" 
                  checked={data.find(i => i.id === item.id)}
                  onChange={e => handleCheck(e.target.checked, item)} 
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Plot
        data={[{
          x: checkedData,
          type: 'bar'
        }]}
        layout={{width: 720, height: 480, title: 'Bar Chart'}}
      />
    </div>
  );
}

export default App;