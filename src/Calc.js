
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function Calc() {
  
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  
  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100; 
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    } else {
      alert('Please enter both height and weight.');
    }
  };

  return (
    <div>
      
     
     
      <h1>BMI CALCULATOR</h1>
      <h2>Body Mass Index</h2>

      <input
        placeholder='Enter height (in cm)'
        type='number'
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br/>
      <input
        placeholder='Enter weight (in kg)'
        type='number'
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      /><br/>
      <button  className='submit'onClick={calculateBMI}>Submit</button>

      {bmi && (
        <div>
          <h3 className='res'>Your BMI is: {bmi}</h3>
          <p className='result'>{bmi < 18.5 ? 'Underweight' : bmi < 24.9 ? 'Normal weight' : bmi < 29.9 ? 'Overweight' : 'Obese'}</p>
        </div>
      )}
        
     
    </div>
  );
}

export default Calc; 