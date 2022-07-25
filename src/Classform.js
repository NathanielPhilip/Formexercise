import React, {Component} from "react";

class Classform extends Component {
	constructor(props) {
		super();
		this.state = {
			students: [
				{ name: "joe", email: "joe@gmail.com", gen: "22" },
				{ name: "dela", email: "dela@gmail.com", gen: "4" },
			],
		};
	}

	HandleNameChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
		// console.log(this.state.name);
		// console.log(this.state.email);
		// console.log(this.state.gen);
	};
	HandleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			students: [
				...this.state.students,
				{ name: this.state.name, email: this.state.email, gen: this.state.gen },
			],
		});
	};
	render() {
		return (
			<div style={{ margin: "40px" }}>
				<h1>Register Here</h1>
				<form>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={this.state.students.name}
						onChange={this.HandleNameChange}
					/>
					<br />
					<label>Email:</label>
					<input
						type="text"
						name="email"
						value={this.state.students.email}
						onChange={this.HandleNameChange}
					/>
					<br />
					<label>Gen:</label>
					<input
						type="text"
						name="gen"
						value={this.state.students.gen}
						onChange={this.HandleNameChange}
					/>
					<br />
					<button onClick={this.HandleSubmit} type="submit">
						Submit
					</button>
				</form>
				{this.state.students.map((item, index) => {
					return (
						<div key={index}>
							<h1>name:{item.name}</h1>
							<h1>email:{item.email}</h1>
							<h1>gen:{item.gen}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}
export default Classform;