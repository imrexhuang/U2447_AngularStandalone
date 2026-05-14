import { Component, inject } from '@angular/core';
import { MeetingRoomService } from '../shared/meeting-room.service';
import { MeetingRoom } from '../shared/meeting-room';

@Component({
  selector: 'app-meeting-room-list',
  imports: [],
  templateUrl: './meeting-room-list.component.html',
  styles: ``
})
export class MeetingRoomListComponent {
  service = inject(MeetingRoomService);
  constructor() {
    this.service.getList();
  }

  public populateForm(mr: MeetingRoom) {
     this.service.getByID(mr.id);
  }


}
