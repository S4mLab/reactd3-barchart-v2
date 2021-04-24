import { useState, useEffect} from 'react'
import { csv } from 'd3'

const dataUrl = "https://gist.githubusercontent.com/S4mLab/aa1126819e004344fc8ee36cdbb2eb63/raw/79a39d9554b076b0cfe7c8f9923be4865dd62220/UN_Population_2019.csv"

const LoadData = () => {

    const [data, setData] = useState([])
  
    // download the data just once when app first render, use [] as the dependence
    useEffect(() => {

        const convert2020Population2Num = aDataObj => {
            aDataObj['2020NumType'] = +aDataObj['2020']
            return aDataObj
        }

      csv(dataUrl, convert2020Population2Num).then(dataArrayObjs => setData(dataArrayObjs.slice(0, 10)))
    }, [])
    return data
  }

  export default LoadData