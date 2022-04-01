import { DiJavascript1, DiReact, DiJava } from 'react-icons/di';
import { SiLua, SiTypescript } from 'react-icons/si';

export default function getIcon(icon){
    
    if(icon === "js"){
	return <DiJavascript1 fontSize={30} color="#B78E00" />;
    }
    else if(icon === "lua"){
	return <SiLua fontSize={30} color="skyblue" />;
    }
    else if(icon === "jsx"){
	return <DiReact fontSize={30} color="#227FCC" />;
    }
    else if(icon === "tsx"){
	return <SiTypescript fontSize={30} color="orange" />
    }
    else{
	return <DiJava fontSize={30}  color="orange" />;
    }
}

