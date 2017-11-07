// Settings
var laoWPCalc = {};

// Common var
laoWPCalc.cash = 'EUR';
laoWPCalc.valuta = laoWPCalc.cash + '/месяц ,';
laoWPCalc.setting = 'EUR установка.';
laoWPCalc.on = 'включено';
laoWPCalc.off = '';
laoWPCalc.speed1 = 'скорость ограничена';
laoWPCalc.speed2 = 'скорость не ограничена';
laoWPCalc.speed3 = 'полная скорость';

/* параметры в массивах
   - name - название тарифа
   - speed - Скорость
   - priceMes - цена в месяц
   - valuta - шаблон валюты
   - priceSet - цена установки
   - setVal - шаблон установки
   - on - включено в стоимость или нет [laoWPCalc.on или laoWPCalc.off]
*/

// Минимальная величина "Размер оборудования"
laoWPCalc.sizeCompMin = 75;
// Шаг прибавления к "Размер оборудования"
laoWPCalc.sizeCompAppend = 35;
// Стоимость установки в "Размер оборудования"
laoWPCalc.sizeCompSetting = 100;
// Количество тарифов в "Размер оборудования"
laoWPCalc.sizeCompTariff = 12;
// Какой вариант выбрать по умолчанию
laoWPCalc.sizeCompSelected = 1;
/***********************************************************/

// Вариант по умолчанию начинается с 0
laoWPCalc.quantityCompSelected = 0;
// Массив блоков питания
laoWPCalc.quantityComp = [
	{
		name: '2 PDU',
		on: laoWPCalc.on,
		priceMes: 0,
		valuta: laoWPCalc.valuta,
		priceSet: 0,
		setVal: laoWPCalc.setting
	},
	{
		name: '4 PDU',
		on: laoWPCalc.off,
		priceMes: 60,
		valuta: laoWPCalc.valuta,
		priceSet: 50,
		setVal: laoWPCalc.setting
	},
	{
		name: '6 PDU',
		on: laoWPCalc.off,
		priceMes: 80,
		valuta: laoWPCalc.valuta,
		priceSet: 50,
		setVal: laoWPCalc.setting
	},
];
/***********************************************************/
// Вариант по умолчанию начинается с 0
laoWPCalc.internet1Selected = 0;
// Массив тарифов интернет 1
laoWPCalc.internet1Arr = [
	{
		name: '1 x 100 Мбит/с',
		on: laoWPCalc.off,
		priceMes: 0,
		valuta: laoWPCalc.valuta,
		priceSet: 0,
		setVal: laoWPCalc.setting
	},
	{
		name: '2 x 100 Мбит/с',
		on: laoWPCalc.on,
		priceMes: 25,
		valuta: laoWPCalc.valuta,
		priceSet: 0,
		setVal: laoWPCalc.setting
	},
	{
		name: '1 x 1 Гбит/с',
		on: laoWPCalc.off,
		priceMes: 0,
		valuta: laoWPCalc.valuta,
		priceSet: 0,
		setVal: laoWPCalc.setting
	},
	{
		name: '2 x 1 Гбит/с',
		on: laoWPCalc.on,
		priceMes: 110,
		valuta: laoWPCalc.valuta,
		priceSet: 0,
		setVal: laoWPCalc.setting
	},
	{
		name: '1 x 10 Гбит/с',
		on: laoWPCalc.off,
		priceMes: 0,
		valuta: laoWPCalc.valuta,
		priceSet: 0,
		setVal: laoWPCalc.setting
	},
	{
		name: '2 x 10 Гбит/с',
		on: laoWPCalc.on,
		priceMes: 220,
		valuta: laoWPCalc.valuta,
		priceSet: 0,
		setVal: laoWPCalc.setting
	},
];
/***********************************************************/

// Вариант по умолчанию начинается с 0
laoWPCalc.internet2Selected = 0;
// Массив тарифов интернет 2
laoWPCalc.internet2Arr = [
	{
		name: '100 Мбит/с',
		speed: laoWPCalc.speed1,
		priceMes: 80,
		valuta: laoWPCalc.valuta,
		priceSet: 50,
		setVal: laoWPCalc.setting
	},
	{
		name: '200 Мбит/с',
		speed: laoWPCalc.speed2,
		priceMes: 160,
		valuta: laoWPCalc.valuta,
		priceSet: 50,
		setVal: laoWPCalc.setting
	},
	{
		name: '300 Мбит/с',
		speed: laoWPCalc.speed2,
		priceMes: 240,
		valuta: laoWPCalc.valuta,
		priceSet: 50,
		setVal: laoWPCalc.setting
	},
	{
		name: '400 Мбит/с',
		speed: laoWPCalc.speed2,
		priceMes: 320,
		valuta: laoWPCalc.valuta,
		priceSet: 50,
		setVal: laoWPCalc.setting
	},
	{
		name: '500 Мбит/с',
		speed: laoWPCalc.speed2,
		priceMes: 400,
		valuta: laoWPCalc.valuta,
		priceSet: 500,
		setVal: laoWPCalc.setting
	},
	{
		name: '1 Гбит/с',
		speed: laoWPCalc.speed2,
		priceMes: 800,
		valuta: laoWPCalc.valuta,
		priceSet: 100,
		setVal: laoWPCalc.setting
	},
	{
		name: '100 Мбит/с',
		speed: laoWPCalc.speed3,
		priceMes: 30,
		valuta: laoWPCalc.valuta,
		priceSet: 50,
		setVal: laoWPCalc.setting
	},
];
/***********************************************************/

// Вариант по умолчанию начинается с 0
laoWPCalc.responseTimeSelected = 0;
// Массив тарифов Гарантированного ответа
laoWPCalc.responseTimeArr = [
	{
		name: 'При первой же возможности',
		on: laoWPCalc.on,
		priceMes: 0,
		valuta: laoWPCalc.valuta,
		priceSet: 0,
		setVal: laoWPCalc.setting
	},
	{
		name: '4 часа',
		on: laoWPCalc.off,
		priceMes: 15,
		valuta: laoWPCalc.valuta,
		priceSet: 0,
		setVal: laoWPCalc.setting
	},
];
/***********************************************************/

// Мощность
// Минимальная мощность
laoWPCalc.powerCompMinVal = 0.5;
// Мощность по умолчанию
// laoWPCalc.powerCompStartVal = '1.0';
laoWPCalc.powerCompStartVal = laoWPCalc.powerCompMinVal;
// Максимальная мощность
laoWPCalc.powerCompMaxVal = 3.0;
// Шаг мощности
laoWPCalc.powerCompStep = 0.5;
// Минимальная цена за месяц
laoWPCalc.powerCompMinMes = 45;
// Шаг тарифа
laoWPCalc.powerCompAppend = 45;
// Цена установки
laoWPCalc.powerCompSetting = 0;
// Единица мощности
laoWPCalc.powerCompWt = 'кВт';

/***********************************************************/

//IP-адреса точек
// Кол-во точек по умолчанию
laoWPCalc.ipPointsStartVal = 4;
// Минимальное кол-во точек
laoWPCalc.ipPointsMinVal = 4;
// Максимальное кол-во точек
laoWPCalc.ipPointsMaxVal = 12;
// Шаг точек
laoWPCalc.ipPointsStep = 1;
// Минимальная цена установки
laoWPCalc.ipPointsMin = 0;
// Шаг установки
laoWPCalc.ipPointsAppend = 2;
// Цена за месяц
laoWPCalc.ipPointsMinMes = 0;
/***********************************************************/

// Период оплаты
// Выбрано по умолчанию начинается c 0
laoWPCalc.payPeriodSelected = 0
// Массив
laoWPCalc.payPeriodArr = [
	{
		name: 12,
		discount: 0
	},
	{
		name: 18,
		discount: 2
	},
	{
		name: 24,
		discount: 5
	},
	{
		name: 36,
		discount: 10
	}
];

/* Переменные для суммирования тарифов */
	// Плата в месяц
	laoWPCalc.resValM = 0;
	laoWPCalc.sizeCompValM = 0;
	laoWPCalc.quantityCompValM = 0;
	laoWPCalc.countPowerValM = 0;
	laoWPCalc.internet1ValM = 0;
	laoWPCalc.internet2ValM = 0;
	laoWPCalc.ipPointsValM = 0;
	laoWPCalc.responseTimeValM = 0;
	// Плата за установку
	laoWPCalc.resValS = 0;
	laoWPCalc.sizeCompValS = 0;
	laoWPCalc.quantityCompValS = 0;
	laoWPCalc.countPowerValS = 0;
	laoWPCalc.internet1ValS = 0;
	laoWPCalc.internet2ValS = 0;
	laoWPCalc.ipPointsValS = 0;
	laoWPCalc.responseTimeValS = 0;
	// Выбранный тариф
	laoWPCalc.sizeCompSelectTariff = '';
	laoWPCalc.quantityCompSelectTariff = '';
	laoWPCalc.countPowerSelectTariff = '';
	laoWPCalc.internet1SelectTariff = '';
	laoWPCalc.internet2SelectTariff = '';
	laoWPCalc.ipPointsSelectTariff = '';
	laoWPCalc.responseTimeSelectTariff = '';
	
	laoWPCalc.payPeriodDiscount  = 0;
/* .Переменные для суммирования тарифов */

/**/

$(function() {
	/* vars for calc*/
	var i = 0,
		j = 0,
		k = 0,
		l = 0,
		m = 0,
		n = 0,
		o = 0,
		p = 0,
		s = 0,
		t = 0,
		arr = [];
	
	var $sizeComp,
		$quantityComp,
		$internet1,
		$internet2,
		$responseTime,
		$powerComp,
		$ipPoints,
		$countIp,
		$countPower,
		$pricePower,
		$setIp,
		$paySetting,
		$payMes,
		$payPeriod,
		$pay,
		$size,
		$count,
		$power,
		$internet1,
		$internet2,
		$ip,
		$time;
	
	
	// Выбираем куда выводить суммы к оплате
	$payMes = $('.output_tariff .pay_mes .val');
	$paySetting = $('.output_tariff .pay_setting .val');
	$payRes = $('.output_tariff .pay_res .val');
	$payDiscount = $('.output_tariff .pay_res .discount');
	
/* Размер оборудования */
	k = 0;
	l = 0;
	s = '';
	$sizeComp = $('#size_comp');
	l = laoWPCalc.sizeCompSetting;
	for (i = 1; i <= laoWPCalc.sizeCompTariff; i++) {
		if (k === 0) {
			k = laoWPCalc.sizeCompMin;
		} else {
			k += laoWPCalc.sizeCompAppend;
		}
		if (i === laoWPCalc.sizeCompSelected) {
			s = 'selected';
		}
		else {
			s = '';
		}
		$sizeComp.append(
			'<option value="'+i+'U'+'" data-mes="'+k+'" data-set="'+l+'" '+s+'>' + i + 'U | ' + k + ' ' + laoWPCalc.valuta +' ' + l + ' ' + laoWPCalc.setting + '</option>'
		);
		
		
	}
	laoWPCalc.sizeCompValM = getStartMes($sizeComp);
	laoWPCalc.sizeCompValS = getStartSet($sizeComp);
	laoWPCalc.sizeCompSelectTariff = getStartTariff($sizeComp);
	$sizeComp.selectmenu({
		width:'100%',
		select: function (e, ui) {
			laoWPCalc.sizeCompValM = ui.item.element[0].dataset.mes;
			laoWPCalc.sizeCompValS = ui.item.element[0].dataset.set;
			laoWPCalc.sizeCompSelectTariff = ui.item.value;
			htmlOutputTariffM($payMes);
			htmlOutputTariffS($paySetting);
			getPayRes($payRes, $payMes, $paySetting);
		}
	});
/* .Размер оборудования */

/* Число блоков питания */
	$quantityComp = $('#quantity_comp');
	arr = laoWPCalc.quantityComp;
	l = arr.length;
	for (i = 0; i < l; i++) {
		if (i === laoWPCalc.quantityCompSelected) {
			s = 'selected';
		}
		else {
			s = '';
		}
		$quantityComp.append(
			'<option value="'+arr[i].name+'" data-on="'+arr[i].on+'" data-mes="'+arr[i].priceMes+'" data-set="'+arr[i].priceSet+'"'+s+'>'+
				arr[i].name+' '+arr[i].on+' | '+arr[i].priceMes+' '+arr[i].valuta+' '+arr[i].priceSet+' '+arr[i].setVal+
			'</option>'
		);
	}
	laoWPCalc.quantityCompOn = getStartOn($quantityComp);
	laoWPCalc.quantityCompValM = getStartMes($quantityComp);
	laoWPCalc.quantityCompValS = getStartSet($quantityComp);
	laoWPCalc.quantityCompSelectTariff = getStartTariff($quantityComp);
	$quantityComp.selectmenu({
		width:'100%',
		select: function (e, ui) {
			laoWPCalc.quantityCompValM = ui.item.element[0].dataset.mes;
			laoWPCalc.quantityCompValS = ui.item.element[0].dataset.set;
			laoWPCalc.quantityCompOn = ui.item.element[0].dataset.on;
			laoWPCalc.quantityCompSelectTariff = ui.item.value;
			htmlOutputTariffM($payMes);
			htmlOutputTariffS($paySetting);
			getPayRes($payRes, $payMes, $paySetting);
		}
	});
/* .Число блоков питания */

/* Слайдер Мощность общая */
// Стоимость подключения не считается !!!
	$powerComp = $('#power_comp');
	$countPower = $('span.count_power');
	$pricePower = $('span.price_power');
	$countPower.html(laoWPCalc.powerCompStartVal + ' ' + laoWPCalc.powerCompWt);
	$pricePower.html(laoWPCalc.powerCompMinMes + ' ' + laoWPCalc.valuta + ' ' + laoWPCalc.powerCompSetting + ' ' + laoWPCalc.setting);
	
	laoWPCalc.countPowerSelectTariff = laoWPCalc.powerCompStartVal + ' ' + laoWPCalc.powerCompWt;
	laoWPCalc.countPowerValM = laoWPCalc.powerCompMinMes;
	laoWPCalc.countPowerValS = laoWPCalc.powerCompSetting;
	
	$powerComp.slider({
		value : laoWPCalc.powerCompStartVal,
		min : laoWPCalc.powerCompMinVal,
		max : laoWPCalc.powerCompMaxVal,
		step : laoWPCalc.powerCompStep,
		slide: function (event, ui) {
			var prev = $powerComp.slider('value'),
				val = ui.value + '';
			if (val.split('.')[1] !== '5') {
				$countPower.html(val + '.0' + ' ' + laoWPCalc.powerCompWt);
				laoWPCalc.countPowerSelectTariff = val + '.0' + ' ' + laoWPCalc.powerCompWt;
			} else {
				$countPower.html(val + ' ' + laoWPCalc.powerCompWt);
				laoWPCalc.countPowerSelectTariff = val + ' ' + laoWPCalc.powerCompWt;
			}
			if (ui.value*1 > prev*1) {
				$pricePower.html(laoWPCalc.powerCompMinMes*1 + laoWPCalc.powerCompAppend*1);
				$pricePower.append(' ' + laoWPCalc.valuta + ' ' + laoWPCalc.powerCompSetting + ' ' + laoWPCalc.setting);
				laoWPCalc.powerCompMinMes +=  laoWPCalc.powerCompAppend*1;
			} else {
				$pricePower.html(laoWPCalc.powerCompMinMes*1 - laoWPCalc.powerCompAppend*1);
				$pricePower.append(' ' + laoWPCalc.valuta + ' ' + laoWPCalc.powerCompSetting + ' ' + laoWPCalc.setting);
				laoWPCalc.powerCompMinMes -=  laoWPCalc.powerCompAppend*1;
			}
			laoWPCalc.countPowerValM = laoWPCalc.powerCompMinMes;
			htmlOutputTariffM($payMes);
			getPayRes($payRes, $payMes, $paySetting);
		}
	});
/* .Слайдер Мощность общая */

/* Доступ в интернет 1 */
	$internet1 = $('#internet_1');
	arr = laoWPCalc.internet1Arr;
	l = arr.length;
	for (i = 0; i < l; i++) {
		if (i === laoWPCalc.internet1Selected) {
			s = 'selected';
		}
		else {
			s = '';
		}
		$internet1.append(
			'<option value="'+arr[i].name+'" data-on="'+arr[i].on+'" data-mes="'+arr[i].priceMes+'" data-set="'+arr[i].priceSet+'"'+s+'>'+
				arr[i].name+' '+arr[i].on+' | '+arr[i].priceMes+' '+arr[i].valuta+' '+arr[i].priceSet+' '+arr[i].setVal+
			'</option>'
		);
	}
	laoWPCalc.internet1On = getStartOn($internet1);
	laoWPCalc.internet1ValM = getStartMes($internet1);
	laoWPCalc.internet1ValS = getStartSet($internet1);
	laoWPCalc.internet1SelectTariff = getStartTariff($internet1);
	$internet1.selectmenu({
		width:'100%',
		select: function (e, ui) {
			laoWPCalc.internet1On = ui.item.element[0].dataset.on;
			laoWPCalc.internet1SelectTariff = ui.item.value;
			laoWPCalc.internet1ValM = ui.item.element[0].dataset.mes;
			laoWPCalc.internet1ValS = ui.item.element[0].dataset.set;
			htmlOutputTariffM($payMes);
			htmlOutputTariffS($paySetting);
			getPayRes($payRes, $payMes, $paySetting);
		}
	});
/* .Доступ в интернет 1 */

/* Доступ в интернет 2 */
	$internet2 = $('#internet_2');
	arr = laoWPCalc.internet2Arr;
	l = arr.length;
	for (i = 0; i < l; i++) {
		if (i === laoWPCalc.internet2Selected) {
			s = 'selected';
		}
		else {
			s = '';
		}
		$internet2.append(
			'<option value="'+arr[i].name+'" data-speed="'+arr[i].speed+'" data-mes="'+arr[i].priceMes+'" data-set="'+arr[i].priceSet+'"'+s+'>'+
				arr[i].name+', '+arr[i].speed+' | '+arr[i].priceMes+' '+arr[i].valuta+' '+arr[i].priceSet+' '+arr[i].setVal+
			'</option>'
		);
	}
	laoWPCalc.internet2Speed = getStartSpeed($internet2);
	laoWPCalc.internet2ValM = getStartMes($internet2);
	laoWPCalc.internet2ValS = getStartSet($internet2);
	laoWPCalc.internet2SelectTariff = getStartTariff($internet2);
	$internet2.selectmenu({
		width:'100%',
		select: function (e, ui) {
			laoWPCalc.internet2SelectTariff = ui.item.value;
			laoWPCalc.internet2ValM = ui.item.element[0].dataset.mes;
			laoWPCalc.internet2ValS = ui.item.element[0].dataset.set;
			laoWPCalc.internet2Speed = ui.item.element[0].dataset.speed;
			htmlOutputTariffM($payMes);
			htmlOutputTariffS($paySetting);
			getPayRes($payRes, $payMes, $paySetting);
		}
	});
/* .Доступ в интернет 2 */

/* Число IP точек */
// Месячный тариф не считается
	$ipPoints = $('#ip_points');
	$countIp = $('span.count_ip');
	$countIp.html(laoWPCalc.ipPointsStartVal);
	$setIp = $('span.set_ip');
	$setIp.html(laoWPCalc.ipPointsMinMes + ' ' + laoWPCalc.valuta + ' ' + laoWPCalc.ipPointsMin + ' ' + laoWPCalc.setting);
	
	laoWPCalc.ipPointsSelectTariff = laoWPCalc.ipPointsStartVal;
	laoWPCalc.ipPointsValM = laoWPCalc.ipPointsMinMes;
	laoWPCalc.ipPointsValS = laoWPCalc.ipPointsMin;
	
	$ipPoints.slider({
		value : laoWPCalc.ipPointsStartVal,
		min : laoWPCalc.ipPointsMinVal,
		max : laoWPCalc.ipPointsMaxVal,
		step : laoWPCalc.ipPointsStep,
		slide: function( event, ui ) {
			var prev = $ipPoints.slider('value');
			$countIp.html(ui.value);
			if (ui.value*1 > prev*1) {
				$setIp.html(laoWPCalc.ipPointsMin*1 + laoWPCalc.ipPointsAppend*1);
				$setIp.append(' ' + laoWPCalc.setting);
				$setIp.prepend(laoWPCalc.ipPointsMinMes + ' ' + laoWPCalc.valuta + ' ');
				laoWPCalc.ipPointsMin +=  laoWPCalc.ipPointsAppend*1;
			} else {
				$setIp.html(laoWPCalc.ipPointsMin*1 - laoWPCalc.ipPointsAppend*1);
				$setIp.prepend(laoWPCalc.ipPointsMinMes + ' ' + laoWPCalc.valuta + ' ');
				$setIp.append(' ' + laoWPCalc.setting);
				laoWPCalc.ipPointsMin -=  laoWPCalc.ipPointsAppend*1;
			}
			laoWPCalc.ipPointsSelectTariff = ui.value;
			laoWPCalc.ipPointsValS = laoWPCalc.ipPointsMin;
			htmlOutputTariffS($paySetting);
			getPayRes($payRes, $payMes, $paySetting);
		}
	});
/* .Число IP точек */

/* Гарантированный ответ */
	$responseTime = $('#response_time');
	arr = laoWPCalc.responseTimeArr;
	l = arr.length;
	for (i = 0; i < l; i++) {
		if (i === laoWPCalc.responseTimeSelected) {
			s = 'selected';
		}
		else {
			s = '';
		}
		$responseTime.append(
			'<option value="'+arr[i].name+'" data-on="'+arr[i].on+'" data-mes="'+arr[i].priceMes+'" data-set="'+arr[i].priceSet+'"'+s+'>'+
				arr[i].name+', '+ arr[i].on +' | '+arr[i].priceMes+' '+arr[i].valuta+' '+arr[i].priceSet+' '+arr[i].setVal+
			'</option>'
		);
	}
	laoWPCalc.responseTimeOn = getStartOn($responseTime);
	laoWPCalc.responseTimeValM = getStartMes($responseTime);
	laoWPCalc.responseTimeValS = getStartSet($responseTime);
	laoWPCalc.responseTimeSelectTariff = getStartTariff($responseTime);
	
	$responseTime.selectmenu({
		width:'100%',
		select: function (e, ui) {
			laoWPCalc.responseTimeSelectTariff = ui.item.value;
			laoWPCalc.responseTimeValM = ui.item.element[0].dataset.mes;
			laoWPCalc.responseTimeValS = ui.item.element[0].dataset.set;
			laoWPCalc.responseTimeOn = ui.item.element[0].dataset.on;
			htmlOutputTariffM($payMes);
			htmlOutputTariffS($paySetting);
			getPayRes($payRes, $payMes, $paySetting);
		}
	});
/* .Гарантированный ответ */

/* Выбор периода оплаты */
	$payPeriod = $('#pay_period');
	arr = laoWPCalc.payPeriodArr;
	l = arr.length;
	for (i = 0; i < l; i++) {
		if (i === laoWPCalc.payPeriodSelected) {
			s = 'selected';
		}
		else {
			s = '';
		}
		$payPeriod.append(
			'<option value="'+arr[i].name+'" data-discount="'+arr[i].discount+'" '+s+'>'+
				arr[i].name+' мес.'+
			'</option>'
		);
	}
	laoWPCalc.payPeriodName = getStartTariff($payPeriod);
	laoWPCalc.payPeriodSelectTariff = getStartTariffText($payPeriod);
	laoWPCalc.payPeriodDiscount = getPayResDiscount($payPeriod);
	$payPeriod.selectmenu({
		width:'100%',
		select: function (e, ui) {
			laoWPCalc.payPeriodName = ui.item.value;
			laoWPCalc.payPeriodSelectTariff = getStartTariffText($payPeriod);
			laoWPCalc.payPeriodDiscount = getPayResDiscount($payPeriod);
			getPayRes($payRes, $payMes, $paySetting);
			console.log(laoWPCalc.payPeriodDiscount);
		}
	});
/* .Выбор периода оплаты */

/* Шаблонизация некоторых элементов */
	// Выводим киловаты
	$('span.wt').html(laoWPCalc.powerCompWt);
/* .Шаблонизация некоторых элементов */

/* Вывод выбранных значений */
	// Выводим первоначальные данные в 1 шаге
	htmlOutputTariffM($payMes);
	htmlOutputTariffS($paySetting);
	getPayRes($payRes, $payMes, $paySetting);
/* .Вывод выбранных значений */

/* Переход на 2 шаг */
	$pay = $('.step_2 .view_tariff p.pay span');
	$size = $('.step_2 .view_tariff p.size span');
	$count = $('.step_2 .view_tariff p.count span');
	$power = $('.step_2 .view_tariff p.power span');
	$internet1 = $('.step_2 .view_tariff p.internet1 span');
	$internet2 = $('.step_2 .view_tariff p.internet2 span');
	$ip = $('.step_2 .view_tariff p.ip span');
	$time = $('.step_2 .view_tariff p.time span');
	
	$('button.go_step2').click(function () {
		$('.step_1').fadeOut(200, function () {
			$('.step_2').fadeIn(200);
		});
		$pay.html(laoWPCalc.payPeriodSelectTariff);
		$size.html(laoWPCalc.sizeCompSelectTariff);
		$count.html(laoWPCalc.quantityCompSelectTariff + ', ' + laoWPCalc.quantityCompOn);
		$power.html(laoWPCalc.countPowerSelectTariff);
		$internet1.html(laoWPCalc.internet1SelectTariff + ', ' + laoWPCalc.internet1On);
		$internet2.html(laoWPCalc.internet2SelectTariff + ', ' + laoWPCalc.internet2Speed);
		$ip.html(laoWPCalc.ipPointsSelectTariff);
		$time.html(laoWPCalc.responseTimeSelectTariff + ', ' + laoWPCalc.responseTimeOn);
		
		// Отправка формы и данных по тарифам
		$('button.send_form').click(function (event) {
			event.preventDefault();
			var company, fio, city, email, tel, comment, info;
			var pay, size, count, power, internet1, internet2, ip, time;
			
			company = error('company', 'Введите название компании');
			fio = error('fio', 'Введите Имя и Фамилию');
			city = error('city', 'Введите город');
			email = error('email', 'Введите email');
			tel = error('tel', 'Введите телефон');
			if (company === false || fio === false || city === false || email === false || tel === false) {
				return false;
			}
			// Данные для отправуи
			company = getValue('company', 'input');
			fio = getValue('fio', 'input');
			city = getValue('city', 'input');
			email = getValue('email', 'input');
			tel = getValue('tel', 'input');
			comment = getValue('comment', 'textarea');
			info = getValue('info', 'textarea');
			
			pay = $pay.html();
			size = $size.html();
			count = $count.html();
			power = $power.html();
			internet1 = $internet1.html();
			internet2 = $internet2.html();
			ip = $ip.html();
			time = $time.html();
			$.ajax({
				type: "POST",
				url: "email.php",
				data: {
					company: company,
					fio: fio,
					city: city,
					email: email,
					tel: tel,
					comment: comment,
					info: info,
					pay: pay,
					size: size,
					count: count,
					power: power,
					internet1: internet1,
					internet2: internet2,
					ip: ip,
					time: time
				},
				success: function (){
					$('.step_2').fadeOut(200, function () {
						$('.step_3').fadeIn(200);
						$('.step_1, .step_2').html('');
					});
					
				},
				error: function () {
					console.log('Произошла ошибка');
				}
			});
		});
	});
/* .Переход на 2 шаг */

/* Переход на редактирование 1 шага */
	$('button.go_step1').click(function () {
		$('.step_2').fadeOut(200, function () {
			$('.step_1').fadeIn(200);
		});
	});
/* .Переход на редактирование 1 шага */
}); /* $ */

/* Functions */
// Выводим значение цен по тарифам
function htmlOutputTariffM(elem) {
	var val = laoWPCalc.sizeCompValM*1 +
		laoWPCalc.quantityCompValM*1 +
		laoWPCalc.countPowerValM*1 +
		laoWPCalc.internet1ValM*1 +
		laoWPCalc.internet2ValM*1 +
		laoWPCalc.ipPointsValM*1 +
		laoWPCalc.responseTimeValM*1
		
	elem.html(val).append(' ' + laoWPCalc.cash);
}

function htmlOutputTariffS(elem) {
	var val = laoWPCalc.sizeCompValS*1 +
		laoWPCalc.quantityCompValS*1 +
		laoWPCalc.countPowerValS*1 +
		laoWPCalc.internet1ValS*1 +
		laoWPCalc.internet2ValS*1 +
		laoWPCalc.ipPointsValS*1 +
		laoWPCalc.responseTimeValS*1
		
	elem.html(val).append(' ' + laoWPCalc.cash);
}

function getStartMes(elem) {
	return $("#"+elem.attr('id')+" option:selected")[0].dataset.mes;
}
function getStartOn(elem) {
	return $("#"+elem.attr('id')+" option:selected")[0].dataset.on;
}
function getStartSpeed(elem) {
	return $("#"+elem.attr('id')+" option:selected")[0].dataset.speed;
}
function getStartSet(elem) {
	return $("#"+elem.attr('id')+" option:selected")[0].dataset.set;
}
function getStartTariff(elem) {
	return $("#"+elem.attr('id')+" option:selected")[0].value;
}
function getStartTariffText(elem) {
	return $("#"+elem.attr('id')+" option:selected").html();
}
function getPayResDiscount(elem) {
	return $("#"+elem.attr('id')+" option:selected")[0].dataset.discount;
}
// Считаем результат
function getPayRes(elemRes, mes, set) {
	var res = mes.html().split(' ')[0]*1*laoWPCalc.payPeriodName*1 +
		set.html().split(' ')[0]*1;
	elemRes.html('Сума (' + laoWPCalc.payPeriodName + ') ' +  res + ' ' + laoWPCalc.cash);
	if (laoWPCalc.payPeriodDiscount*1 > 0) {
		$payDiscount.html('Скидка (-' + laoWPCalc.payPeriodDiscount + '%) ' + res*1*laoWPCalc.payPeriodDiscount*1/100+ ' ' + laoWPCalc.cash);
	} else {
		$payDiscount.html('');
	}
}

// Проверка формы
function error(name, message) {
	var pole = $('form#send_data input[name=' + name);
	if (pole.val() === '') {
		pole.css('border', '1px solid red');
		return false;
	}
}
function getValue(pole, type) {
	var pole = $('form#send_data ' + type + '[name=' + pole);
	return pole.val()
}
function removeError(pole) {
	var pole = $('form#send_data .pole');
	var border = pole.css('border');
	pole.focus(function () {
		pole.css('border', border);
	});
}