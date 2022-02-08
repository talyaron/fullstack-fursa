import './Card.scss';

interface gucci{
    url: string;
    data: string;
  }

function Card(props:gucci) {
    function handleSubmit(e: any) {
        e.preventDefault();
        alert('You clicked submit.');
    }
    console.log(props.url)
    return (
        <div className="card">
            <img className='imgHeader' src={props.url} />
            <p className='content'>{props.data}</p>
            <form onSubmit={handleSubmit}>
                <button className='buyButton' type="submit">Buy</button>
            </form>
        </div>
    );
}

export default Card;