import styles from "./App.module.css";
import { useState } from "react";

const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const App = () => {
	const [operand1, setOperand1] = useState("0");
	const [operator, setOperator] = useState("");
	const [operand2, setOperand2] = useState("");
	const displayResult = operand1 + operator + operand2;
	const [isResult, setIsResult] = useState(false);

	const onClick = (arg) => {
		if (operand1 === "0") {
			setOperand1(arg);
		} else if (operator) {
			setOperand2((prevState) => prevState + arg);
		} else {
			setOperand1((prevState) => prevState + arg);
			setIsResult(false);
		}
	};

	const clickOperators = (arg) => {
		if (operand1 !== "0") {
			setOperator(arg);
		}
	};

	const clickResult = () => {
		if (operand2 !== "") {
			setIsResult(true);
			switch (operator) {
				case "+":
					setOperand1(Number(operand1) + Number(operand2));
					setOperator("");
					setOperand2("");
					break;
				case "-":
					setOperand1(Number(operand1) - Number(operand2));
					setOperator("");
					setOperand2("");
					break;
				default:
					break;
			}
		}
	};

	const clickReset = () => {
		setOperand1("0");
		setOperator("");
		setOperand2("");
		setIsResult(false);
	};

	return (
		<div className={styles.app}>
			<h1>Калькулятор</h1>
			<div className={isResult ? styles.isResult : styles.display}>
				{displayResult}
			</div>
			<div className={styles.buttonsContainer}>
				{NUMS.map((item, index) => (
					<button
						onClick={() => onClick(item)}
						key={index}
						className={styles.buttonNumner}
					>
						{item}
					</button>
				))}
			</div>

			<div className={styles.buttonsContainer}>
				<button
					className={styles.buttonOperator}
					onClick={() => clickOperators("+")}
				>
					+
				</button>
				<button
					className={styles.buttonOperator}
					onClick={() => clickOperators("-")}
				>
					-
				</button>
				<button
					className={styles.buttonOperator}
					onClick={() => clickResult()}
				>
					=
				</button>
				<button
					className={styles.buttonOperator}
					onClick={() => clickReset()}
				>
					C
				</button>
			</div>
		</div>
	);
};
