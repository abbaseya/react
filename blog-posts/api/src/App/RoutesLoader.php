<?php

namespace App;

use Silex\Application;

class RoutesLoader
{
    private $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
        $this->instantiateControllers();

    }

    private function instantiateControllers()
    {
        $this->app['posts.controller'] = function() {
            return new Controllers\PostsController($this->app['posts.service']);
        };
    }

    public function bindRoutesToControllers()
    {
        $api = $this->app["controllers_factory"];
        $api->get('/posts', "posts.controller:getAll");
        $api->get('/posts/{id}', "posts.controller:getOne");
        $api->post('/posts', "posts.controller:save");
        $api->put('/posts/{id}', "posts.controller:update");
        $api->delete('/posts/{id}', "posts.controller:delete");

        $this->app->mount($this->app["api.endpoint"].'/'.$this->app["api.version"], $api);
    }
}

