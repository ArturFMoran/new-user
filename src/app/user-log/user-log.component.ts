import { Component, Input } from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class UserLogComponent {
  @Input() logMessage: string = 'Chama';
}
