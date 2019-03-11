import {Controller, Get} from '@nestjs/common';
import {Observable} from 'rxjs';
import {PostModel} from './models/PostModel';
import {PostService} from './services/PostService';

@Controller('posts')
export class PostController {

    constructor(private postService: PostService) {
    }

    @Get()
    findAll(): Observable<PostModel[]> {
        return this.postService.findAll();
    }
}
