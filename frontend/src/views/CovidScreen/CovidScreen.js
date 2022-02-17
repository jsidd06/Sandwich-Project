import React from 'react'
import axios from 'axios'
import{Button} from 'reactstrap'
function CovidScreen() {
    const [data, setData] = React.useState(null)
    const submitHandler = (e) => {
        e.preventDefault()
        axios.get('https://api.covid19india.org/data.json').then(res => {
            console.log(res.data)
            setData(res.data)
        })
    }

  return (
      <Button onClick={submitHandler}>ok</Button>
  )
}

export default CovidScreen