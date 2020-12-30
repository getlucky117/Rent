import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
appName= 'Arrendadora La Estafa';
  constructor(public authSvc:AuthService) { }


  public phone = '[+50763286365]'
  public title = "Busco alquilar un auto";



  ngOnInit(): void {
  }

onLogout():void{

this.authSvc.logout();




}



}
