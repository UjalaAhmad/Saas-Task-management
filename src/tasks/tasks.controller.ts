import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body() body: any) {
    return this.tasksService.create(
      body.title,
      body.description,
      body.projectId,
    );
  }

  @Get('project/:id')
  findByProject(@Param('id') id: string) {
    return this.tasksService.findByProject(id as any);
  }
}
