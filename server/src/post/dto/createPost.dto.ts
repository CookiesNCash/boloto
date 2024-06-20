export class CreatePostDto {
  userId: number;
  text?: string;
  image?: string;
  hashTags?: string[];
  email?: string;
  firstName?: string;
}
