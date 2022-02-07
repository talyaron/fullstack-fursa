import '.Card/scss'

function Card() {
    const clicked = 10;
    function handleSubmit(e: any) {
        e.preventDefault();
        alert('You clicked submit.');
    }
    return (
        <div className="card">
            <p>number of times clicked {clicked}</p>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Card;