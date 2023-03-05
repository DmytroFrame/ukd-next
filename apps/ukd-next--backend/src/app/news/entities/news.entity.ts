import { CustomDefaultEntity } from "@common/entities/custom-default.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { UserEntity } from "@src/user/entities/user.entity";
import { Column, Entity, OneToOne } from "typeorm";

@Entity()
export class NewsEntity extends CustomDefaultEntity {
    @ApiProperty()
    @Column()
    title!: string

    @ApiProperty()
    @Column()
    description?: string

    @ApiPropertyOptional({default: ''})
    @Column({default: ''})
    image?: string

    @OneToOne(() => UserEntity)
    author: UserEntity
}
