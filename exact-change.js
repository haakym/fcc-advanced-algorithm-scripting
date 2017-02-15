let CashRegister = function(cid) {
  let cashInDrawer = {};
  
  this.setCashInDrawer = (cid) => {
    this.cashInDrawer = cid.reverse().reduce((result, item) => {
			result[item[0]] = {
				'total': ((item[1] *10) *10),
				'value': this.cashValueReference[item[0]]
			};

			return result;
		}, {});
  };

  this.cashValueReference = {
			"ONE HUNDRED":10000,
			"TWENTY":2000,
			"TEN":1000,
			"FIVE":500,
			"ONE":100,
			"QUARTER":25,
			"DIME":10,
			"NICKEL":5,
			"PENNY":1
		};

  this.getTotalCashInDrawer = () => {
  	let total = 0;
  	
  	for(let key in this.cashInDrawer) {
		  if(this.cashInDrawer.hasOwnProperty(key)) {
  				total += this.cashInDrawer[key]['total'];
		  }
		}

		return total;
  };

  this.transaction = (price, cash) => {
  	let changeDue = ((cash *10) *10) - ((price *10) *10);
  	let change = {};

  	if (changeDue > this.getTotalCashInDrawer() ) {
  		return "Insufficient Funds";
  	}

  	for(let key in this.cashInDrawer) {
		  if(this.cashInDrawer.hasOwnProperty(key)) {
					while (changeDue !== 0 
						&& this.cashInDrawer[key]['total'] !== 0 
						&& changeDue >= this.cashInDrawer[key]['value']
					) {
	  				changeDue -= this.cashInDrawer[key]['value'];
	  				this.cashInDrawer[key]['total'] -=  this.cashInDrawer[key]['value'];
	  				
	  				if(!change.hasOwnProperty(key)) {
	  					change[key] = this.cashInDrawer[key]['value'];
	  				} else {
	  					change[key] += this.cashInDrawer[key]['value'];
	  				}
	  			}
		  }
		}

		if (this.getTotalCashInDrawer() === 0) {
			return "Closed";
		} else if (changeDue > 0 || changeDue > this.getTotalCashInDrawer()) {
  		return "Insufficient Funds";
  	}

		return this.changeObjectAs2dArray(change);
  };

	this.changeObjectAs2dArray = (cashObject) => {
		let changeArray = [];
  	
  	for(let key in cashObject) {
  		changeArray.push([
					key,
  				cashObject[key] / 100
			]);
		}

		return changeArray;
	};
  
  this.setCashInDrawer(cid);

};

function checkCashRegister(price, cash, cid) {
	
  let cd = new CashRegister(cid);

  return cd.transaction(price, cash);
}

checkCashRegister(
	19.50,
	20.00, 
	[
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.10],
		["QUARTER", 4.25],
		["ONE", 90.00],
		["FIVE", 55.00],
		["TEN", 20.00],
		["TWENTY", 60.00],
		["ONE HUNDRED", 100.00]
	]
);
