import axios from 'axios'
import {useState} from 'react';

const Fetch = () => {

    const [data , setData] = useState({});

    const handleClick = () =>{
        console.log("Hello abhishek");
        axios
            .get('https://api.openweathermap.org/data/2.5/onecall?lat=41.8675766&lon=-87.616232&exclude=minutely&appid=25974a74eff77d6afde92ab471d7f886')
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return ( 
        <div className="fetch">
            <button onClick={handleClick}>Fetch </button>
        </div>
     );
}
 
export default Fetch;