import './input.css';

const Input = (props) => {

	if (props.image === 'image') {
		return (	
		<img src={props.url} alt={props.title} />
		
		);
	} else {	
		return (
			<iframe className='video' width={961} height={721} src={props.url} title={props.title}></iframe>
		)
		
	} 

}

export default Input;
/*<iframe className='video' width={961} height={721} src={props.url} title={props.title}></iframe>*/