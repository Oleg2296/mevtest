var app=angular.module("myApp",["ngAnimate","dndLists"]);app.controller("homeCtrl",["$scope","GellaryServie",function(e,t){e.addImage=function(){if(e.newImage&&e.newImage.url)return t.addImage(e.newImage),e.newImage.description="",e.newImage.url="",void(e.modal=!1);alert("Заповніть всі поля")},e.img=function(t){var n=URL.createObjectURL(t.target.files[0]);e.newImage.url=n}}]),app.controller("gellaryCtrl",["$scope","GellaryServie",function(e,t){e.imageList=[],e.moveX=function(e){var t=document.getElementById("main__corner");angular.element(t)},e.moveItemEnd=function(){e.movedItem=!1},e.moveItemStart=function(){e.movedItem=!0},e.init=function(){e.imageList=t.getImages()},e.init()}]);var images=[{id:1,url:"https://img.grouponcdn.com/deal/5EXVDNMDEe1mtyEK6Pgp/ZC-1057x634/v1/c700x420.jpg",description:"Mountain"},{id:2,url:"http://www.thephotoargus.com/wp-content/uploads/2013/01/mountain-02.jpg",description:"Mountain"},{id:3,url:"https://res.cloudinary.com/simpleview/image/upload/c_limit,f_auto,q_65,w_845/v1/clients/vancouverbc/a-guide-to-grouse-mountain_930ab127-285b-4263-b2b2-7d8c8c250717.jpg",description:"Mountain"},{id:4,url:"http://www.quantumbooks.com/wp-content/uploads/2015/09/K2-Baltoro-Karakoram-Mountains-1024x675.jpg",description:"Mountain"},{id:5,url:"https://res.cloudinary.com/simpleview/image/upload/c_limit,f_auto,q_65,w_845/v1/clients/vancouverbc/a-guide-to-grouse-mountain_930ab127-285b-4263-b2b2-7d8c8c250717.jpg",description:"Mountain"},{id:6,url:"http://www.quantumbooks.com/wp-content/uploads/2015/09/K2-Baltoro-Karakoram-Mountains-1024x675.jpg",description:"Mountain"}];app.factory("GellaryServie",function(){function e(e){e.id=images[images.length-1].id+1;var t=Object.assign({},e);images.push(t)}function t(){return images}return{addImage:e,getImages:t}});