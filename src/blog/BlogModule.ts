import {Module} from '@nestjs/common';
import {PostService} from './services/PostService';
import {PostController} from './PostController';
import {PostEntity} from './entities/PostEntity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([PostEntity]),
    ],
    controllers: [
        PostController,
    ],
    providers: [
        PostService,
    ],
})
export class BlogModule {
}
