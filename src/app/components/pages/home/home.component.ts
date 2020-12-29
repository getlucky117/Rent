import { Component, OnInit } from '@angular/core';
import { PostService } from './../../posts/post.service';
import { PostI } from '../../../shared/models/post.interface'
import { Observable } from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent implements OnInit {
 public posts: {
id: string;

titlePost: string;
contentPosts: string;
imagePost: string;


 }  []=[
           {
     id:'1',
     titlePost:'Carro 1',
     contentPosts:'Kia picanto  de 0 a 100 en 60 min',
     imagePost:'https://cr04.critica.com.pa/sites/default/files/imagenes/2016/09/23/auto.jpg'
    
   },
   {
    id:'2',
    titlePost: "Carro 2",
    contentPosts:'elantra  2019 ',
    imagePost:'https://d33cpcpynwss7s.cloudfront.net/wp-content/uploads/2019/10/elantra.png'
   
  },
  {
   id:'3',
   titlePost: "Carro 3",
   contentPosts:'tsuru tuneado  2077 ',
   imagePost:'https://assets.change.org/photos/5/lp/gn/gfLPGNrqTEeVHGp-1600x900-noPad.jpg?1593905654'
  
 },
 {
  id:'4',
  titlePost: "Carro 4",
  contentPosts:' nissan Trueno   ',
  imagePost:'https://www.motorbiscuit.com/wp-content/uploads/2020/10/1986-JDM-Toyota-AE86-Sprinter-Trueno-GT-Apex.jpg'
 
}
 ] ;



 public posts$: Observable<PostI[]>;


  constructor(private postSvc: PostService) { }

  ngOnInit(): void {
 //this.postSvc.getAllPosts().subscribe(res=>console.log('POSTS',res));
 this.posts$ = this.postSvc.getAllPosts();
  }
}