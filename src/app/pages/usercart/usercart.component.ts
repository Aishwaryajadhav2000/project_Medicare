import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from 'src/app/medicines';
import { Product } from 'src/app/model/product.module';
import { FileHandle } from 'src/app/model/file-handle.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {

  id: number;
  medicines: Medicines = new Medicines();
  product: Product[];
  realimage: any;
  data: FileHandle[];

  constructor(
    public auth: AuthService,
    public route: Router,
    public router: ActivatedRoute,
    private httpClient: HttpClient,

  ) { }

  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];
    console.log("Medicine id", this.id);
    this.getproduct();

    this.getallproducts();


  }

  getproduct() {
    this.auth.getmedicin(this.id).subscribe((response: any) => {
      console.log("response", response);

      this.medicines = response;
     let medicinesss = response.medicinImages;
     console.log("image", medicinesss);
    })
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

  getproductss() {
    console.log("get all productss");
    this.auth.getmedicin(this.id).pipe(
      map((x: Product[], i) => x.map((product: Product) => this.auth.createImages(product)))
    )
      .subscribe((response: Product[]) => {
        console.log(response);
        this.product = response;
      });
  }

  checkout(){
    
  }
back(){
  this.route.navigate(['/userhome']);
}
}
