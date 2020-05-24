import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Topic Title</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <form onsubmit="return false">
    <div class="form-group">
      <label for="exampleFormControlInput1">Title</label>
      <input type="text" class="form-control" id="title" placeholder="title">
    </div>
    <div class="form-group">
        <label for="exampleFormControlSelect1">Type</label>
        <select class="form-control" id="type">
          <option>task</option>
          <option>preread</option>
          <option>topic</option>
        </select>
      </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Content</label>
      <textarea class="form-control" id="content" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Instructions for mentor</label>
        <textarea class="form-control" id="mentor" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" value="Submit" onclick="myfunction()">Save</button>
  </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;
  @Output() public myOutput = new EventEmitter();

  public buttonClick(): void {

      this.myOutput.emit('helloworld');
     

  }

  //stored the array of values in index.html

  constructor(public activeModal: NgbActiveModal) {
    
  }
}




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit(): void {
  }

}







