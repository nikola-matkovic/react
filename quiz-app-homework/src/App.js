import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Šta je react?',
			answerOptions: [
				{ answerText: 'JavaScript framework', isCorrect: true },
				{ answerText: 'Javascript Prommise', isCorrect: false },
				{ answerText: 'Javascript Funkcija', isCorrect: false },
				{ answerText: 'Novi način deklaracije varijabli', isCorrect: false },
			],
		},
		{
			questionText: 'Šta omogućava korišćenje state-a bez klase?',
			answerOptions: [
				{ answerText: 'Niz', isCorrect: false },
				{ answerText: 'hooks', isCorrect: true },
				{ answerText: 'react objekat', isCorrect: false },
				{ answerText: 'Improt react doma', isCorrect: false },
			],
		},
		{
			questionText: 'React dokument je podeljen na?',
			answerOptions: [
				{ answerText: 'elemente', isCorrect: false },
				{ answerText: 'Komponente', isCorrect: true },
				{ answerText: 'tagove', isCorrect: false },
				{ answerText: 'objekte', isCorrect: false },
			],
		},
		{
			questionText: 'Koliko postoji stanja u kom komponenta može biti ?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '4', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Imate {score} tačnih odgovora od mogućih {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
