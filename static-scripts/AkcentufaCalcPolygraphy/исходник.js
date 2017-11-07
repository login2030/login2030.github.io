var polCalc = $('#polygraphy_calc'),
calcWrapper = $(document.querySelector('.polygraphy_calc_container')),
calcButton = $('#calc_button'),
resCalc = $('#res_calc');
// Калькулятор
var selectSet = {
arrowButtonMarkup: '<b class="button"></b>',
disableOnMobile: false,
};
// главный селект в калькуляторе
$('#select_poly_calc').selectric(selectSet).on('change', function (el) {
// Переключение калькуляторов
var val = $(this).val(),
	active = calcWrapper.find('.calc_type.active');
calcWrapper.attr('data-active-calc', val);
calcButton.attr('data-active-calc', val);
if (calcWrapper.find(`.${val}`).hasClass('active')) {
	return false;
}
resCalc.text('');
active.fadeOut(100, function () {
	var che = calcWrapper.find(`.${val}`);
	che.fadeIn(300).addClass('active');
}).removeClass('active');
});
// остальные селекты
polCalc.find('.selectric_select').selectric(selectSet);

// Толька цифры в поля
var inputCalc = calcWrapper.find('.input_calc');
inputCalc.bind("change keyup input click", function () {
if (this.value.match(/[^0-9]/g)) {
	this.value = this.value.replace(/[^0-9]/g, '');
}
});

// Калькулятр - логика
calcButton.click(function (e) {
var $this = $(this),
	active = calcWrapper.find('.calc_type.active');
var print = parseFloat(active.find('.print').val()),
	format = parseFloat(active.find('.format').val()),
	paper = parseFloat(active.find('.paper').val()),
	laminate = parseFloat(active.find('.laminate').val()),
	count = parseInt(active.find('.input_calc').val(), 10),
	percent = parseInt(active.attr('data-percent')),
	percent2 = parseInt(active.attr('data-percent2')),
	coefficient = 1.15;

// Функция изменения процента в зависимости от выбранных параметров
var setPercent = function (format, count) {
	switch (format, count) {
		case 1, 500 :
			percent = percent2;
			break;
		case 2, 1000 :
			percent = percent2;
			break;
		case 4, 2000 :
			percent = percent2;
			break;
		case 8, 4000 :
			percent = percent2;
			break;
		case 16, 8000 :
			percent = percent2;
			break;
		default:
			percent = percent;
			break;
	}
};

var res;

// Логика калькуляторов
if (active.hasClass('leaflet')) {
	setPercent(format, count);
	// Расчет по формуле
	res = ((paper + print) * coefficient) / format;
	// Округлили до 10 го порядка
	res = Math.round(res * 100) / 100;
	// Умножили на количество
	res = res * count;
	// Округлили до 10 го порядка
	res = Math.round(res * 100) / 100;
	// Прибавляем процент
	res = (res / 100) * percent;
	// Округлили до 10 го порядка
	res = Math.round(res * 100) / 100;
}
if (active.hasClass('card')) {
	paper = 5.18;
	setPercent(format, count);
	// По формуле
	res = ((paper + print) * coefficient) / 24;
	res = Math.round(res * 100) / 100;
	// Умножаем на кол-во
	res = res * count;
	res = Math.round(res * 100) / 100;
	// Прибавляем процент
	res = (res / 100) * percent;
	res = Math.round(res * 100) / 100;
}
if (active.hasClass('calendar')) {
	paper = 5.18;
	print = 6.00;
	setPercent(format, count);
	// По формуле
	res = ((paper + print + laminate) * coefficient) / 16;
	res = Math.round(res * 100) / 100;
	// Умножаем на кол-во
	res = res * count;
	res = Math.round(res * 100) / 100;
	// Прибавляем процент
	res = (res / 100) * percent;
	res = Math.round(res * 100) / 100;
}
if (active.hasClass('booklet')) {
	format = 2;
	print = 6.00;
	setPercent(format, count);
	// По формуле
	res = ((paper + print) * coefficient) / format;
	// Округлили до 10 го порядка
	res = Math.round(res * 100) / 100;
	// Умножили на количество
	res = res * count;
	// Округлили до 10 го порядка
	res = Math.round(res * 100) / 100;
	// Прибавляем процент
	res = (res / 100) * percent;
	// Округлили до 10 го порядка
	res = Math.round(res * 100) / 100;
}
if (active.hasClass('letter')) {
	format = 2;
	print = 3.00;
	setPercent(format, count);
	// По формуле
	res = ((paper + print) * coefficient) / format;
	// Округлили до 10 го порядка
	res = Math.round(res * 100) / 100;
	// Умножили на количество
	res = res * count;
	// Округлили до 10 го порядка
	res = Math.round(res * 100) / 100;
	// Прибавляем процент
	res = (res / 100) * percent;
	// Округлили до 10 го порядка
	res = Math.round(res * 100) / 100;
}

if (res.toString() === 'NaN' || res === 0) {
	resCalc.html('<em class="red">Введите кол-во</em>');
	active.find('.input_calc').val('').focus();
} else {
	resCalc.text(`${res} руб`);
}
});

// Добавим title для option в selectric
calcWrapper.find('.selectric-items li').each(function (i, el) {
var $el = $(el);
$el.attr('title', $el.text());
});

var mSelect = $('#js-multiple-select');
mSelect.multipleSelect({
placeholder: 'Выберите товар',
selectAll: false,
minimumCountSelected: 5,
allSelected: 'Выбраны все услуги',
countSelected: 'выбрано #  из %',
onClick: function(e) {
	$('#js-order-form').find('.ms-choice').removeClass('error_bg');
}
});