// Create a BankAccount class with the following:
// - Properties: accountNumber, balance
// - Methods: 
//   - deposit(amount): Adds the amount to the balance.
//   - withdraw(amount): Deducts the amount from the balance if there are sufficient funds.
// Add a static method compareAccounts(account1, account2) that compares two BankAccount objects and returns the account with the higher balance.

class BankAccount {
  // YOUR CODE HERE
  constructor (accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  getAccountNumber() {
    return this.accountNumber;
  }

  getBalance() {
    return this.balance;
  }

  //Deposit Method
  deposit(amount){
    if(amount > 0) {
      this.balance += amount;
      console.log(`Deposit successful. New balance: ${this.balance}.`);
    }else {
      console.log(`Deposit not successful.`);
    }
  }

  //Withdraw Method
  withdraw(amount){
    if(amount > 0 && amount <= this.balance){
      this.balance -= amount;
      console.log(`Withdraw successful. New balance: ${this.balance}.`);
        }else {
      console.log(`Withdraw not successful.`);
      }
    }

    //Static Method
    static compareAccounts(account1, account2) {
      return account1.getBalance() > account2.getBalance() ? account1 : account2;
    }
  }



// TEST CASE / DRIVER CODE
const account1 = new BankAccount(123456, 500);
const account2 = new BankAccount(654321, 1000);
account1.deposit(300); // account1 becomes 800
account2.withdraw(300); // account2 becomes 700
const richerAccount = BankAccount.compareAccounts(account1, account2);
console.log(`Account ${richerAccount.accountNumber} has the higher balance.`);
// Expected output: "Account 123456 has the higher balance."