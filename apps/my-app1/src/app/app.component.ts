import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '@ngrx-data/mymodule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit() {
    console.log(this.helloWorldService.sayHello());
  }
}
