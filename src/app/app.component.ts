import { Component, ViewChild } from '@angular/core';
import { UserLogComponent } from "./user-log/user-log.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserFormComponent } from "./user-form/user-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    UserLogComponent,
    UserListComponent,
    UserFormComponent
  ],
  standalone: true
})

export class AppComponent {
  users: { firstName: string; lastName: string; gender: string; creationDate: Date }[] = [];
  logMessage = '';

  @ViewChild(UserLogComponent) userLogComponent!: UserLogComponent; // Добавляем ссылку на UserLogComponent

  addUser(user: { firstName: string; lastName: string; gender: string }) {
    const newUser = { ...user, creationDate: new Date() };
    this.users.push(newUser);

    // Формируем лог-сообщение
    this.logMessage = `Создан новый пользователь: ${user.firstName} ${user.lastName}`;

    // Вызываем метод showMessage у UserLogComponent
    this.userLogComponent.showMessage(this.logMessage);
  }
}
