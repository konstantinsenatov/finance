/* прокрутка при клике */
$('.click').on('click', function() {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 300,
		easing: "linear"
	});

	return false;
});

$(".calculator__select").select2({
	templateResult: formatData,
	templateSelection: formatData
});
function formatData (data) {
	if (!data.id) { return data.text; }
	var $result= $(
		'<span><img src=" https://hudson8811.github.io/finance/public/images/calculator/'+data.element.value+'.svg"/> ' + data.text + '</span>'
	);
	return $result;
};

$(document).ready(function(){
	$('.diagram__item').click(function(){
		$('.diagram__item').removeClass('active');
		$(this).addClass('active');
	});
	$('.btn-open-popap').click(function(){
		$('.popap').addClass('active');
	});
	$('.popap__back').click(function(){
		$('.popap').removeClass('active');
	});
});

$(".calculator__input input").on('keyup mouseup', function () {
	var calculator__input = $(".calculator__input input").val();
	//1 месяц
	var amount1 = +calculator__input + ((calculator__input * 0.2) / 12)
	//1 год
	var amount2 = +calculator__input + (calculator__input * 0.2)
	//2 года
	var amount3 = +calculator__input + ((calculator__input * 0.2) * 2)
	//3 года
	var amount4 = +calculator__input + ((calculator__input * 0.2) * 3)

	$(".diargam__amount1").text(amount1);
	$(".diargam__amount2").text(amount2);
	$(".diargam__amount3").text(amount3);
	$(".diargam__amount4").text(amount4);
});








document.addEventListener('DOMContentLoaded', function () {
	const hero__form = document.querySelector('.hero__form');
	hero__form.addEventListener('submit', formsend);
	async function formsend(e) {
		e.preventDefault();

		let formDatahero = new FormData(hero__form);

		hero__form.classList.add('_sending');

		let responsehero = await fetch('sendhero.php', {
			method: 'POST',
			body: formDatahero
		});

		if (responsehero.ok) {
			let result = await responsehero.json();
			alert(result.message);
			hero__form.reset();
			hero__form.classList.remove('_sending');
		} else {
			alert("Ошибка");
			hero__form.classList.remove('_sending');
		}
	}
})
document.addEventListener('DOMContentLoaded', function () {
	const order__form = document.querySelector('.order__form');
	order__form.addEventListener('submit', formsend);
	async function formsend(e) {
		e.preventDefault();

		let formDataorder = new FormData(order__form);

		order__form.classList.add('_sending');

		let responseorder = await fetch('sendorder.php', {
			method: 'POST',
			body: formDataorder
		});

		if (responseorder.ok) {
			let result = await responseorder.json();
			alert(result.message);
			order__form.reset();
			order__form.classList.remove('_sending');
		} else {
			alert("Ошибка");
			order__form.classList.remove('_sending');
		}
	}
})
document.addEventListener('DOMContentLoaded', function () {
	const popap__form = document.querySelector('.popap__form');
	popap__form.addEventListener('submit', formsend);
	async function formsend(e) {
		e.preventDefault();

		let formDatapopap = new FormData(popap__form);

		popap__form.classList.add('_sending');

		let responsepopap = await fetch('sendorder.php', {
			method: 'POST',
			body: formDatapopap
		});

		if (responsepopap.ok) {
			let result = await responsepopap.json();
			alert(result.message);
			popap__form.reset();
			popap__form.classList.remove('_sending');
		} else {
			alert("Ошибка");
			popap__form.classList.remove('_sending');
		}
	}
})