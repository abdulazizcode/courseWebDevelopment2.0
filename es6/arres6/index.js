let guest1 = {name:'Abdulaziz', age:21, hometown: 'Dushanbe'};
let guest2 = {name:'Abdurasul', age:46, hometown: 'Rasht'};

function sayHi(){
	console.log('Hi, ' +this.name + ' !');
};

function sayBye(){
	console.log('Bye, ' +this.name + ' !');
};

sayHi.call(guest1);
sayHi.apply(guest1);

