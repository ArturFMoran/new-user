import {Component, Input} from '@angular/core';
import { DatePipe, NgForOf} from "@angular/common";
import {UserForm} from "../interfaces";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [
    NgForOf,
    DatePipe,
  ],
  standalone: true
})

export class UserListComponent {
  @Input() users: UserForm[] = [];
}
