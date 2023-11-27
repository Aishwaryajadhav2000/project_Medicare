import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/service/auth.service';
import { FileHandle } from 'src/app/model/file-handle.model';
import { Medicines } from 'src/app/medicines';

@Component({
  selector: 'app-addmedicines',
  templateUrl: './addmedicines.component.html',
  styleUrls: ['./addmedicines.component.css']
})
export class AddmedicinesComponent implements OnInit{
  
  medicines: Medicines = {
    medicinname: "",
    description: "",
    brand: "",
    price: 0,
    quantity: 0,
    medicinImages:[]
  }

  constructor(
    public route: Router,
    public service:AuthService,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ){}
ngOnInit(): void {
  
}
submit() {
  console.log("Values", this.medicines)

  const productFormData = this.prepareformdata(this.medicines);

 console.log("Values2", this.medicines)

  // this.service.addmedicine(this.medicines).subscribe(data => {
  //   console.log("response", data);
  // })

  this.service.addnewproduct(productFormData).subscribe(
    (response:Medicines) =>{
      console.log("added", response);
    }
  )

 this.route.navigate(['/manageproducts'])


}

prepareformdata(medicines: Medicines): FormData {

  console.log("prepareformdata");
  const formData = new FormData();

  formData.append(
    'product',
    new Blob([JSON.stringify(medicines)], { type: 'application/json' })
  );
  for (var i = 0; i < medicines.medicinImages.length; i++) {
    formData.append(
      'imageFile',
      medicines.medicinImages[i].file,
      medicines.medicinImages[i].file.name,
    )
  }
  return formData;
}


anFileSelected(event) {

  console.log(event);

  if (event.target.files) {
    const file = event.target.files[0];

    const fileHandle: FileHandle = {
      file: file,
      url: this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
    this.medicines.medicinImages.push(fileHandle);
    console.log("last");

  }

}








































// updateMed() {
//   let id = localStorage.getItem("medicineid");
//   console.log("medicin id from localstorage", id);


//   this.httpClient.get("http://localhost:8080/simplilearn/medicare/updatem" + "/" + id).subscribe((response: any) => {
//     console.log("get Medicine by id response", response);
//   })


// }

// submit() {
//   console.log("Values", this.medicines)

//   this.service.addmedicinesapi(this.medicines).subscribe(data => {

//     console.log("response", data);

//   })

//   console.log("fail");

//   this.route.navigate(['/adminhome']);


// }


// submit() {
//   console.log("Values", this.medicines)

//  const productFormData = this.prepareformdata(this.medicines);

//  console.log("Values2", this.medicines)

//   this.service.addmedicineswithimages(productFormData).subscribe(data => {

//     console.log("response", data);

//   })

//   console.log("fail");

//   this.route.navigate(['/adminhome']);
// }

// prepareformdata(medicines: Medicines): FormData {

//   console.log("prepareformdata");
//   const formData = new FormData();

//   formData.append(
//     'medicines',
//     new Blob([JSON.stringify(medicines)], { type: 'application/json' })
//   );

//   for (var i = 0; i < medicines.productImages.length; i++) {
//     formData.append(
//       'imageFile',
//       medicines.productImages[i].file,
//       medicines.productImages[i].file.name,
//     )
//   }

//   return formData;


// }


// anFileSelected(event) {

//   console.log(event);

//   if (event.target.files) {
//     const files = event.target.files[0];

//     const fileHandle: FileHandle = {
//       file: files,
//       url: this.sanitizer.bypassSecurityTrustUrl(
//         window.URL.createObjectURL(files)
//       )
//     }

//     // this.medicines.productImages.push(fileHandle);
//     this.medicines.productImages.push(fileHandle);

//   }

// }




}
