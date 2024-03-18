let arrOfAccounts=[];

function BankAccount(accNo, name, type, balance, active){
    this.accountNumber=accNo,
    this.name=name,
    this.type=type,
    this.balance=balance,
    this.activeStatus= active,

    this.deposit = function(amount){
        this.balance+=amount;
    },

    this.withdraw = function(amount){
        this.balance-= amount;
    },

    this.checkBalance = function(){
        console.log(this.balance);
    },

    this.active= function(){
        if(this.activeStatus == true){
            console.log("Active");
        }
    }
    
    arrOfAccounts.push(this);
    // console.log(arrOfAccounts)
    // console.log(this);
}

let acc1= new BankAccount(12425, "Akash Yadav" , "Savings" , 0 , true);
console.log(acc1);
acc1.deposit(500);
acc1.withdraw(250);
acc1.checkBalance();
acc1.active();
acc1.deposit(5000);
let acc2= new BankAccount(1008 , "Shivam" , "Current" , 0 , true);
console.log(acc2);
acc2.deposit(500);
acc2.deposit(1000);
acc2.withdraw(250);
acc2.withdraw(700);
acc2.checkBalance();
acc2.active();

// console.log(arrOfAccounts);

function getTotalBalance(arrOfAccounts){
    let sum=0;
    for(let i=0;i<arrOfAccounts.length;i++){
        if(arrOfAccounts[i].activeStatus == true){
            sum+= arrOfAccounts[i].balance;
        }
    }
    return sum;
}

let totalBankBalance = getTotalBalance(arrOfAccounts);
console.log("Total Balance of all active accounts are:- "+totalBankBalance);