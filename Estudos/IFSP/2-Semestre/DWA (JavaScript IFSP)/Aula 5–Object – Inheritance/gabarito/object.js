const statement = "create table author (id number, name string, age number, city string, state string, country string)"
const regexp = /create table ([a-z]+) \((.+)\)/; // de a a z - + um ou mais caracteres
const parsedstatement = statement.match(regexp);
const tableName = parsedstatement[1];
let columns =  parsedstatement[2];
columns = columns.split(",");
//console.log(parsedstatement);
//console.log(tableName);
//console.log(columns);
const database = {
	tables:{
		[tableName]: {
				columns:{}
		}
	}
	
};
//console.log(database);
for (let column of columns){
		column = column.trim().split(" ");
		const name = column[0];
		const type = column [1];
		database.tables[tableName].columns[name] = type;
}
console.log(JSON.stringify(database,undefined, " "));
console.log(regexp)
