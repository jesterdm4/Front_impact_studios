import React from 'react';
import './home.scss'

import {Button } from '../../Components'
const Home = (props) => {
  return (
    <>
        <h1 class='bold'>The quick brown fox jumps over the lazy dog.</h1>
        <h2 class='bold'>The quick brown fox jumps over the lazy dog.</h2>
        <h3 class='bold'>The quick brown fox jumps over the lazy dog.</h3>
        <h4 class='bold'>The quick brown fox jumps over the lazy dog.</h4>
        <h5 class='bold'>The quick brown fox jumps over the lazy dog.</h5>
        <h6 class='bold'>The quick brown fox jumps over the lazy dog.</h6>

        <h1 class='pattern'>The quick brown fox jumps over the lazy dog.</h1>
        <h2 class='pattern'>The quick brown fox jumps over the lazy dog.</h2>
        <h3 class='pattern'>The quick brown fox jumps over the lazy dog.</h3>
        <h4 class='pattern'>The quick brown fox jumps over the lazy dog.</h4>
        <h5 class='pattern'>The quick brown fox jumps over the lazy dog.</h5>
        <h6 class='pattern'>The quick brown fox jumps over the lazy dog.</h6>

         
        <Button>This is a primary button</Button>
        <Button disabled>This is a primary disabled button</Button>
        <Button color={'primary-ghost'}>This is a ghost button </Button>
        {/* <Button color={'secondary'}>This is a button</Button> */}
    </>
  );
};
export default Home;