/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Characters from '../app/Characters';
import Comics from '../app/Comics';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
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
                />
                <Route
                    path="/comics"
                    element={<Comics />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
