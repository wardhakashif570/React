import React from 'react';
import Child from './Child';
import Image2 from './Images/2.jpg';
import Image3 from './Images/3.jpg';

class Parents extends React.Component{
    render(){
        let image2=<img src={Image2} alt="" width="100px"/>
        let image3=<img src={Image3}alt="" width="100px"/>
        return(
        <div>
            <Child name="warda" image={image2}  />
            <Child name="asma" image={image3}  />

        </div>)
    }
}

export default Parents;
