import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})


export class ItemListComponent implements OnInit {
  items: Item[] = [];
  newItem: Item = new Item(0,'','',0,0,'')

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }
  createItem(){
    this.itemService.createItem(this.newItem)
      .subscribe(user => {
        this.items.push(user);
        this.newItem = new Item(0, '', '', 0,0,'');
      });
  }
  editItem(item: Item) {
    this.itemService.updateItem(item)
      .subscribe(updatedItem => {
        const index = this.items.findIndex(u => u.id === updatedItem.id);
        this.items[index] = updatedItem;
      });
  }
  deleteItem(id: number) {
    this.itemService.deleteItem(id)
      .subscribe(() => {
        this.items = this.items.filter(item => item.id !== id);
      });
  }
}
