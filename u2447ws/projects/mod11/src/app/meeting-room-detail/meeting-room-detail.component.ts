import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MeetingRoom } from '../shared/meeting-room';
import { MeetingRoomService } from '../shared/meeting-room.service';

@Component({
  selector: 'app-meeting-room-detail',
  imports: [FormsModule],
  templateUrl: './meeting-room-detail.component.html',
  styles: ``
})
export class MeetingRoomDetailComponent {
  service = inject(MeetingRoomService);

  public capacity: any[] = [
    { value: 5, text: "5人" }, { value: 10, text: "10人" },
    { value: 15, text: "15人" }, { value: 20, text: "20人" },
    { value: 30, text: "30人" }, { value: 40, text: "40人" },
    { value: 50, text: "50人" }, { value: 100, text: "100人" },
    { value: 200, text: "200人" }];
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = new MeetingRoom();
  }

}
