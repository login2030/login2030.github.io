(function() {
	var app = {
		head: document.querySelector('head'),
		body: document.querySelector('body'),
		
		wrapper: document.createElement('div'),
		style: document.createElement('style'),
		font: document.createElement('link'),
		
		title: document.querySelector('title').innerHTML,
		link: window.location.origin,
	}
	var style = '.b-header { background-color: #424242; margin-top: 0; margin-bottom: 20px; width: 100%; }'+
	'.b-header__inner { padding: 10px 20px 20px; max-width: 600px; margin-right: auto; margin-left: auto; text-align: center; }' +
	'.b-header__h1 { font-family: "Roboto", sans-serif; font-weight: 700; font-size: 25px; line-height: 1.5; color: #FFF; text-align: center; margin-bottom: 10px; }' +
	'.b-header__a { font-family: "Roboto", sans-serif; font-weight: 700; color: #000; background-color: rgb(111, 198, 238); line-height: 1.3; font-size: 16px; display: inline-block; padding: 10px 15px; border: 1px solid rgb(111, 198, 238); border-radius: 10px; text-decoration: none; }';
	var block = '<div class="b-header"> <div class="b-header__inner"> <h1 class="b-header__h1">' + app.title + '</h1> <a href="' + app.link + '" class="b-header__a">Назад в портфолио</a> </div> </div>';

	app.font.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto:700');
	app.font.setAttribute('rel', 'stylesheet');
	app.head.appendChild(app.font);
	
	app.style.innerHTML = style;
	app.head.appendChild(app.style);
	
	app.wrapper.innerHTML = block;
	app.body.insertBefore(app.wrapper, app.body.firstChild);
	
})();