import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Observable} from 'rxjs';
import {PostService} from './services/PostService';
import {PostEntity} from './entities/PostEntity';
import {CreatePostDto} from './dtos/CreatePostDto';
import {PostDto} from './dtos/PostDto';
import {EditPostDto} from './dtos/EditPostDto';

@Controller('posts')
export class PostController {

    constructor(private postService: PostService) {
    }

    @Get()
    findAll(): Observable<PostEntity[]> {
        return this.postService.findAll();
    }

    @Post()
    create(@Body() createPostDto: CreatePostDto): Promise<PostDto> {
        return this.postService.create(createPostDto);
    }

    @Put()
    edit(@Body() editPostDto: EditPostDto): Promise<PostDto> {
        return this.postService.edit(editPostDto);
    }

    @Delete(':id')
    delete(@Param() postId: number) {
        this.postService.delete(postId);
    }
}
