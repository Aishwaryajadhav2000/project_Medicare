import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Medicines } from 'src/app/medicines';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.module';
import { FileHandle } from 'src/app/model/file-handle.model';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-medicare',
  templateUrl: './medicare.component.html',
  styleUrls: ['./medicare.component.css']
})
export class MedicareComponent implements OnInit {

  medicines: Medicines[];
  product: Product[];
  id: number;
  realimage: any;
  data: FileHandle[];

  constructor(
    public route: Router,
    public auth: AuthService,
    public router: ActivatedRoute,
    private httpClient: HttpClient,

  ) { }

  ngOnInit(): void {

    this.getallproducts();

    this.id = this.router.snapshot.params['medicinId'];
    console.log("id is", this.id);

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
    this.auth.getallproducts().pipe(
      map((x: Product[], i) => x.map((product: Product) => this.auth.createImages(product)))
    )
      .subscribe((response: Product[]) => {
        console.log(response);
        this.product = response;
      });
  }




  register() {
    this.route.navigate(['/registration'])
  }
  login() {
    this.route.navigate(['/login'])
  }

  // getallproducts(){
  //   this.auth.getallproducts().subscribe((response:any)=>{
  //     console.log("response", response);

  //     this.medicines = response;
  //   })
  // }

  buynow(medicinId: number) {
    console.log("id is", medicinId);
   

    this.route.navigate(['/usercart', medicinId])

  }

}
