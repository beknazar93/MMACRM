import React from 'react';
import Home from './Home/Home';
import We from './We/We';
import Programs from './Programs/Programs';
import Benefit from './Benefit/Benefit';
import Companye from './Companye/Companye';
import Treners from './Treners/treners';
import Follow from './Follow/Follow';

function Main() {
  return (
    <section className='Main'>
      <Home />
      <We />
      <Programs />
      <Treners />
      <Benefit />
      <Follow/>
      <hr />
      <Companye />
    </section>
  )
}

export default Main
