<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Project;

class ProjectControllerTest extends TestCase
{
    use LazilyRefreshDatabase;

    public function test_get_all_projects()
    {
        $projects = [
            [
                'nama' => 'Kapalzy',
            ],
            [
                'nama' => 'Rintis'
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }

        $response = $this->getJson('api/projects');
        $response->assertOk()
            ->assertJsonCount(2, 'data');
    }
}
