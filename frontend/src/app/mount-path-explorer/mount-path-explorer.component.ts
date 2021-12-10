import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api/api.service";

@Component({
  selector: 'app-mount-path-explorer',
  templateUrl: './mount-path-explorer.component.html',
  styleUrls: ['./mount-path-explorer.component.less']
})
export class MountPathExplorerComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.rootContent().subscribe(console.log);
  }
}
