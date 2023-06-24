import Header from "./components/Header";
import Form from "./components/Generalform";
import Educationform from "./components/Educationform";
import Workform from "./components/Workform";

import { useState,useEffect } from "react";
import PrintButton from "./components/PrintButton";
import ToggleFormButton from "./components/Button";








const  App = () =>    {
	const[printmode, setPrintmode] = useState(false)

	



	

  const handlePrint = () => {
	
    window.print();
	setPrintmode(true);
  };



	return(
<div className='container'>
	<Header />
	<Form /> 

	   <ToggleFormButton formComponent={<Educationform />} buttonText=" ADD EDUCATION  " /> 

	
	
	 <ToggleFormButton formComponent={<Workform />} buttonText=" ADD WORK EXPERIENCE" /> 


	 <PrintButton onClick={handlePrint} />



	




</div>



	);

};





export default App ;
