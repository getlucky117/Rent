import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ActivatedRoute} from '@angular/router'
import{ PostService} from '../post.service';
import{ PostI } from 'src/app/shared/models/post.interface';
import {  Observable } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})


export class PostComponent implements OnInit {
 
  public post$: Observable <PostI>;
  constructor(private route: ActivatedRoute,private postSvc: PostService ) { }

  ngOnInit(): void {
const idPost = this.route.snapshot.params.id;
this.post$ = this.postSvc.getOnePost(idPost);
  }


showModal(){

  Swal.fire(
    'Tu Reserva',
    'han sido guardada correctamente',
    'success'
  )



}

  
}


