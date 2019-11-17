import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import classnames from "classnames";

class Navbar extends Component {
    state = {
        home: true,
        skills: false,
        work: false,
        prevScrollpos: window.pageYOffset,
        visible: true,
        boxShadow: false
    };

    clickHandler = (tab) => {
        if(!tab){return}
        var newState = {
            home: false,
            skills: false,
            work: false
        };
        newState[tab] = true;
        this.setState(newState)
    };

    // resizeWindowHandler = () => {
    //     var transparent;
    //     if( window.innerWidth <= 576){
    //         transparent = false
    //     }else{
    //         transparent = window.pageYOffset < 70;
    //     };
    //     this.setState({transparent});
    // };

    scrollHandler = () => {
        const currentScrollPos = window.pageYOffset;
        var visible = this.state.prevScrollpos > currentScrollPos;
        const boxShadow = window.innerWidth > 576 && currentScrollPos > 20;
        if(window.innerWidth <= 576){
            visible=true
        }
        this.setState({
            prevScrollpos : currentScrollPos,
            visible,
            boxShadow
        });
    };

    componentDidMount() {
        const currentTab = window.location.pathname.split('/')[1];
        this.clickHandler(currentTab);
        window.addEventListener("scroll", this.scrollHandler);
        // window.addEventListener("resize", this.resizeWindowHandler);
    }

    componentWillMount() {
        window.removeEventListener("scroll", this.scrollHandler);
        // window.removeEventListener("resize", this.resizeWindowHandler);
    }

    render() {
        return(
        <div className ={
            classnames(
                "Nav",
                {"Nav-hidden": !this.state.visible},
                {"transparent": this.state.transparent},
                {"Nav-box-shadow": this.state.boxShadow})
        }>
            <Link to='/' className='logo'>AlexLogo</Link>
            <nav>
                <Link  to="/" className={classnames("nav-item", {"active": this.state.home})} onClick={()=>this.clickHandler('home')}>Home</Link>
                <Link  to="/skills" className={classnames("nav-item", {"active": this.state.skills})} onClick={()=>this.clickHandler('skills')}>Skills</Link>
                <Link  to="/work" className={classnames("nav-item", {"active": this.state.work})} onClick={()=>this.clickHandler('work')}>Work</Link>
            </nav>
        </div>
    )}
}


export default Navbar;