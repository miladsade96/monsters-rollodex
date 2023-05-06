import {Component} from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [
				{name: "Linda", id: "00001"},
				{name: "Frank", id: "00002"},
				{name: "Jacky", id: "00003"},
				{name: "Andrei", id: "00004"},
			],
		};
	}
	render() {
		return (
			<div className="App">
				{this.state.monsters.map(monster => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
