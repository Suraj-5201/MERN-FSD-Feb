class bankAccount{
    constructor(name,account_number,ifsc,balance){
        this.name=name
        this.account_number=account_number
        this.ifsc=ifsc
        this.balance=balance
    }

    credit(amount)
    {
        this.balance = this.balance + amount
        console.log(`Current Balance : ${this.balance}`)
    }

    debit(amount)
    {
        if(this.balance>amount)
        {
            this.balance =  this.balance - amount
            console.log(`Current Balance : ${this.balance}`)
        }
        else
        {
            console.log("In-sufficent balance\n")
        }
    }

    checkBalance()
    {
        console.log(this.balance)
    }
}

class ba1 extends bankAccount{
    constructor(name,account_number,ifsc,balance)
    {
        super(name,account_number,ifsc,balance)
    }

    loanRepay(amount)
    {
        this.balance=this.balance - amount
        console.log(`Loan emi debited ${this.balance}`)
    }
    
}

//let acc1 = new bankAccount("Suraj",2345,"CNRB01",10000)
let acc1 = new ba1("Suraj",2345,"CNRB01",10000)

acc1.loanRepay(5000)
acc1.checkBalance()
