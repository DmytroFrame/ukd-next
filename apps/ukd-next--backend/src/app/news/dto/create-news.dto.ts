import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateNewsDto {
  @ApiProperty()
  title!: string;

  @ApiProperty()
  description!: string;

  @ApiPropertyOptional({default: ''})
  image?: string;
}
