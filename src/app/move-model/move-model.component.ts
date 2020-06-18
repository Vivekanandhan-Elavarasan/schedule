import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-move-model',
  templateUrl: './move-model.component.html',
  styleUrls: ['./move-model.component.css']
})
export class MoveModelComponent implements OnInit {

  @Input('global') global;
  @Input('days') days;
  @Input('i') i;
  moveDay=0;

  closeResult = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      console.log(this.closeResult);
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log(this.closeResult);
      return 'by clicking on a backdrop';
    } else {
      console.log(this.closeResult);
      return `with: ${reason}`;
    }
  }
  move(){
    this.days[this.moveDay].topics.push(this.days[this.global.currentDay].topics.splice(this.i,1)[0]);
    this.global.currentTopic=0;
    console.log(this.days);
  }
}
