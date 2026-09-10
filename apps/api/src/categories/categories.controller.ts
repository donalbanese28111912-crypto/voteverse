import { Controller, Get, Param } from '@nestjs/common';
import { Public } from '../common/decorators';
import { CategoriesService } from './categories.service';

@Public()
@Controller({ path: 'categories', version: '1' })
export class CategoriesController {
  constructor(private readonly categories: CategoriesService) {}

  @Get()
  list() {
    return this.categories.list();
  }

  @Get('tree')
  tree() {
    return this.categories.tree();
  }

  @Get(':slug')
  bySlug(@Param('slug') slug: string) {
    return this.categories.bySlug(slug);
  }
}
