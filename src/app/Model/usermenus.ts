import { ChildrenOutletContexts } from "@angular/router";

export class Usermenus {
    public static  usermenus:Array<any>=[
        //0th index
        {
            "ADMIN":[
                        {label:"Add Employee", link:"add_emp"},
                        {label:"View Employee",link:"view_emp"},
                    ],
            "CRM":[
                        {label:"View Enroll Enquiry",link:"view_enroll_enq"},
                        {label:"View verified Enquiry",link:"view_verified_enq"},
                        {label:"Start Registration",link:"register"},
                        {label:"View Loan Application",link:"view_loan_app "},
                    ],
            "OE":[
                {label:"View Enquiries to Calculate Cibil",link:"cibil"},
                {label:"View Enquiries for Document Verification",link:"verification"}
                    ],
            "CM":null,
            "AH":null


        }
    ]
}
