import { Controller, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { PostService } from './post.service';
import { Request } from 'express';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @UseGuards(JwtGuard)
  @Get('all')
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @UseGuards(JwtGuard)
  @Get('byUser/:userId')
  async getAllPostsByUser(@Req() req: Request) {
    const { userId } = req.params;
    return this.postService.getAllPostsByUser({ userId: +userId });
  }

  @UseGuards(JwtGuard)
  @Post('create')
  async createPost(@Req() req: Request) {
    const { body } = req;
    return this.postService.createPost(body);
  }

  @UseGuards(JwtGuard)
  @Post('likes')
  async like(@Req() req: Request) {
    const { body } = req;
    return this.postService.like(body);
  }

  @UseGuards(JwtGuard)
  @Get('likes/:postId')
  async getLikes(@Req() req: Request) {
    const { postId } = req.params;
    return this.postService.getLikes({ postId: +postId });
  }

  @UseGuards(JwtGuard)
  @Get('isPostLiked/:userId/:postId')
  async isPostLiked(@Req() req: Request) {
    const { userId, postId } = req.params;
    return this.postService.isPostLiked({
      userId: +userId,
      postId: +postId,
    });
  }

  @UseGuards(JwtGuard)
  @Patch('view')
  async view(@Req() req: Request) {
    const { body } = req;
    return this.postService.view(body);
  }
}
