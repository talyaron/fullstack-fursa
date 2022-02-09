import './Card.scss';

interface item{
    info:{
        url: string;
        name: string;
    }
  }

function Card(props:item) {
    const {url,name}=props.info;
    function handleSubmit(e: any) {
        e.preventDefault();
        alert('You clicked submit.');
    }
    return (
        <div className="card">
            <img className='imgHeader' src={url} />
            <p className='content'>
            <h2>{name}</h2>
            </p>
            <form onSubmit={handleSubmit}>
                <button className='buyButton' type="submit">Add to Cart</button>
            </form>
        </div>
    );
}

export default Card;