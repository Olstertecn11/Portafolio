import Title from './Title';


export default function Separator({showTitle=false, text}){
    return(
	<div>
	    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		<path fill="#ffd700" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,90.7C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
		</path>
	    </svg>
	    {showTitle && 
		<Title text={text} />
	    }
	</div>
    );
}
