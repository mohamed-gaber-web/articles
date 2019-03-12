import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { trigger, transition, query, group, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('RouterAnimate', [
      transition('1 => 2, 2 => 1, 1 => 3, 3 => 1, 2 => 3, 3 => 2', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)'
            })
          ]),
          animate(500, style({
            transform: 'translateX(0)'
          }))
        ]),
        query(':leave', [
          style({
            transform: 'translateX(0)'
          }),
          animate(500, style({
            transform: 'translateX(-100%)'
          }))
        ])
      ])
    ])
  ]

})

export class AppComponent {}

