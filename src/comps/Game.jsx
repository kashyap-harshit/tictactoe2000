import React, { Component } from 'react'
import Block from './Block'
export class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // score: [null, null, null],
            gameover: false,
            marginTop: "0px",
            marginLeft: "0px",
            winnerBlock: null,
            wPosition: null,
            user: 1,
            mainArr: [[null, null, null],
            [null, null, null],
            [null, null, null]]
        }
    }
    arrChanger = (row, col) => {
        if (!this.state.gameover) {

            if (this.state.mainArr[row][col] === null) {
                let dup = [...this.state.mainArr]
                dup[row][col] = this.state.user

                this.setState({
                    mainArr: dup,
                    user: (this.state.user === 1 ? 0 : 1)
                })
            }
            else { }
            // console.log(this.state.mainArr);
        }
    }

    arr0maker = () => {
        this.setState({
            mainArr: [[null, null, null],
            [null, null, null],
            [null, null, null]]
        })
    }
    reGame = () => {
        setTimeout(() => {
            this.props.winnerChanger(null)
            this.arr0maker()
            this.setState({
                gameover: false,
                marginTop: "0px",
                marginLeft: "0px",
                winnerBlock: null,
                wPosition: null
            })
        }, 3000);

    }
    diagChecker = (i,j)=>{
        if ((this.state.mainArr[0][i] === this.state.mainArr[1][1]) && (this.state.mainArr[1][1] === this.state.mainArr[2][j]) && (this.state.mainArr[2][j] === this.state.mainArr[0][i])) {
            if (this.state.mainArr[0][i] !== null) {
                console.log("winner is ", this.state.mainArr[0][i]);
                this.setState({
                    wPosition: "diagonal-1",
                    gameover: true
                })

                this.props.winnerChanger(this.state.mainArr[0][i])
                this.reGame()
                
            }
        }
    }
    componentDidUpdate = (preProp, preState, snapshot) => {
        if (preProp.winner !== this.props.winner) {
            console.log("winner prop", this.props.winner)
        }
        if (preState.wPosition !== this.state.wPosition) {
            console.log(this.state.wPosition);
            if (this.state.wPosition === "horizontal") {

                if (this.state.winnerBlock === 0) {
                    this.setState({
                        marginTop: "65px"
                    })
                }
                if (this.state.winnerBlock === 1) {
                    this.setState({
                        marginTop: "210px"
                    })
                }
                if (this.state.winnerBlock === 2) {
                    this.setState({
                        marginTop: "355px"
                    })
                }
            }
            if (this.state.wPosition === "vertical") {

                if (this.state.winnerBlock === 0) {
                    this.setState({
                        marginLeft: "70px"
                    })
                }
                if (this.state.winnerBlock === 1) {
                    this.setState({
                        marginLeft: "215px"
                    })
                }
                if (this.state.winnerBlock === 2) {
                    this.setState({
                        marginLeft: "360px"
                    })
                }
            }
        }

        if (preState.mainArr !== this.state.mainArr) {

            for (let i = 0; i < 3; i++) { //this is the logic for checking the winner horizontally

                if ((this.state.mainArr[i][0] === this.state.mainArr[i][1]) && (this.state.mainArr[i][1] === this.state.mainArr[i][2]) && (this.state.mainArr[i][2] === this.state.mainArr[i][0])) {
                    if (this.state.mainArr[i][0] !== null) {
                        console.log("winner is ", this.state.mainArr[i][0]);
                        this.setState({
                            wPosition: "horizontal",
                            winnerBlock: i,
                            gameover: true
                        })

                        this.props.winnerChanger(this.state.mainArr[i][0])
                        this.reGame()
                        break
                    }
                }

            }
            for (let i = 0; i < 3; i++) { //this is the logic for checking the winner vertically

                if ((this.state.mainArr[0][i] === this.state.mainArr[1][i]) && (this.state.mainArr[1][i] === this.state.mainArr[2][i]) && (this.state.mainArr[2][i] === this.state.mainArr[0][i])) {
                    if (this.state.mainArr[0][i] !== null) {
                        console.log("winner is ", this.state.mainArr[0][i]);
                        this.setState({
                            wPosition: "vertical",
                            winnerBlock: i,
                            gameover: true
                        })

                        this.props.winnerChanger(this.state.mainArr[0][i])
                        this.reGame()
                        break
                    }
                }

            }
            //this is the logic for checking the winner diagonally 1

            this.diagChecker(0, 2)

            // checking for diagonal winner 2
            this.diagChecker(2, 0)
        }

    }
    render() {
        return (
            <div className='game'>

                {this.state.mainArr.map((e, i) => {
                    return e.map((el, ind) => {
                        return <div key={[i, ind]} onClick={() => this.arrChanger(i, ind)} ><Block row={i} col={ind} val={el} key={[i, ind]} /></div>
                    })
                })}
                <div style={{ marginTop: this.state.marginTop }} className={`win-line-horz ${this.state.wPosition === "horizontal" ? "visible web-width" : ""}`}></div>
                <div style={{ marginLeft: this.state.marginLeft }} className={`win-line-vert ${this.state.wPosition === "vertical" ? "visible web-height" : ""}`}></div>
                <div  className={`win-line win-line-diag-1 ${this.state.wPosition === "diagonal-1" ? "visible web-width" : ""}`}></div>
                <div  className={`win-line win-line-diag-2 ${this.state.wPosition === "diagonal-2" ? "visible web-height" : ""}`}></div>
            </div>
        )
    }
}

export default Game
