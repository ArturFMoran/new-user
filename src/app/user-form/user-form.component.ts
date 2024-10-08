import { Component, Output, EventEmitter } from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  imports: [
    NgForOf,
    FormsModule
  ],
  standalone: true
})
export class UserFormComponent {
  firstName = ''; // Имя пользователя
  lastName = '';  // Фамилия пользователя
  gender = 'М';   // Пол пользователя (по умолчанию - мужской)

  @Output() userCreated = new EventEmitter<{ firstName: string; lastName: string; gender: string }>();

  // Метод для обработки отправки формы
  onSubmit() {
    // Эмитируем событие с данными о пользователе
    this.userCreated.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender
    });

    // Сбрасываем значения полей формы после отправки
    this.firstName = '';
    this.lastName = '';
    this.gender = 'М'; // Возвращаем пол к значению по умолчанию
  }
}
