import React from 'react';
import ReactDOM from 'react-dom';

// nova forma de acessar a div root
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(    
//     <React.StrictMode>
//         <h1>App</h1>
//     </React.StrictMode>
// )

ReactDOM.render(
    <h1>App</h1>,
    document.getElementById('root')
)