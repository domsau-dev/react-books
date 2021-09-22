function Book(props) {

    return (
        <div className="book">
            <img src={props.data.img} alt="" />
            <div className="author">{props.data.author}</div>
            <div className="title">{props.data.title}</div>
            <div className="price">Kaina: {props.data.price} €</div>
            <button>Pirkti</button>
        </div>
    );
}

export default Book;