import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  @Input('topic') topic;
  @Input('global') global;
  @Input('days') days;
  @Input('i') i;
  constructor() {}
  ngOnInit(): void {}

  selectTopic() {
    this.global.selectedTopic = this.i;
    this.global.isTopicSelected = true;
    this.global.currentTopic = this.i;
    console.log(this.global.isTopicSelected);
  }
  rmvTopic() {
    this.days[this.global.currentDay].topics.splice(this.i, 1);
    this.global.selectedTopic = 0;
    this.global.isTopicSelected = false;
  }
  
}
