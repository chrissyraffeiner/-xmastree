import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BackendService, ITree } from '../shared/backend.service';
import { SaleDataService } from '../shared/sale-data.service';
import { Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent {

  public tree: ITree;
  myForm: FormGroup;


  public constructor(private readonly dataService: SaleDataService, private readonly backendService: BackendService, private fb: FormBuilder, private readonly router: Router) {
    this.tree = dataService.tree!;

    this.myForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+$/u)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+$/u)]],
     // adresse: this.fb.group({
        street: ['', [Validators.required, Validators.minLength(10)]],
        plz: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(4)]],
        location: ['']
      //})
    })
  }

  submitForm(){
    this.myForm.reset();
    this.router.navigate(['paypal'])
  }

}
