import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async tree() {
    const all = await this.prisma.category.findMany({
      orderBy: [{ position: 'asc' }, { name: 'asc' }],
      select: {
        id: true,
        slug: true,
        name: true,
        icon: true,
        description: true,
        parentId: true,
        paidSupportEnabled: true,
      },
    });

    type Node = (typeof all)[number] & { children: Node[] };
    const byId = new Map<string, Node>();
    all.forEach((c) => byId.set(c.id, { ...c, children: [] }));
    const roots: Node[] = [];
    byId.forEach((node) => {
      if (node.parentId && byId.has(node.parentId)) {
        byId.get(node.parentId)!.children.push(node);
      } else {
        roots.push(node);
      }
    });
    return roots;
  }

  async list() {
    return this.prisma.category.findMany({
      orderBy: [{ position: 'asc' }, { name: 'asc' }],
      select: { slug: true, name: true, icon: true, parentId: true },
    });
  }

  async bySlug(slug: string) {
    const category = await this.prisma.category.findUnique({
      where: { slug },
      include: {
        children: {
          select: { slug: true, name: true, icon: true },
          orderBy: { name: 'asc' },
        },
        parent: { select: { slug: true, name: true } },
      },
    });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }
}
