/* eslint-disable react/prop-types */
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

const Characters = (props) => {
    return (
        <main>
            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={props.onCharSelected} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo charId={props.selectedChar} />
                </ErrorBoundary>
            </div>
            <img
                className="bg-decoration"
                src={props.decoration}
                alt="vision"
            />
        </main>
    );
};

export default Characters;
