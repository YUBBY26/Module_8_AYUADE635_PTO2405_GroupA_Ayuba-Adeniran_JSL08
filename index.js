let bankBranchInstance = null;

class BankBranch {
  constructor(branchInfo) {
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }
    return bankBranchInstance;
  }
getBranchInfo() {return this.branchInfo;
}
}
const branchA = new BankBranch({ name: 'Branch A', location: 'City A' });
const branchB = new BankBranch({ name: 'Branch B', location: 'City B' });

console.log(branchA === branchB);
console.log(branchA.getBranchInfo());
console.log(branchB.getBranchInfo());