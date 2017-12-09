<?php

namespace App;

use Silex\Application;

class ServicesLoader
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function bindServicesIntoContainer()
    {
        $this->app['posts.service'] = function() {
            return new Services\PostsService($this->app["mongodb"], $this->app["db.options"]["db"]);
        };
    }
}

