import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Medicines } from 'src/app/medicines';
import { FormsModule, FormBuilder, FormControl } from '@angular/forms';
import { Product } from 'src/app/model/product.module';
import { FileHandle } from 'src/app/model/file-handle.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {

  medicines: Medicines[];
  product: Product[];
  id: number;
  realimage: any;
  data: FileHandle[];
  searchtext: any;
  
  constructor(
    public service: AuthService,
    public route: Router,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    public router: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.getallproducts();

  }

  showimage(product: Product) {
    console.log("works", product);
    //  this.realimage = product.productImages;
    // console.log("realimage", this.realimage);
    data: {
      images: product.medicinImages
    }
    console.log("daata", this.data);
  }
  getallproducts() {
    console.log("get all products");
    this.service.getallproducts().pipe(
      map((x: Product[], i) => x.map((product: Product) => this.service.createImages(product)))
    )
      .subscribe((response: Product[]) => {
        console.log(response);
        this.product = response;
      });
  }

  addmed() {
    this.route.navigate(['/addmedicines']);
  }

  editmedicin(medicinId:number){
     console.log("id iss", medicinId)
    this.route.navigate(['/updatemedicin' , medicinId]);
  }
  deletemed(medicinId:number){
    this.service.deletemedicine(medicinId).subscribe((response:any) =>{

    })
  }

  
}
