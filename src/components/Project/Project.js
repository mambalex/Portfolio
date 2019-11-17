import React from 'react';
import "./Project.scss"

const Project = () => (
    <main className='Project'>
        <section className='proj-nav'>
            <ul>
                <li>
                    <a>
                        <svg className='left-arrow' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512"
                             height="1em" width="1em">
                            <path
                                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                        </svg>
                        <span>AMIR</span>
                    </a>
                </li>
                <li >
                    <a>
                        <span>Vauxlab 2017</span>
                        <svg className='right-arrow' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em">
                             <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                </a></li>
            </ul>
        </section>
        <section className='proj-wrapper'>
            <div className='work-detail'>
                <div className='title-tag'>
                    <div className='title'>StaffTraveler</div>
                    <div className='tag'>freelance</div>
                </div>
                <div className='date'>Sep 2017 to Aug 2018</div>
            </div>
            <div className='text-link-tech'>
                <div className='text'>
                    <p>Airline employees are able to travel with other airlines either for free or a small fee if seats are available. This is known as flying non-revenue. But since airline computer systems all operating individually, it takes a lot of effort to request and keep track of the current availability (loads) for the flights you are interested in.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='link-tech'>
                    <h3>Link</h3>
                    <p>StaffTraveler</p>
                    <h3>Tech Stack</h3>
                    <ul>
                        <li>React</li>
                        <li>Node.Js</li>
                    </ul>
                </div>
               </div>

        </section>
    </main>
)

export default Project;