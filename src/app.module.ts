import {Module} from '@nestjs/common';
import {BlogModule} from './blog/BlogModule';

@Module({
    imports: [
        BlogModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
