const tinderUser = new Object()       //{} //singleton
// const tinderUser = {}              //non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Jack"
tinderUser.isLoggedIn = false

console.log(tinderUser);            //{ id: '123abc', name: 'Jack', isLoggedIn: false }
console.log(Object.keys(tinderUser));      //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));    //[ '123abc', 'Jack', false ]
console.log(Object.entries(tinderUser));   //[ [ 'id', '123abc' ], [ 'name', 'Jack' ], [ 'isLoggedIn', false ] ]


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jack",
            lastname: "Jerry"
        }
    }
}
// console.log(regularUser.fullname);                          //{ userfullname: { firstname: 'Jack', lastname: 'Jerry' } }
// console.log(regularUser.fullname.userfullname);             //{ firstname: 'Jack', lastname: 'Jerry' }
// console.log(regularUser.fullname.userfullname.firstname);   //Jack

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
// console.log(obj3);         //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);         //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1, ...obj2}
// console.log(obj5);         //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

