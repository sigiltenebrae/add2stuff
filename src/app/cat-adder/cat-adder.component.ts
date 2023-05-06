import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {map, Observable, startWith, switchMap} from "rxjs";
import {Add2stuffapiService} from "../../services/add2stuffapi.service";

@Component({
  selector: 'app-cat-adder',
  templateUrl: './cat-adder.component.html',
  styleUrls: ['./cat-adder.component.scss']
})
export class CatAdderComponent {
  control = new FormControl('');
  card_search: Observable<string[]>;
  current_card = null;
  selected_card = null;


  constructor(private api_mod: Add2stuffapiService) {
  }

  ngOnInit() {
    this.card_search = this.control.valueChanges.pipe(
      startWith(''), switchMap(async term => {
        return await this.api_mod.autocompleteCard(term);
      }
    ));
  }

  selectCard(event: any) {
    this.selected_card = {};
    this.current_card = event.option.value;
    this.api_mod.getCardInfo(this.current_card).then((card_data: any) => {
      this.selected_card = card_data;
    })
  }

}
