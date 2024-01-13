const date = new Date();
const dateY = date.getFullYear();
const dateM = date.getMonth();
const dated = date.getDay();

function Card(props){
    const {name, des} = props;
    return <div className='card'>
                <h3 className='cardTitle'>{name}</h3>
                <p className='cardDesc'>{des}</p>
                <h5 className='footer'>{dateY+ "/"+dateM+ "/"+ dated}</h5>
            </div>
}

export default Card;