import { Component } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {CdkDragDrop,moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model=false;
  searchTerm="";
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
  title = 'assesment6';
  faPlusCircle = faPlusCircle;
  

  days = [
    {
      number: 0,
      topics: [
        {
          number: 0,
          title: 'One',
          type: 'Task',
          content: 'Content',
          mentorInst: 'Read'
        },
        {
          number: 0,
          title: 'two',
          type: 'Pre Read',
          content: 'HTML',
          mentorInst: 'Task'
        },
        {
          number: 0,
          title: 'three',
          type: 'Topic',
          content: 'Content3',
          mentorInst: 'assignment'
        },
      ],
    },
  ];
  global = {
    currentDay: 0,
    currentTopic: 0,
    isTopicSelected: true,
    isContentSelected: true,
    seletedDay:0,
    selectedTopic:0,
    noOfDays :this.days.length
  };

  addButton() {
    let num=0;
    if(this.days.length - 1>=0){
      num=this.days[this.days.length - 1].number + 1;
    }
    let obj = {
      number: num,
      topics: [],
    };
    this.days.push(obj);
    this.global.noOfDays = this.days.length;
    console.log(this.days, this.global.isTopicSelected,this.global.seletedDay);
  }
  contentChange() {
    this.global.isContentSelected = !this.global.isContentSelected;
  }

  addTopic(){
    let obj={
      number: 0,
      title: 'three',
      type: 'Task',
      content: 'root',
      mentorInst: 'english',
    };
    this.days[this.global.currentDay].topics.push(obj);
  }
  onDrop(event:CdkDragDrop<object[]>){
    moveItemInArray(this.days[this.global.currentDay].topics,event.previousIndex,event.currentIndex);
  }
  onDropDay(event:CdkDragDrop<object[]>){
    moveItemInArray(this.days,event.previousIndex,event.currentIndex);
  }
}
