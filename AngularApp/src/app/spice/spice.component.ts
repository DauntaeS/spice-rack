import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SpiceService } from '../shared/spice.service';

@Component({
  selector: 'app-spice',
  templateUrl: './spice.component.html',
  styleUrls: ['./spice.component.css'],
  providers: [SpiceService]
})
export class SpiceComponent implements OnInit {

  constructor(public spiceService: SpiceService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(spiceForm: any) {
    // Add form submission logic here
    console.log('Form submitted!', spiceForm);
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.spiceService.selectedSpice = {
      _id: "",
      name: "",
      qauntity: 0,
      amount: "",
      description: "",
      dateAdded: "",
      expDate: "",
    }
  }
}
