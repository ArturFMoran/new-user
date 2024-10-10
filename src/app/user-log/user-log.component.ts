import { Component, Input } from '@angular/core';
import { NgForOf, CommonModule } from "@angular/common";

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.scss'],
  imports: [
    NgForOf,
    CommonModule,
  ],
  standalone: true
})
export class UserLogComponent {
  @Input() logMessage: string = '';
  currentDate: Date = new Date(); // Восстанавливаем свойство currentDate
  displayMessage: boolean = false; // Флаг для управления отображением

  // Метод для показа сообщения
  showMessage(message: string) {
    this.logMessage = message;
    this.displayMessage = true;

    // Обновляем текущее время при каждом новом сообщении
    this.currentDate = new Date();

    setTimeout(() => {
      this.displayMessage = false; // Скрываем сообщение через 5 секунд
    }, 5000);
  }
}
