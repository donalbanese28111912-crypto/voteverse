import { Controller, Get, Param } from '@nestjs/common';
import { Public } from '../common/decorators';
import { EntitiesService } from './entities.service';

@Public()
@Controller({ path: 'entities', version: '1' })
export class EntitiesController {
  constructor(private readonly entities: EntitiesService) {}

  @Get(':slug')
  bySlug(@Param('slug') slug: string) {
    return this.entities.bySlug(slug);
  }
}
