import axios from 'axios'
import React from 'react'

function UniversityCardScreen() {
    const [universities, setUniversities] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const universitieCheck = () => {
        axios
          .get(`http://universities.hipolabs.com/search?country=United+States`)
          .then((res) => {
              console.log(res.data)
            setUniversities(res.data);
            setIsLoading(false);
          });
    }
  return (
    <>
      <div>UniversityCardScreen</div>
      <button onClick={universitieCheck}> submit</button>
      {universities.map((university) => (
        <div>
            <div>{university.name}</div>
            <div>{university.country}</div>
            <div>{university.web_pages[0]}</div>
            </div>
      ))}
    </>
  );
}

export default UniversityCardScreen