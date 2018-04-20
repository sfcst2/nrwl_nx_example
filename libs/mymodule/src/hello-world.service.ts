import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

  constructor() { }

  sayHello(name: string): string {
    return 'Hello ' + name;
  }
}
