let companies=[];

function login(){

const pass=document.getElementById("password").value;

if(pass==="joie"){

document.getElementById("login").style.display="none";
document.getElementById("main").style.display="block";

loadCompanies();

}else{

alert("パスワードが違います");

}

}

async function loadCompanies(){

const res=await fetch("data/companies.json");
companies=await res.json();

render();

}

function render(filter=""){

const list=document.getElementById("companyList");
list.innerHTML="";

companies
.filter(c=>c.name.includes(filter))
.forEach(c=>{

const li=document.createElement("li");

li.textContent=c.name;

li.onclick=()=>{

location.href="company.html?id="+c.id;

};

list.appendChild(li);

});

}

document.addEventListener("input",e=>{

if(e.target.id==="search"){

render(e.target.value);

}

});

function addCompany(){

const name=prompt("企業名");
const address=prompt("住所");
const email=prompt("メール");

const id=Date.now();

const company={

id:id,
name:name,
address:address,
email:email,
phone:"",
map:"",
notes:"",
years:{
"2025":"",
"2026":"",
"2027":"",
"2028":"",
"2029":""
}

};

companies.push(company);

alert("JSONを手動で保存してください");

console.log(JSON.stringify(companies,null,2));

}
