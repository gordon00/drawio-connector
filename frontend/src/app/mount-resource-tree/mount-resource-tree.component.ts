import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, map, merge, Observable, tap} from "rxjs";

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];


@Component({
  selector: 'app-mount-resource-tree',
  templateUrl: './mount-resource-tree.component.html',
  styleUrls: ['./mount-resource-tree.component.less']
})
export class MountResourceTreeComponent {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new CustomMatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}

export class CustomMatTreeNestedDataSource<T> extends DataSource<T> {
  /**
   * Data for the nested tree
   */
  get data() {
    return this._data.value;
  }
  set data(value: T[]) {
    this._data.next(value);
  }
  private readonly _data = new BehaviorSubject<T[]>([]);

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return merge(...([collectionViewer.viewChange, this._data] as Observable<unknown>[])).pipe(
      map(() => this.data),
      tap(() => console.log("toto"))
    );
  }

  disconnect() {
    // no op
  }
}
