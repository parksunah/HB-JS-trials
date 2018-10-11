/////////////////////////////////////////////////////////
// PART 1

/////////////////////////////////////////////////////////
// Show Profile Info

// Add function to prnt profile info
function showProfile(name, catchphrase, location) {
	console.log(`PROFILE:\n 
		 Name: ${name} \n 
		 Catchphrase: ${catchphrase}\n 
		 Location: ${location}`);
}

showProfile('Skittle', 'Mrrr', 'Lake');
/////////////////////////////////////////////////////////
// Display Likes
const interests = [
  'being annoying',
  'seeds',
  'staring at human food'
];

// Add function to print interests
function showLikes(str_array) {

	console.log('THINGS I LIKE:');
	for (let item of str_array) {
		console.log(`    ${item}`);
	}
}

showLikes(interests)


/////////////////////////////////////////////////////////
// Display Favorites
const favorites = {
  // Add more favorites
  'food': 'pebbles',
  'tree': 'palm',
  'quote': 'Bock bock bock'
};

// Add function to print favorites
function showFavorites(dict) {
	console.log('FAVORITES:');

	for (let [key, value] of Object.entries(dict)) {
		console.log(`   ${key}: ${value}`);
	}
}



showFavorites(favorites);


/////////////////////////////////////////////////////////
// PART 2

/////////////////////////////////////////////////////////
// Add Transactions
function addTransaction(date, amount, obj) {
	obj[date] = amount;

	return obj
}

const transactions = {};

addTransaction('may2', -500, transactions);
addTransaction('may13', +1200, transactions);
addTransaction('may15', -100, transactions);
addTransaction('may21', -359, transactions);
addTransaction('may29', +2200, transactions);

console.log(transactions);


// Add function to add transaction

// Create object to hold transactions

// Add transactions to object


/////////////////////////////////////////////////////////
// Get Balance Status

// Add function to calculate balance status
function getBalanceStatus(balance) {
	if (balance < 0) {
		console.log('YOU ARE OVERDRAWN');
	}
	else if (balance < 20) {
		console.log('Warning! Wour balance is almost 0!');
	}
	else {
		console.log('Normal');
	}
} 

getBalanceStatus(100);
getBalanceStatus(-20);
getBalanceStatus(10);


/////////////////////////////////////////////////////////
// Calculate Current Balance

// Add function to calculate and return current balance
function getCurrentBalance(balance, col) {

	for (let value of Object.values(col)) {
		if (balance < 0) {
			balance -= 25;
		}
		balance += value;
	}
	console.log(balance);
}

// should return 2516
getCurrentBalance(100, transactions);

// should return 95
getCurrentBalance(100, { sept3: -5});
/////////////////////////////////////////////////////////
// Show Account Activity

// Add function to print account activity
function showAcctActivity(balance, transaction) {
	console.log('TRANSACTIONS');
	for (let [key,value] of Object.entries(transaction)) {
	    console.log(`${key}:${value}`);
	}
	console.log(`CURRENT BALANCE:`);
	getCurrentBalance(balance, transaction);
	console.log(`CURRENT STATUS:`);
	getBalanceStatus(balance);
}

showAcctActivity(100, { sept3: -5, sept4: -20 });


/////////////////////////////////////////////////////////
// Creating a User Object
const melon_info = {
	name: 'Skittle',
	catchphrase: 'Bock bock bock',
	location: 'Lake',
	interests: interests,
	favorites: favorites,
	transactions: transactions,
	startingMeloncoinBalance: 100
}

// Add user object

// Add function to print user dashboard
function showDashboard(user_data) {
	showProfile(user_data.name, user_data.catchphrase, user_data.location);
	showLikes(user_data.interests);
	showFavorites(user_data.favorites);
	showAcctActivity(user_data.startingMeloncoinBalance, user_data.transactions);
}

showDashboard(melon_info);
/////////////////////////////////////////////////////////
// PART 3

// Add object that keeps track of premium members
const premiumMembers = {
	Nelom: {Email: 'nel@om.me', Tier: 'gold'},
	Shell: {Email: 'sh@ell.by', Tier: 'gold'},
	Nardog: {Email: 'nardog@sing.er', Tier: 'silver'}
}
// Add function to return emails of premium members
function getPremiumEmails(premiumMembers) {
	premiumEmails = [];
	for (let value of Object.values(premiumMembers)) {
		premiumEmails.push(value.Email);
	}
	console.log(premiumEmails);
	return premiumEmails
}

getPremiumEmails(premiumMembers);

/////////////////////////////////////////////////////////
// PART 4

// Add function to assign interns to workdays

// Add a function to generate customer support hours

