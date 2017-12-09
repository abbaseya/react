<?php

namespace App\Services;

class PostsService extends BaseService
{

    public function getOne($id)
    {
        $oid = new \MongoId($id);
        return $this->db->selectDatabase($this->dbname)->selectCollection('posts')->findOne(array('_id'=>$oid));
    }

    public function getAll()
    {
        $cursor = $this->db->selectDatabase($this->dbname)->selectCollection('posts')->find();
        $cursor->limit(20);
        return array_values($cursor->toArray());
    }

    function save($post)
    {
        $this->db->selectDatabase($this->dbname)->selectCollection('posts')->insert($post);
        return $post['_id']->{'$id'};
    }

    function update($id, $post)
    {
        $oid = new \MongoId($id);
        return $this->db->selectDatabase($this->dbname)->selectCollection('posts')->update(array('_id'=>$oid), array('$set' => $post));
    }

    function delete($id)
    {
        $oid = new \MongoId($id);
        return $this->db->selectDatabase($this->dbname)->selectCollection('posts')->remove(array('_id' => $oid));
    }

}
