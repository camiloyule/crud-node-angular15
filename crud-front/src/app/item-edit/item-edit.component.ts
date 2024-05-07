import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})

export class ItemEditComponent implements OnInit {
  item: Item= new Item(0,'','',0,0,'');

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchItem();
  }

  fetchItem() {
    const id= this.route.snapshot.paramMap.get('id');
    if(id!==null){
      
      this.itemService.getItem(parseInt(id,10))
        .subscribe(item => this.item = item);

    }
  }

  updateItem() {
    this.itemService.updateItem(this.item)
      .subscribe(() => {
        this.router.navigate(['/items'])
      });
  }
}