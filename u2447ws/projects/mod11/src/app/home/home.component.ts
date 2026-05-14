import { Component } from '@angular/core';
import { MeetingRoomListComponent } from '../meeting-room-list/meeting-room-list.component';
import { MeetingRoomDetailComponent } from '../meeting-room-detail/meeting-room-detail.component';

@Component({
  selector: 'uuu-home',
  standalone: true,
  imports: [MeetingRoomListComponent, MeetingRoomDetailComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
