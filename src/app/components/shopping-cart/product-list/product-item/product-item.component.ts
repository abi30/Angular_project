import { Product } from './../../../../models/product';
import { Component, OnInit,Input } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input()productItem:Product;
  constructor(private msg:MessengerService) { }

  ngOnInit(): void {

  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem);
  }

}
