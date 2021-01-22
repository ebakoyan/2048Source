import {Component} from "react"
import {Item} from "./item/Item"
import s from './App.module.css'

export default class App extends Component {
    constructor() {
        super()
        document.addEventListener('keyup', (event) => {
            const keyName = event.key;

            switch (keyName) {
                case "ArrowUp":
                    this.up();
                    break;
                case "ArrowDown":
                    this.down();
                    break;
                case "ArrowLeft":
                    this.left();
                    break;
                case "ArrowRight":
                    this.right();
                    break;
                default:
                    return
            }
        });
    }
    state = {
        matrix: [
            [
                0, 0, 0, 0
            ],
            [
                0, 0, 0, 0
            ],
            [
                0, 0, 0, 0
            ],
            [0, 0, 0, 0]
        ]
    }

    up = () => {
        let b = this.state.matrix
        // let oldData = JSON.parse(JSON.stringify(data));
        for (let i = 0; i < 4; i++) {
            let slow = 0;
            let fast = 1;
            while (slow < 4) {
                if (fast === 4) {
                    fast = slow + 1;
                    slow++;
                    continue;
                }
                if (b[slow][i] === 0 && b[fast][i] === 0) {
                    fast++;
                } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
                    b[slow][i] = b[fast][i];
                    b[fast][i] = 0;
                    fast++;
                } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
                    fast++;
                } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
                    if (b[slow][i] === b[fast][i]) {
                        b[slow][i] = b[slow][i] + b[fast][i];
                        b[fast][i] = 0;
                        fast = slow + 1;
                        slow++;
                    } else {
                        slow++;
                        fast = slow + 1;
                    }
                }
            }
        }
        this.setState({matrix: b})
        this.addNumber();
    }
    down = () => {
        let b = this.state.matrix
        // let oldData = JSON.parse(JSON.stringify(data));
        for (let i = 3; i >= 0; i--) {
            let slow = b.length - 1;
            let fast = slow - 1;
            while (slow > 0) {
                if (fast === -1) {
                    fast = slow - 1;
                    slow--;
                    continue;
                }
                if (b[slow][i] === 0 && b[fast][i] === 0) {
                    fast--;
                } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
                    b[slow][i] = b[fast][i];
                    b[fast][i] = 0;
                    fast--;
                } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
                    fast--;
                } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
                    if (b[slow][i] === b[fast][i]) {
                        b[slow][i] = b[slow][i] + b[fast][i];
                        b[fast][i] = 0;
                        fast = slow - 1;
                        slow--;
                    } else {
                        slow--;
                        fast = slow - 1;
                    }
                }
            }
        }
        this.setState({matrix: b})
        this.addNumber()
    }
    right = () => {
        let newArray = this.state.matrix;

        for (let i = 3; i >= 0; i--) {
            let b = newArray[i];
            let slow = b.length - 1;
            let fast = slow - 1;
            while (slow > 0) {
                if (fast === -1) {
                    fast = slow - 1;
                    slow--;
                    continue;
                }
                if (b[slow] === 0 && b[fast] === 0) {
                    fast--;
                } else if (b[slow] === 0 && b[fast] !== 0) {
                    b[slow] = b[fast];
                    b[fast] = 0;
                    fast--;
                } else if (b[slow] !== 0 && b[fast] === 0) {
                    fast--;
                } else if (b[slow] !== 0 && b[fast] !== 0) {
                    if (b[slow] === b[fast]) {
                        b[slow] = b[slow] + b[fast];
                        b[fast] = 0;
                        fast = slow - 1;
                        slow--;
                    } else {
                        slow--;
                        fast = slow - 1;
                    }
                }
            }
        }
        this.setState({matrix: newArray})
        this.addNumber()
    }
    left = () => {
        let newArray = this.state.matrix;

        for (let i = 0; i < 4; i++) {
            let b = newArray[i];
            let slow = 0;
            let fast = 1;
            while (slow < 4) {
                if (fast === 4) {
                    fast = slow + 1;
                    slow++;
                    continue;
                }
                if (b[slow] === 0 && b[fast] === 0) {
                    fast++;
                } else if (b[slow] === 0 && b[fast] !== 0) {
                    b[slow] = b[fast];
                    b[fast] = 0;
                    fast++;
                } else if (b[slow] !== 0 && b[fast] === 0) {
                    fast++;
                } else if (b[slow] !== 0 && b[fast] !== 0) {
                    if (b[slow] === b[fast]) {
                        b[slow] = b[slow] + b[fast];
                        b[fast] = 0;
                        fast = slow + 1;
                        slow++;
                    } else {
                        slow++;
                        fast = slow + 1;
                    }
                }
            }
        }
        this.setState({matrix: newArray})
        this.addNumber()
    }
    addNumber = () => {
        let index0 = [];
        let a = this.state.matrix;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (a[i][j] == 0) {
                    index0.push([i, j])
                }
            }
        }
        let random = index0[Math.floor(Math.random() * index0.length)];
        a[random[0]][random[1]] = 2;
        this.setState({matrix: a})

    }
    componentDidMount() {
        this.addNumber()
    }
    render() {

        let list = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let key = `k${i + 1}${j + 1}`
                list.push(<Item number={this.state.matrix[i][j]} key={key}/>)
            }
        }
        return (
            <div cllassName={s.block}>
                <div className={s.container}>
                    {list}
                </div>
                <div className={s.control}>
                    <i onClick={this.up} className="fas fa-arrow-circle-up fa-3x"></i>
                    <div>
                        <i onClick={this.left} className="fas fa-arrow-circle-left fa-3x"></i>
                        <i onClick={this.down} className="fas fa-arrow-circle-down fa-3x"></i>
                        <i onClick={this.right} className="fas fa-arrow-circle-right fa-3x"></i>
                    </div>
                </div>
            </div>
        )
    }

}