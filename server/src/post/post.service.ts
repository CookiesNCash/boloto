import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto, UserIdDto } from './dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts() {
    const posts = await this.prisma.post.findMany();
    return posts ?? [];
  }

  async getAllPostsByUser(dto: UserIdDto) {
    const { userId } = dto;
    const posts = await this.prisma.post.findMany({
      where: { userId: +userId },
    });
    return posts ?? [];
  }

  async createPost(dto: CreatePostDto) {
    const { userId, text, image } = dto;
    const post = await this.prisma.post.create({
      data: {
        userId,
        text,
        image,
      },
    });
    return post;
  }
}
