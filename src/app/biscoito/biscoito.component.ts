import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
 
  }
  
  irTelaConselho(): void {
    this.router.navigateByUrl('message')
  }
}
