import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [AuthModule, UserModule, PostModule, PrismaModule],
  providers: [ChatGateway],
})
export class AppModule {}
