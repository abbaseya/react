<?php

namespace App\Controllers;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class PostsController
{

    protected $postsService;

    public function __construct($service)
    {
        $this->postsService = $service;
    }

    public function getOne($id)
    {
        return new JsonResponse($this->postsService->getOne($id));
    }

    public function getAll()
    {
        return new JsonResponse($this->postsService->getAll());
    }

    public function save(Request $request)
    {

        $post = $this->getDataFromRequest($request);
        return new JsonResponse(array("id" => $this->postsService->save($post)));

    }

    public function update($id, Request $request)
    {
        $post = $this->getDataFromRequest($request);
        $this->postsService->update($id, $post);
        return new JsonResponse($post);

    }

    public function delete($id)
    {

        return new JsonResponse($this->postsService->delete($id));

    }

    public function getDataFromRequest(Request $request)
    {
        return $post = $request->request->all();
    }
}
