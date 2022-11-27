import './Content.css';
import React from 'react';
import {  
  Routes,
  Route
} from 'react-router-dom';

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param';

const Content = props => (
    <main className='Content'>
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/param/:id' element={<Param />} /> {/* :id -> representa o parametro, não é valor literal */}
            {/* <Route path='/about' component={About} /> */}
            <Route path='/' element={<Home />} />
        </Routes>
    </main>
)


export default Content