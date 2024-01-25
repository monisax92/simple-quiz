const form = document.querySelector('form');
const correctAnswers = ['A', 'B', 'B'];

form.addEventListener('submit', e => {
	e.preventDefault();
	userAnswers = [form.q1.value, form.q2.value, form.q3.value];

	updateResult(countScore(userAnswers));
});

function countScore(userAns) {
	let score = 0;
	const points1Q = 100 / correctAnswers.length;

	correctAnswers.forEach((ans, index) => {
		if (ans === userAns[index]) score += points1Q;
	});

	return Math.round(score);
}

function updateResult(score) {
	const resultDiv = document.querySelector('.result');
	const resultPercent = resultDiv.querySelector('span');

	//go to top and unhide result
	resultDiv.classList.remove('d-none');
	scrollTo(0, 0);

	//animate result from 0 to score
	let showNr = 0;
	let interval = setInterval(() => {
		resultPercent.textContent = showNr;
		if (showNr < score) showNr++;
		else clearInterval(interval);
	}, 10);
}
