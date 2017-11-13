let _notes = [
	'Заметка 1',
	'Заметка 2',
	'Заметка 3',
	'Заметка 4',
	'Заметка 5',
	'Заметка 6',
	'Заметка 7',
	'Заметка 8',
	'Заметка 9',
	'Заметка 10',
	'Заметка 11',
	'Заметка 12',
	'Заметка 13',
	'Заметка 14',
	'Заметка 15',
	'Заметка 16',
	'Заметка 17',
	'Заметка 18',
	'Заметка 19',
	'Заметка 20',
];
class Note {
// Клонируем массив с заметками
// Получаем певую рандомную заметку при этом удаяя её из массива
// При клике на кнопку получаем рандомную заметку из массива при этом удаляя её из массива
// Если длинна массива с заметоками будет 0, то присваиваем массиву значение из клона заметок 
	constructor(notes) {
		this._currentNotes = notes;
		this._cloneNotes = notes.slice();
	}
	start() {
		return this._currentNotes.splice(this._random(), 1)[0];
	}
	next() {
		if (this._currentNotes.length === 0) {
			this._currentNotes = this._cloneNotes.slice();
			console.log(this._cloneNotes);
		}
		return this._currentNotes.splice(this._random(), 1)[0];
	}
	_random(min = 0, max = this._currentNotes.length - 1) {
		let rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
	}
}
let $note = document.querySelector('.js-login2030-note'),
	$text = document.querySelector('.js-login2030-note-text'),
	$btn = document.querySelector('.js-login2030-note-btn');

let notes = new Note(_notes);
$text.innerHTML = notes.start();
$btn.addEventListener('click', ()=> {
	$text.classList.add('is_hide');
	setTimeout(()=> {
		$text.innerHTML = notes.next();
		setTimeout(()=> {
			$text.classList.remove('is_hide');
		}, 100);
	}, 500);
});

