import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from '../app/Model/enquiry';
import { Customer } from '../app/Model/customer';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }


  onSubmit(e:Enquiry)
  {
    return this.http.post(`http://localhost:8082/enquiry/saveEnquiry`,e)
  }

  getAllEnquiry()
  {
    return this.http.get(`http://localhost:8082/enquiry/getAllEnquiries`)
  }

 ForwardStatus(u:Enquiry)
 {
  console.log("service class");
  console.log(u.enquiryId)
  return this.http.get(`http://localhost:8082/enquiry/setForwardStatus/`+u.enquiryId);

 }


 getForwardedCibilStatusDetails()
 {
  return this.http.get(`http://localhost:8082/enquiry/getForwardCibilStatus`);
 }


 calculateCibil(u:Enquiry)
 {
  return this.http.get(`http://localhost:8082/enquiry/calculateCibil/`+u.enquiryId);
 }


 RegisterCustomer(formdata:FormData)
 {
  
  return this.http.post("http://localhost:8083/customer/saveCustomerDetails",formdata);
  alert(" after data submitted successfully")
 }


 getRegisterCustomerDocuments()
 {
  return this.http.get(`http://localhost:8083/customer/getcustomerdetails`);
 }


 updateVerificationStatus(cust:Customer){
  alert("Customer Document verified successfully")
  return this.http.get(`http://localhost:8083/customer/updateverificationstatus/`+cust.customerId);
 
 }

}
