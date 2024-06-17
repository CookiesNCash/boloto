import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
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
  @Get('byUser')
  async getAllPostsByUser(@Req() req: Request) {
    const { body } = req;
    return this.postService.getAllPostsByUser(body);
  }

  @UseGuards(JwtGuard)
  @Post('create')
  async createPost(@Req() req: Request) {
    const { body } = req;
    return this.postService.createPost(body);
  }
}
