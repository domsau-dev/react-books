function Book(props) {

    const hide = () => document.querySelector(".book" + props.data.id).style.display = "none";

    return (
        <div className={"book book" + props.data.id}>
            <img src={props.data.img} alt="" />
            <div className="author">{props.data.author}</div>
            <div className="title">{props.data.title}</div>
            <div className="price">Kaina: {props.data.price} €</div>
            <button onClick={hide}>Pirkti</button>
        </div>
    );
}

export default Book;
