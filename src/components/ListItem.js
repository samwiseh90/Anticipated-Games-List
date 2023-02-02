const ListItem = ({ item, dispatch }) => {
    return (
        <div className="list-item">
            <button
                className="remove-item-button"
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}
            >
                X
            </button>
            <p className="item-text">{item.name}</p>
        </div>
    );
};

export default ListItem;