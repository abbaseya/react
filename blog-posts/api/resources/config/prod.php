<?php
$app['log.level'] = Monolog\Logger::ERROR;
$app['api.version'] = "v1";
$app['api.endpoint'] = "/api";

$app['db.server'] = "mongodb://ds133796.mlab.com:33796";
$app['db.options'] = array(
  "username" => "root",
  "password" => "<|{cu,#bypKS|[6",
  "db" => "reduxposts"
);
