<?php

namespace App\Services;

class BaseService
{
    protected $db;

    public function __construct($db, $name)
    {
        $this->db = $db;
        $this->dbname = $name;
    }

}
