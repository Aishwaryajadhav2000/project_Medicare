import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicines } from '../medicines';
import { FileHandle } from '../model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from '../model/product.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseURL = "http://localhost:8080/simplilearn/medicare";



  constructor(
    private httpclient:HttpClient,
    private sanitizer: DomSanitizer
  ) { }

getusers(){
  return this.httpclient.get(this.baseURL + "/users");
}

register(useradd){
 return this.httpclient.post(this.baseURL + "/register" , useradd);
}

login(emailid){
  return this.httpclient.get(this.baseURL + "/login" + "/" + emailid);
}

addmedicine(medicine){
  return this.httpclient.post(this.baseURL +"/addproduct", medicine)
}



allmedicines(){
  return this.httpclient.get(this.baseURL +"/allmedicines");
}

buymedicine(id){
return this.httpclient.post(this.baseURL +"/getmedicine", id);
}

updatemedicine(id:number, medicine:Medicines){
  return this.httpclient.post(this.baseURL + "/updatemedicin" + "/" + id, medicine);
}
deletemedicine(medicinId:number){
  return this.httpclient.post(this.baseURL + "/deletemedicin", medicinId);
}

addmedicineswithimages(medicine:FormData) {
  console.log("apicalling")
  return this.httpclient.post<Medicines>(this.baseURL + "/addmediciness", medicine);

}


// addproduct
addnewproduct(medicines:FormData){
  return this.httpclient.post<Medicines>(this.baseURL +"/addproductsimg", medicines)
}

getallproducts(){
  return this.httpclient.get<Medicines[]>(this.baseURL + "/getallmedicines");
}

//one medicines
getmedicin(id){
  return this.httpclient.get<Medicines[]>(this.baseURL + "/medicines" + "/" + id)
}


public createImages(product: Product) {

  const productImages: any[] = product.medicinImages;

  const productImagesToFileHandle: FileHandle[] = [];

  for (let i = 0; i < productImages.length; i++) {
    const imageFileData = productImages[i];

    const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type)

    const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type })

    const finalFileHandle: FileHandle = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    };

    productImagesToFileHandle.push(finalFileHandle);

  }
  product.medicinImages = productImagesToFileHandle;
  return product;
}

public dataURItoBlob(picBytes, imageType) {
  const byteString = window.atob(picBytes);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);

  }

  const blob = new Blob([int8Array], { type: imageType });
  return blob;
}



}
