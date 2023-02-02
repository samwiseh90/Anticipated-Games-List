import { useState } from 'react';

const AddGame = ({ dispatch }) => {
    const [inputValue, updateInput] = useState('');

    const handleInputChange = (e) => {
        updateInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: inputValue });
        updateInput('');
    };

    return (
        <form onSubmit={submitHandler}>
            <input type='text' value={inputValue} onChange={handleInputChange} />
            <button type='submit'>+</button>
        </form>
    );
};

export default AddGame;