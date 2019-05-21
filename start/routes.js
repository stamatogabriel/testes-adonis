'use strict'

const Route = use('Route')

Route.post('/register', 'UserController.store');

Route.post('/auth', 'SessionController.store');

Route.group(() => {
  Route.resource('/post', 'PostController').apiOnly();
}).middleware('auth');
