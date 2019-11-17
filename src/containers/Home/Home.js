import React, { Fragment }from 'react';
import Intro from 'components/Home/Intro/Intro';
import Work from 'components/Home/Work/Work';

const Home = () => {
    return (
        <Fragment>      
            <Intro />
            <Work />
        </Fragment>
    )
}

export default Home;