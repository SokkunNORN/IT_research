
var todo = document.getElementById('todo'),
	progress = document.getElementById('progress'),
	review = document.getElementById('review'),
	done = document.getElementById('done');


new Sortable(todo, {
	group: 'shared',
	animation: 150
});

new Sortable(progress, {
	group: 'shared',
	animation: 150
});

new Sortable(review, {
	group: 'shared',
	animation: 150
});

new Sortable(done, {
	group: 'shared',
	animation: 150
});
