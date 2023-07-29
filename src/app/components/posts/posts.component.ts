import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/service/Post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  post:Post[]=[];

  constructor(private postService: PostService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 getPosts(){
  this.postService.getPosts().subscribe (
    (posts:any) => {this.post = posts;}
  );
 }

 delete(post:any){
  this.post = this.post.filter(p => p.id !== post.id);
  this.postService.deletePosts(post).subscribe();
 }
}
