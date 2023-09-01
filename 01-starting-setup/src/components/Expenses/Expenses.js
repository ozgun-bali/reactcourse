import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
	const [selectedYear, setSelectedYear] = useState("2020");
	const filterChangeHandler = (year) => {
		setSelectedYear(year);
	};
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					onFilterChange={filterChangeHandler}
					selected={selectedYear}
				/>
				{props.expenses.map((expense) => (
					<ExpenseItem
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
				
			</Card>
		</div>
	);
};
export default Expenses;
