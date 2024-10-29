import { useState } from "react";
import "./App.css";
import EmployeeCard from "./components/EmployeeCard";

const sampleEmployee = {
	name: {
		first: "Bob",
		last: "Maurice",
	},
	email: "bob.maurice@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/30.jpg",
	},
};

function App() {
	const [employee, setEmployee] = useState(sampleEmployee);
	const getEmployee = () => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};
	return (
		<div className="App">
			<EmployeeCard employee={sampleEmployee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}
export default App;
