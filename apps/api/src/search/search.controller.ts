import { Controller, Get, Query } from '@nestjs/common';
import { Public } from '../common/decorators';
import { SearchService } from './search.service';

@Public()
@Controller({ path: 'search', version: '1' })
export class SearchController {
  constructor(private readonly search: SearchService) {}

  @Get()
  run(@Query('q') q = '', @Query('limit') limit?: string) {
    const n = Math.min(20, Math.max(1, Number(limit) || 8));
    return this.search.search(q, n);
  }
}
