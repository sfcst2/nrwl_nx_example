import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

  constructor() { }

  sayHello(): string {
    return 'Hello world!';
  }
}
