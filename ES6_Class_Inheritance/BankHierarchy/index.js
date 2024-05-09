// Bank class represents a generic bank entity.
class Bank {
    // Private field #name to store the name of the bank.
    #name;

    // Constructor to initialize the name of the bank.
    constructor(name) {
        this.#name = name;
    }

    // Getter method to retrieve the name of the bank.
    get Name() {
        return this.#name;
    }
}

// Account class represents a bank account.
class Account extends Bank {
    // Private field #balance to store the balance of the account.
    #balance;

    // Constructor to initialize the name of the bank and the balance of the account.
    constructor(name, balance) {
        super(name);
        this.#balance = balance;
    }

    // Getter method to retrieve the balance of the account.
    get Balance() {
        return this.#balance;
    }
}

// SavingsAccount class represents a savings account.
class SavingsAccount extends Account {
    // Private field #interestRate to store the interest rate of the savings account.
    #interestRate;

    // Constructor to initialize the name of the bank, the balance of the account, and the interest rate.
    constructor(name, balance, interestRate) {
        super(name, balance);
        this.#interestRate = interestRate;
    }

    // Getter method to retrieve the interest rate of the savings account.
    get interestRate() {
        return this.#interestRate;
    }

    // Setter method to update the interest rate of the savings account.
    set interestRate(value) {
        this.#interestRate = value;
    }
}

  
  // Example usage
  const savingsAccount = new SavingsAccount("SBI", 5000, 0.05);
  console.log(savingsAccount)
  console.log(savingsAccount.Balance); // 5000
  console.log(savingsAccount.interestRate); // 0.05
  savingsAccount.interestRate = 0.06; // Setting interestRate using SavingsAccount setter
  console.log(savingsAccount.interestRate); // 0.06