import './Card.scss';

interface gucci{
    url: string;
    name: string;
  }

function Card(props:gucci) {
    function handleSubmit(e: any) {
        e.preventDefault();
        alert('You clicked submit.');
    }
    return (
        <div className="card">
            <img className='imgHeader' src={props.url} />
            <p className='content'>
            <h2>{props.name}</h2>
            </p>
            <form onSubmit={handleSubmit}>
                <button className='buyButton' type="submit">Add to Cart</button>
            </form>
        </div>
    );
}

export default Card;