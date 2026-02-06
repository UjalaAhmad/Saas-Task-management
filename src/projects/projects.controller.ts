import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { RolesGuard } from 'src/common/gurads/roles.guards';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  
  @Roles('admin', 'user')
  @Post()
  create(@Body() body: any,  @CurrentUser() user: any) {
    return this.projectsService.create(
      body.name,
      body.description,
      user?.sub, // will work after guards
    );
  }

  @Get()
  findMyProjects(@Req() req: any) {
    return this.projectsService.findAllByUser(req.user?.sub);
  }
}
