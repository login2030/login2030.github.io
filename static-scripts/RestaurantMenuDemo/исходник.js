var laoModxCalc = {};
laoModxCalc.error = 'Извините, произошла ошибка! Перезагрузите страницу и попробуйте еще раз.';
laoModxCalc.notice = 'Выберите товар!';
laoModxCalc.sucAdmin = '<p class="lao_success">Ваша заявка принята!</p>';
laoModxCalc.sucUser = '<p class="lao_success">Вам отправлено письмо!</p>';
/* Тарифы калькулятора */
laoModxCalc.laoMenu = [
	[
		'Салаты',
		[
			{
				name: 'Цезарь с курицей',
				yield: '250 гр.',
				price: 540
			},
			{
				name: 'Цезарь с креветками  ',
				yield: '270 гр.',
				price: 690
			},
			{
				name: 'Капризе',
				yield: '250 гр.',
				price: 760
			},
			{
				name: 'Теплый салат с куриной печенью',
				yield: '250 гр.',
				price: 780
			},
			{
				name: 'Легкий салат с тунцом',
				yield: '255 гр.',
				price: 920
			},
		]
	],
	[
		'Горячие блюда из рыбы',
		[
			{
				name: 'Дорадо',
				yield: '350 гр.',
				price: 1400
			},
			{
				name: 'Семга «Шампань»',
				yield: '250 гр.',
				price: 1200
			},
			{
				name: 'Тигровые креветки  ',
				yield: '200 гр.',
				price: 1100
			}
		]
	]
];
/* .Тарифы калькулятора */
	

/*------------------------------------------*/
/*-----------  НЕ ПРАВИТЬ  -----------------*/
/*------------------------------------------*/
	
/* Логика (не трогать!!!) */
$(function($) {
	var laoCalc = {};
	var lenMemu = {};
	var i = 0;
	var j = 0;
	var k = 0;
	var res = '';
	var amount = {};
	var output = {};
	var result = 0;
	var cachVal = 0;
	var maxVal = 99;

	laoCalc = $('#lao_calc');
	lenMemu = laoModxCalc.laoMenu.length;

	for (i = 0; i < lenMemu; i++) {
		res += '<tr>';
		res += '<td colspan="4" class="item_header">' + laoModxCalc.laoMenu[i][0] + '</td>';
		res += '</tr>';
		for (j = 0; j < laoModxCalc.laoMenu[i][1].length; j++) {
			res += '<tr>';
			res += '<td><p>' + laoModxCalc.laoMenu[i][1][j].name + '</p></td>';
			res += '<td>' + laoModxCalc.laoMenu[i][1][j].yield + '</td>';
			res += '<td class="price">' + laoModxCalc.laoMenu[i][1][j].price + '</td>';
			res += '<td><div class="counter"><div class="minus-btn">–</div><input type="text" class="amount" value="0"><div class="plus-btn">+</div></div></td>';
			res += '</tr>';
		}
	}
	// Пушим таблицу
	laoCalc.find('table').append(res);

	amount = laoCalc.find('input.amount');
	output = laoCalc.find('#lao_output_res em');

	// Клики на + и -
	laoCalc.click(function(e) {
		var clicked = $(e.target);
		var input = clicked.parent().find('input.amount');
		var check = clicked.parent().parent().parent().find('td p');
		var val = Number(input.val());
		// + 
		if (clicked.hasClass('plus-btn')) {
			if (val < 0) {
				input.val(1);
				result = setSumValue(amount, output);
				return false;
			} else if (val >= maxVal) {
				input.val(maxVal);
				return false;
			} else {
				val++;
				input.val(val);
				check.addClass('check');
				result = setSumValue(amount, output);
			}
		}
		// - 
		if (clicked.hasClass('minus-btn')) {
			val--;
			if (val <= 1) {
				input.val(0);
				check.removeClass('check');
				result = setSumValue(amount, output);
				return false;
			} else if (val > maxVal) {
				input.val(maxVal);
				return false;
			} else {
				input.val(val);
				result = setSumValue(amount, output);
			}
		}
	});

	// Потеря фокуса
	amount.blur(function() {
		var $this = $(this);
		var check = $this.parent().parent().parent().find('td p');
		var $val = $this.val();
		if ($val > 0 && $val < maxVal) {
			check.addClass('check');
			result = setSumValue(amount, output);
		} else if ($val === '') {
			$this.val(cachVal);
			return false;
		} else if ($val > maxVal) {
			$this.val(maxVal);
			return false;
		} else {
			check.removeClass('check');
			$this.val(0);
			result = setSumValue(amount, output);
			return false;
		}
	});
	// Фокус
	amount.focus(function() {
		var $this = $(this);
		cachVal = $this.val();
		$this.val('');
	});
	
	// Отправка заказа
	formValidate($('#form_send_order_admin'), '', '', function(form, name, res) {
		var checks = laoCalc.find('.check');
		var resVal = [];
		checks.each(function(i, elem) {
			var $this = $(elem);
			resVal.push([ $this.text(), $this.parent().parent().find('input.amount').val() ]);
		});
		$.ajax({
			type: 'POST',
			url: "email.php",
			cache: false,
			data: {
				type: 'admin',
				name: res[0],
				tel: res[1],
				guest: res[2],
				comment: res[3],
				order: JSON.stringify(resVal),
				sum: output.text()
			},
			success: function(data) {
				if (data === 'false') {
					alert(laoModxCalc.notice);
					return false;
				}
				if (data === "1") {
					form.html(laoModxCalc.sucAdmin);
				}
			},
			error: function() {
				alert(laoModxCalc.error);
			}
		});
	});
	formValidate($('#form_send_order_me'), '', '', function(form, name, res) {
		var checks = laoCalc.find('.check');
		var resVal = [];
		checks.each(function(i, elem) {
			var $this = $(elem);
			resVal.push([ $this.text(), $this.parent().parent().find('input.amount').val() ]);
		});
		$.ajax({
			type: 'POST',
			url: "email.php",
			cache: false,
			data: {
				type: res[0],
				order: JSON.stringify(resVal),
				sum: output.text()
			},
			success: function(data) {
				if (data === 'false') {
					alert(laoModxCalc.notice);
					return false;
				}
				if (data === "1") {
					form.html(laoModxCalc.sucUser);
				}
			},
			error: function() {
				alert(laoModxCalc.error);
			}
		});
	});
	
}); /* $ */

function setSumValue(inputs, output) {
	var res = 0;
	inputs.each(function() {
		var $this = $(this);
		res += $this.parent().parent().parent().find('td.price').text() * $this.val();
	});
	output.text(res);
}

/* Валидация форм
* form - $ форма которую проверяем
* name - Str условное имя формы для статистики
* message - Str сообщение об ошибке
* func - Function анонимная функция, которая выполнится после успешного заполнения формы
* func(form, name, res);
* == Всем полям которые хотим собрать нужно присвоить класс "valid", необязательным полям присваиваем класс "not" ==
*/
function formValidate(form, name, message, func) {
	var inputInvalidVal = '';
	if (message === '') {
		message = 'Это поле обязательное';
	} else {
		message = message;
	}
	form.find('button').click(function () {
		event.preventDefault();
		var $button, v, res, val;
		res = [];
		v = form.find('.valid');
		$button = $(this);
		
		v.focus(function () {
			form.find('.error_bg').val(inputInvalidVal);
			$button.removeAttr('disabled');
			v.removeClass('error_bg');
		});
		
		for (var i = 0; i < v.length; i++) {
			val = form.find(v[i]);
			if (val.val() === '' && !val.hasClass('not')) {
				outputErrorMsg(val, $button, message);
				return false;
			}
			if (val.attr('type') === 'email' && val.val().indexOf('@') === -1) {
				outputErrorMsg(val, $button, 'login@mail.com');
				return false;
			}
			
			res.push(val.val()) ;
		}
		
		func(form, name, res);
	});
	/* Функция вывода ошибки при определенных условиях
	* val - $ поле которое в данный момент проверяется в цикле
	* button - $ кнопка формы, для деактивации при ошибке
	* msg - Str сообщение с ошибкой
	*/
	function outputErrorMsg(val, button, msg) {
		inputInvalidVal = val.val();
		val.addClass('error_bg');
		val.val(msg);
		button.attr('disabled', 'disabled');
	}
}