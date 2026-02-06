import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Task, TaskDocument } from '../schema/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    private taskModel: Model<TaskDocument>,
  ) {}

  create(title: string, description: string, project: Types.ObjectId) {
    return this.taskModel.create({ title, description, project });
  }

  findByProject(projectId: Types.ObjectId) {
    return this.taskModel.find({ project: projectId });
  }
}
