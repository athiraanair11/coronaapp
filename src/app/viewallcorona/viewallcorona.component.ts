import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallcorona',
  templateUrl: './viewallcorona.component.html',
  styleUrls: ['./viewallcorona.component.css']
})
export class ViewallcoronaComponent implements OnInit {

  constructor(private api:ApiService) {this.dataFromApi() }

  dataFromApi=()=>{

    this.api.fetchCorona().subscribe(

      (response)=>{

        this.corona=response
      }
    )
  }

  corona:any=[]

  ngOnInit(): void {
  }

}
