/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Characters from '../app/Characters';
import Comics from '../app/Comics';
import NotFound from '../notFound/NotFound';
import SingleComic from '../app/SingleComicPage';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/comics"
                    element={<Comics />}
                    exact
                />
                <Route
                    path="/"
                    element={
                        <Characters
                            onCharSelected={props.onCharSelected}
                            selectedChar={props.selectedChar}
                            decoration={props.decoration}
                            charId={props.charId}
                        />
                    }
                    exact
                />
                <Route
                    path="/comics/:comicId"
                    exact
                    element={<SingleComic />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
