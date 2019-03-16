import {Injectable} from '@nestjs/common';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {PostEntity} from '../entities/PostEntity';
import {CreatePostDto} from '../dtos/CreatePostDto';

@Injectable()
export class PostService {
    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) {
    }

    public findAll(): Observable<PostEntity[]> {
        return from(this.postRepository.find());
    }

    public create(createPostDto: CreatePostDto) {
       return this.postRepository.save(createPostDto);
    }
}
