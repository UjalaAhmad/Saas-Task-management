import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Project, ProjectDocument } from '../schema/projects.schemas';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<ProjectDocument>,
  ) {}

  create(name: string, description: string, owner: Types.ObjectId) {
    return this.projectModel.create({ name, description, owner });
  }

  findAllByUser(userId: Types.ObjectId) {
    return this.projectModel.find({ owner: userId });
  }
}
