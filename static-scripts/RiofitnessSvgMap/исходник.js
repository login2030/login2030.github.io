var site = 'http://riofitness.ru/';
var floor_2 = {
	'1':{
		path:'M114 334l30 142 250 -57 -38 -140 -243 55z',
		id:'s_woman_shower',
		gif:'img/gif/10.gif',
		text:'Комфортная душевая комната рядом с финской сауной, все для вашего комфортного расслабления.'
	},
	'2':{
		path:'M357 280l218 -48 40 138 -221 50 -38 -140z',
		id:'s_woman_fin',
		gif:'img/gif/11.gif',
		text:'Целебные свойства финской сауны известны с древних времен. Здесь Вы можете расслабить свои мышцы после тренировок и отдыхая добиться гармонии своего тела и духа.'
	},
	'3':{
		path:'M575 231l192 -44 47 136 -199 46 -40 -138z',
		id:'s_man_fin',
		gif:'img/gif/11.gif',
		text:'Целебные свойства финской сауны известны с древних времен. Здесь Вы можете расслабить свои мышцы после тренировок и отдыхая добиться гармонии своего тела и духа.'
	},
	'4':{
		path:'M921 298l193 -45 -54 -134 -191 43 52 135z',
		id:'s_man_shower',
		gif:'img/gif/10.gif',
		text:'Комфортная душевая комната рядом с финской сауной, все для вашего комфортного расслабления.'
	},
	'5':{
		path:'M7 508l63 329 204 -51 20 85 309 -77 -30 -107 131 -31 -88 -289 -608 139z',
		id:'s_woman_dress',
		gif:'img/gif/9.gif',
		text:'Большая и просторная раздевалка, сделанная с максимальным удобством для Вас. Здесь Вы можете легко и комфортно подготовиться к занятиям.'
	},
	'6':{
		path:'M615 369l88 289 127 -30 35 102 402 -97 -153 -380 -499 115z',
		id:'s_man_dress',
		gif:'img/gif/9.gif',
		text:'Большая и просторная раздевалка, сделанная с максимальным удобством для Вас. Здесь Вы можете легко и комфортно подготовиться к занятиям.'
	},
	'7':{
		path:'M1060 120l206 513 565 -142 -247 -485 -524 114z',
		id:'s_cycle',
		gif:'img/gif/13.gif',
		text:'Зал оборудован специальными тренажерами, имитирующими езду на горном велосипеде. Занятия проходят под динамичную музыку с максимальными результатами по сжиганию калорий.'
	},
	'8':{
		path:'M573 689l30 107 262 -65 -35 -102 -258 61z',
		id:'s_solar',
		gif:'img/gif/15.gif',
		text:'Солярий+Коллагенарий используется как косметическая процедура для придания коже бронзово-золотистого цвета, укрепления иммунитета, синтез витаминов группы D, а так же для насыщения кожи коллагеном , увлажнения и питания.'
	},
	'9':{
		path:'M86 924l118 630 560 -148 -169 -608 -509 126z',
		id:'s_fitness_bar',
		gif:'img/gif/12.gif',
		text:'Хорошая физическая форма начинается с правильного питания, поэтому очень важно сочетать занятия фитнесом с программой питания! В нашем фитнес-баре Вы сможете подзарядиться энергией и силами перед тренировкой, можно пообщаться с друзьями, расслабиться после тренировки.'
	},
	'10':{
		path:'M857 877l147 462 976 -268 -57 -121 45 -11 -152 -304 -959 242z',
		id:'s_group',
		gif:'img/gif/14.gif',
		text:'Большой зал специально оборудован для проведения групповых занятий аэробного, силового форматов, а также уроков смешанного и танцевального направлений. Специальное спортивное покрытие снижает нагрузку на суставы и обеспечивает комфортное передвижение.'
	}

};
var imgSrcDefault ='img/mouse.png';
var textDefault= 'Перемещайте мышкой по плану клуба, чтобы посмотреть подробную информацию';

$(document).ready(function(){
	var r = Raphael('svg-1', 727, 571),
    attributesHide = {
        opacity: '0',
        fill: '#ffffff',
        stroke: '#ffffff',
        'fill-opacity': 0.8,
        'stroke': "#ffffff",
        'stroke-opacity': 0.8,
        'cursor':'pointer',
        'stroke-width': 1,
        'stroke-linejoin': 'round'
    },
    attributesShow = {
        opacity: '1',
        fill: '#ffffff',
        stroke: '#ffffff',
        'fill-opacity': 0.8,
        'stroke': "#ffffff",
        'stroke-opacity': 0.8,
        'cursor':'pointer',
        'stroke-width': 1,
        'stroke-linejoin': 'round'
    };

    //разрешение свг области
    r.setViewBox(0, 0, 1986, 1560);
    //строим секции  на плане 2 этажа, обрабатываем наведение на секции
    for (var section in floor_2) {
    	var obj = r.path(floor_2[section].path);
        obj.attr(attributesHide);
        obj.node.id = section;

        obj.mouseover(function(el){
            this.animate({
                fill: '#ffffff',
                stroke: '#ffffff',
                opacity:1 
            }, 100);
            
            var ulLi = $('.floor_content').find('#'+floor_2[this.node.id].id);
            ulLi.css({"background-color" : "#ACE33D"});
            ulLi.parent().parent().parent().find('.plan_mouse').attr('src',site + floor_2[this.node.id].gif);
            ulLi.parent().parent().parent().find('.floor_instr').html(floor_2[this.node.id].text);

        });

        obj.mouseout(function(el){
            this.animate({
                fill: attributesHide.fill,
                stroke: attributesHide.stroke,
                opacity: attributesHide.opacity    
            }, 100);
            var ulLi = $('.floor_content').find('#'+floor_2[this.node.id].id);
            ulLi.css({"backgroundColor" : "" });
            ulLi.parent().parent().parent().find('.plan_mouse').attr('src',site + imgSrcDefault);
            ulLi.parent().parent().parent().find('.floor_instr').html(textDefault);
        });
    }
	
    //обрабатываем наведение на секции в легенде
	$('.legenda ul li, .legenda_1 ul li').mouseover(function(){
		var self = $(this);
		for (var section in floor_2) {
			if(floor_2[section].id == this.id){
				r.forEach(function(el){
					if(el.node.id == section){
						el.animate({
				            fill: '#ffffff',
				            stroke: '#ffffff',
				            opacity:1 
				        }, 100);

		        		$(self).css({"background-color" : "#ACE33D"});
	        			$(self).parent().parent().parent().find('.plan_mouse').attr('src',site + floor_2[el.node.id ].gif);
	        			$(self).parent().parent().parent().find('.floor_instr').html(floor_2[el.node.id].text);
					}
				});
			} 
		}
	});

	$('.legenda ul li, .legenda_1 ul li').mouseout(function(){
		var self = $(this);
		$(self).css({"background-color" : ""});
		
		for (var section in floor_2) {
			if(floor_2[section].id == this.id){
				r.forEach(function(el){
					if(el.node.id == section){
						el.animate({
				            fill: attributesHide.fill,
				            stroke: attributesHide.stroke,
				            opacity: attributesHide.opacity    
				        }, 100);
				        $(self).parent().parent().parent().find('.plan_mouse').attr('src',site + imgSrcDefault);
		            	$(self).parent().parent().parent().find('.floor_instr').html(textDefault);
					}
				});
			} 
		}
	});

});

function destroySVG(){
	r.remove();
}
