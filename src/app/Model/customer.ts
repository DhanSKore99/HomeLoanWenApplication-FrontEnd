import { CustomerBankDetails } from "./customer-bank-details"
import { CustomerDocuments } from "./customer-documents"
import { EmploymentDetails } from "./employment-details"
import { GuarantorDetails } from "./guarantor-details"
import { IncomeDetails } from "./income-details"
import { PreviousLoanDetails } from "./previous-loan-details"
import { PropertyDetails } from "./property-details"
import { SanctionedLoanDetails } from "./sanctioned-loan-details"

export class Customer {

	customerId:number
	customerName: string
	customerDateOfBirth: string
	customerGender: string
	maritalStatus: string
	loanAmount: number
	emailId: string
	mobileNumber: number
	pancardNumber: string
	adhaarNumber: string
	address: string

	customerBankDetails: CustomerBankDetails
	incomeDetails: IncomeDetails
	customerDocuments: CustomerDocuments
	employmentdetails: EmploymentDetails
	guarantorDetails: GuarantorDetails
	sanctionedloandetails: SanctionedLoanDetails
	previousLoanDetails: PreviousLoanDetails
	propertyDetails: PropertyDetails












}
