
let arr_2 =['jane','mike','hike','jane','hike','mike','mike','jane'];
/*function uniqElem(arr) {
    result =[];
    for (let elem of arr) {
      if (!result.includes(elem)) {
          result.push(elem);
      }  
    }
    return result;
}
console.log(uniqElem(arr_2));*/
/*let total ={};
for (const elem of arr_2) {
    total[elem]=(total[elem]||0)+1;
}
console.log(total);*/
let ar = arr_2.reduce((map,fruit)=>({
...map,[fruit]:(map[fruit]||0)+1
}),{})
console.log(ar);

let array_1= [{id:'jane',name:'jane Daka'},
              { id:'mathews',name:'mathews Banda'}
]
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
};
//console.log(groupById(array_1));
let users =[
    {id:1,email:'abc@gmail.com'},
    {id:2,email:'def@gmail.com'},
    {id:3,email:'ghi@gmail.com'}
];
const profiles =[
    {userId:1, firstName:'jane',lastName:'Tembo'},
    {userId:2, firstName:'mathews', lastName:'Zulu'},
    {userId:3, firstName:'hike', lastName:'mumba'}
]
const usersWithProfiles = users.map((user)=> {let profile = profiles.find((profile)=>(user.id==profile.userId));
return {...user , profile};
});
//however this method is ineficient with short arrays due to find method ,even more problem with longer arrays.

console.log(usersWithProfiles);
// to make the method eficient we use the method below.




//transform the profile to object keyed userids.
let profileByUserIds =profiles.reduce((next ,profile)=>{
    const {userId}=profile;
    return {...next,[userId]:profile};
},{});
console.log(profileByUserIds);
// then we can proceed to find userswithprofiles.
const usersWithProfile =users.map((user)=>{
    return {...user, profiles:profileByUserIds[user.id]}
});
console.log(usersWithProfile);