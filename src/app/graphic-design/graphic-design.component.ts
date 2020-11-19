import { Component, OnInit } from '@angular/core';



import { CartService } from '../cart.service';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})
export class GraphicDesignComponent implements OnInit {
  portfolioItems ;
  _albums: any = [] ;
  imgHeight = 357;

  constructor(
    private cartService: CartService,
    
  ) {


   }

  ngOnInit() {
    this.portfolioItems = this.cartService.getPortfolio();
    this.cartService.getPortfolio().subscribe(data =>{
      console.log(data);
      this._albums = data;
    });

  }

  open(index: number): void {
    

   
  }
 
  close(): void {
    
    this._lightbox.close();
  }

}