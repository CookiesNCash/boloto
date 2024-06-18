import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto, UserIdDto } from './dto';
import { LikesDto } from './dto/likesDto';

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

  async like(dto: LikesDto) {
    const { userId, postId } = dto;
    const post = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    let uniqLikes = [...post.likes];
    if (!post.likes.includes(userId)) {
      uniqLikes = Array.from(new Set([...post.likes, userId]));
    } else {
      uniqLikes = post.likes.filter((id) => id !== userId);
    }
    const updatedPost = await this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: uniqLikes,
      },
    });
    return updatedPost;
  }

  async getLikes(dto: { postId: number }) {
    const { postId } = dto;
    const post = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    return post.likes.length;
  }

  async isPostLiked(dto: LikesDto) {
    const { userId, postId } = dto;
    const post = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    return post.likes.includes(userId);
  }
}
