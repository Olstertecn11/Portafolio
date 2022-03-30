import { BiChevronUpCircle } from 'react-icons/bi';


const GoTopButton = (props)=>{
    return(
	<>
	    <div className="show" onClick={props.scrollUp}>
		<button className="goTop">
		    <BiChevronUpCircle /> 
		</button>

	    </div>
	</>
    );
}
 export default GoTopButton;
