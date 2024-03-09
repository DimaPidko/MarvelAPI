import { useState } from 'react';

import AppHeader from '../appHeader/AppHeader';

import decoration from '../../resources/img/vision.png';
import Router from '../router/Router';

const App = () => {
    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    };

    return (
        <div className="app">
            <AppHeader />
            <Router
                onCharSelected={onCharSelected}
                selectedChar={selectedChar}
                decoration={decoration}
            />
        </div>
    );
};

export default App;
