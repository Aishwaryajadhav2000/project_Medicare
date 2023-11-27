import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/service/auth.service';
import { FileHandle } from 'src/app/model/file-handle.model';
import { Medicines } from 'src/app/medicines';
@Component({
  selector: 'app-updatemed',
  templateUrl: './updatemed.component.html',
  styleUrls: ['./updatemed.component.css']
})
export class UpdatemedComponent implements OnInit{
  
  medicines: Medicines = {
    medicinname: "",
    description: "",
    brand: "",
    price: 0,
    quantity: 0,
    medicinImages:[]
  }
  id: number;
med:any;

  constructor(
    public route: Router,
    public service:AuthService,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    public router: ActivatedRoute,

  ){}
ngOnInit(): void {

  this.id = this.router.snapshot.params['medicinId'];
    console.log("id is", this.id);

    this.service.getmedicin(this.id).subscribe((response:any)=>{
      console.log("response", response);
      this.medicines = response;

    })
  
}
submit() {
  console.log("Values", this.medicines)

  this.service.updatemedicine(this.id, this.medicines).subscribe((response:any) =>{
    console.log("updated", response);
  })
 

//  this.route.navigate(['/manageproducts'])


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





}
