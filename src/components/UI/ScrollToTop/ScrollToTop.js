import React, { Component } from 'react';
import classnames from "classnames";
import arrow from 'assets/images/arrow-scroll-up.png';
import './ScrollToTop.scss';

class ScrollToTop extends Component{
    state = {
        show : window.pageYOffset > 540
    };

    clickHandler = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };
    scrollHandler = () => {
        const currentPageY = window.pageYOffset;
        this.setState({ show: currentPageY > 540})
    };

    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
    }

    componentWillMount() {
        window.removeEventListener("scroll", this.scrollHandler);
    }

    render() {
        return(
            <div className = {
                classnames('ScrollToTop', {"show": this.state.show})
            }
                 style ={ { backgroundImage:  `url(${arrow})` }}
                 onClick={this.clickHandler}
            />
        )
    }
}

export default ScrollToTop;