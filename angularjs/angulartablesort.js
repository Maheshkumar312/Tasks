var app = angular.module("simpleApp",[]);


function simpleController()
{
this.collection=[
  {
    
    'name':'Mahesh',
    'age':'24',
    'city':'Malleru'
  },
  {
    'name':'Ravi',
    'age':'24',
    'city':'palamaner'
  },
  {

    'name':'Raju',
    'age':'24',
    'city':'chittoor'
  },
  {
    
    'name':'Ram',
    'age':'24',
    'city':'bommanahalli'
  },
];
this.limit=5;
}
simpleController.prototype.addEntry=function()
{
   this.collection.push(this.newData); 
   this.newData='';
};
app.controller("simpleController",simpleController)
