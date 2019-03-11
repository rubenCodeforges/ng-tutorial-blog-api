import {Module} from '@nestjs/common';
import {PostService} from './services/PostService';
import {PostController} from './PostController';

@Module({
    imports: [],
    controllers: [
        PostController,
    ],
    providers: [
        PostService,
    ],
})
export class BlogModule {
}
