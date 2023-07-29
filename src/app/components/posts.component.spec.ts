import { of } from "rxjs";
import { Post } from "../models/Post";
import { PostService } from "../service/Post/post.service";
import { PostsComponent } from "./posts/posts.component";

describe('Post component', () => {
    let  POSTS: Post[];
    let postComponent : PostsComponent;
    let mockPostServices: any;
    beforeEach(() => {
        POSTS = [{
            id: 1,
            body: 'body 1',
            title: 'title 1'
        },{
            id: 2,
            body: 'body 2',
            title: 'title 2'
        }];
        mockPostServices = jasmine.createSpyObj(['getPosts','deletePosts']);
        postComponent = new PostsComponent(mockPostServices);
    });

    
    describe('delelete', () => {
        it('should delete the selected Post from the posts', () => {
            mockPostServices.deletePosts.and.returnValue(of(true));
            postComponent.post = POSTS;  
            postComponent.delete(POSTS[1]);
            expect(postComponent.post.length).toBe(1);
        });

        it('should call delete service one', () => {
            mockPostServices.deletePosts.and.returnValue(of(true));
            postComponent.post = POSTS;  
            postComponent.delete(POSTS[1]);
            expect(mockPostServices.deletePosts).toHaveBeenCalledTimes(1);
        });

        it('should delete the acutal selected post', () => {
            mockPostServices.deletePosts.and.returnValue(of(true));
            postComponent.post = POSTS;  
            postComponent.delete(POSTS[1]);
            for(let post of postComponent.post){
                expect(post).not.toEqual(POSTS[1]);
            }
        });
    });

});