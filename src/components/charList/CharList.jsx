/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './charList.scss';

import useMarvelService from '../../services/MarvelService';
import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner.jsx';
import Error from '../error/Error.jsx';

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);

    const { loading, error, getAllCharacters } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset).then(onCharListLoaded);
    };

    const onCharListLoaded = (newCharList) => {
        setCharList((charList) => [...charList, ...newCharList]);
        setNewItemLoading(false);
        setOffset((offset) => offset + 9);
    };

    const renderItems = (arr) => {
        const items = arr.map((item) => {
            let imgStyle = { objectFit: 'cover' };
            if (
                item.thumbnail ===
                'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
            ) {
                imgStyle = { objectFit: 'unset' };
            }

            return (
                <li
                    className="char__item"
                    key={item.id}
                    onClick={() => props.onCharSelected(item.id)}>
                    <img
                        src={item.thumbnail}
                        alt={item.name}
                        style={imgStyle}
                    />
                    <div className="char__name">{item.name}</div>
                </li>
            );
        });

        return (
            <ul
                key="1"
                className="char__grid">
                {items}
            </ul>
        );
    };
    const items = renderItems(charList);

    const errorMessage = error ? <Error /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;
    // const content = !(loading || error) ? items : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button
                disabled={newItemLoading}
                onClick={() => onRequest(offset)}
                className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

export default CharList;
