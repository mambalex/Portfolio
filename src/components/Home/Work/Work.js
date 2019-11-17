import React, { Component } from 'react'
import proj1 from 'assets/images/proj1.jpg';
import proj2 from 'assets/images/proj2.jpg';
import proj3 from 'assets/images/proj3.jpg';
import proj4 from 'assets/images/proj4.jpg';
import './Work.scss';

class Work extends Component {
    render() {
        return(
            <div className='work-wrapper'>
                <div className='line-portfolio'>
                    <p>Portfolio</p>
                </div>
                <div className='selected-work'>
                    <h3>Selected Work</h3>
                    <div></div>
                </div>
                <ul>
                    <li>
                        <div className='proj-img' style ={ { backgroundImage:  `url(${proj1})` }}></div>
                        <div className='descp'>
                            <h3>Vmores</h3>
                            <p>A Website for Vmores, a beauty supplement brand in Australia.</p>
                            <div className='tag'>React | Headless WordPress</div>
                            <svg viewBox="0 0 20 20" width="1.5em">
                                <path d="M5 0 L15 10 L5 20"  fill="none" />
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div className='proj-img' style ={ { backgroundImage:  `url(${proj2})` }}></div>
                        <div className='descp'>
                            <h3>UGG</h3>
                            <p>Full-stack development for a diversified conglomerate </p>
                            <div className='tag'>jQuery | Node.js</div>
                            <svg viewBox="0 0 20 20" width="1.5em">
                                <path d="M5 0 L15 10 L5 20"  fill="none" />
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div className='proj-img' style ={ { backgroundImage:  `url(${proj3})` }}></div>
                        <div className='descp'>
                            <h3>UGHL</h3>
                            <p>Investor relations website for a healthcare company.</p>
                            <div className='tag'>React | Next.js | Node.js</div>
                            <svg viewBox="0 0 20 20" width="1.5em">
                                <path d="M5 0 L15 10 L5 20"  fill="none" />
                            </svg>
                        </div>
                    </li>
                     <li>
                        <div className='proj-img' style ={ { backgroundImage:  `url(${proj4})` }}></div>
                         <div className='descp'>
                             <h3>Portfolio site</h3>
                             <p>About this Website, and what makes it awesome.</p>
                             <div className='tag'>React | CRA</div>
                             <svg viewBox="0 0 20 20" width="1.5em">
                                 <path d="M5 0 L15 10 L5 20"  fill="none" />
                             </svg>
                         </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Work;