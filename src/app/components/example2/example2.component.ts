import { Component, OnInit } from '@angular/core';

export interface Meetup {
  id: number;
  date: string;
  title: string;
}

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss'],
})
export class Example2Component implements OnInit {
  meetups: Meetup[] = [];

  ngOnInit(): void {
    this.meetups = [
      { id: 1, date: 'Jan 11, 2022', title: 'Angular Mentors & Mentees' },
      { id: 2, date: 'Feb 8, 2022', title: 'Custom Directives' },
      { id: 3, date: 'Mar 8, 2022', title: 'Custom Pipes' },
    ];
  }

  updateMeetups() {
    this.meetups = [
      { id: 1, date: 'Jan 11, 2022', title: 'Angular Mentors & Mentees' },
      { id: 2, date: 'Feb 8, 2022', title: '(CANCELED due to blizzard)' },
      { id: 3, date: 'Mar 8, 2022', title: 'Custom Pipes' },
    ];
  }

  trackById(index: number, meetup: Meetup) {
    return meetup.id;
  }
}
