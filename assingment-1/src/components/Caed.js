// import image1 from '../assets/photos/logo.png';
function Card(props){
    const {photo, title, price, reating, desc} = props;
    return <div className="card">
        <img className='image' alt='Product logo' src={photo}/>
        <h2 className='cardTitle'>{title}</h2>
        <h4 className='cardPrice'>Price: {price}</h4>
        <h4 className='cardPrice'>Rating: {reating}</h4>
        <p className='cardDesc'>{desc}</p>
        <button className='button'>Add to Cart</button>
    </div>
}
export default Card;