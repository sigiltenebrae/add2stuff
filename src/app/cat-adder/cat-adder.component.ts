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
  card_control = new FormControl('');
  card_search: Observable<string[]>;
  current_card = null;
  selected_card = null;

  categories = [];
  cat_control = new FormControl('');
  filtered_categories: Observable<any[]>;
  current_cat = null;
  selected_category = null;


  constructor(private api_mod: Add2stuffapiService) {
  }

  ngOnInit() {
    this.api_mod.getCategories().then((categories: any[]) => {
      this.categories = categories;
    });
    this.card_search = this.card_control.valueChanges.pipe(
      startWith(''), switchMap(async term => {
        return await this.api_mod.autocompleteCard(term);
      }
    ));
    this.filtered_categories = this.cat_control.valueChanges.pipe(
      startWith(''), map(value => this._filter_cat(value || ''))
    );
  }

  private _filter_cat(value: string): any[] {
    return this.categories.filter(cat => this._normalizeValue(cat.name).includes(value))
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  selectCard(event: any) {
    this.selected_card = {};
    this.current_card = event.option.value;
    this.api_mod.getCardInfo(this.current_card).then((card_data: any) => {
      this.selected_card = card_data;
    })
  }

  selectCategory(event: any) {
    this.selected_category = event.option.value;
    this.current_cat = this.selected_category.name;

  }

}
