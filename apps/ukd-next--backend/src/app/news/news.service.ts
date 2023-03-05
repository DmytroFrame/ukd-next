import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsEntity } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(@InjectRepository(NewsEntity) private readonly newsRepository: Repository<NewsEntity>) {}

  create(createNewsDto: CreateNewsDto) {
    return this.newsRepository.save(createNewsDto);
  }

  findAll() {
    return this.newsRepository.find({order: {createdAt: 'DESC'}});
  }

  findOne(id: number) {
    return this.newsRepository.findOneBy({ id });
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return this.newsRepository.update(id, updateNewsDto);
  }

  remove(id: number) {
    return this.newsRepository.delete(id);
  }
}
