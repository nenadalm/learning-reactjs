import * as React from 'react';
import {Counter, StatefulCounter} from './components/counter/view';

export function App() {
    return (
        <div>
            <Counter id="unique" />
            <Counter id="duplicated" />
            <Counter id="duplicated" />
            <StatefulCounter />
        </div>
    );
}
