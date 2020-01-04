import React, { Component } from 'react';
import styled from 'styled-components';
import { setMouseMove } from '../../../slide-deck/Deck/slides-methods';

const Container = styled.div`
    position: absolute;
    top: 20px;
    right: 15px;
    z-index: 10;
    display: block;
    transition: opacity 1500ms;
    opacity: 1;
`;

const Switch = styled.button`
    background-color: rgb(184, 184, 184, 0.5);
    padding: 3px 4px 3px 4px;
    display: flex;
    align-items: center; 
    justify-content: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 8px;
`;

class ScreenSize extends Component{
    constructor(props){
        super(props);

        this.timer = null;

        this.state = {
            isFullScreen: false,
            isVisible: false,
        };

        this.setMouseMove = setMouseMove.bind(this);
        this.toggleScreen = this.toggleScreen.bind(this);
        this.OpenFullScreen = this.OpenFullScreen.bind(this);
        this.CloseFullScreen = this.CloseFullScreen.bind(this);
    }

    componentDidMount(){
        document.addEventListener('click', () => this.setMouseMove());
        window.addEventListener('mousemove', () => this.setMouseMove());
        window.addEventListener('resize', () => {
            if(window.innerHeight !== screen.height) {
                this.setState({ isFullScreen: false }); 
            }
        });
    }

    OpenFullScreen() {
        this.setState({ isFullScreen: true })
            const screen = document.documentElement;
            if (screen.requestFullscreen) {
            screen.requestFullscreen();
            } else if (screen.mozRequestFullScreen) {
            screen.mozRequestFullScreen();
            } else if (screen.webkitRequestFullscreen) {
            screen.webkitRequestFullscreen();
            } else if (screen.msRequestFullscreen) {
            screen.msRequestFullscreen();
        }
    }

    CloseFullScreen() {
        this.setState({ isFullScreen: false });
        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) { 
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) { 
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
    }

    toggleScreen(e) {
        e.stopPropagation();
        if(!this.state.isFullScreen){
            this.OpenFullScreen();
        }
        else{
            this.CloseFullScreen();
        }
      }

    render(){
        const toggleSizeButton = {
            opacity: this.state.isVisible ? '1': '0',
               };

        const changeCursor = {
                cursor: this.state.isVisible? 'pointer' : 'none',
            };

        return(
            <Container id="container" style={toggleSizeButton}>
                <Switch 
                    style = {changeCursor} 
                    disabled={!this.state.isVisible} 
                    onClick={this.toggleScreen}
                >
                    <img src={ this.state.isFullScreen ? "/icons/light/small_size.svg" : "/icons/light/full_size.svg"} />
                </Switch>
            </Container>
        );
    }
}

export default ScreenSize;