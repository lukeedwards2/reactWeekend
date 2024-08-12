import React from 'react';
import GalleryList from '../GalleryList';
import Header from './Header';

function App() {
return (
<>
<Header name ="Luke"/>
<div data-testid="app">
<GalleryList />
</div>
</>
)
}

export default App;