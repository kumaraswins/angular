import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-error-display',
  templateUrl: './field-error-display.component.html',
  styleUrls: ['./field-error-display.component.css']
})
export class FieldErrorDisplayComponent implements OnInit {

  @Input() errorMsg: string | undefined;
  @Input() displayError: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

}
