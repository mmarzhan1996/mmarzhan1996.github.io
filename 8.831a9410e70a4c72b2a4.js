(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{CXQP:function(t,e,n){"use strict";n.r(e),n.d(e,"ShoppingListModule",function(){return m});var i=n("tyNb"),o=n("3Pt+"),r=n("PCNd"),s=n("ozzT"),c=n("fXoL"),b=n("9rNa"),u=n("ofXK"),d=["f"];function a(t,e){if(1&t){var n=c.Nb();c.Mb(0,"button",13),c.Tb("click",function(){return c.bc(n),c.Vb().onDelete()}),c.fc(1,"Delete"),c.Lb()}}var p=function(){function t(t){this.slService=t,this.editMode=!1}return t.prototype.ngOnInit=function(){var t=this;this.subscription=this.slService.startedEditing.subscribe(function(e){t.editedItemIndex=e,t.editMode=!0,t.editedItem=t.slService.getIngredient(e),t.slForm.setValue({name:t.editedItem.name,amount:t.editedItem.amount})})},t.prototype.onSubmit=function(t){var e=t.value,n=new b.a(e.name,e.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,n):this.slService.addIngredient(n),this.editMode=!1,t.reset()},t.prototype.onClear=function(){this.slForm.reset(),this.editMode=!1},t.prototype.onDelete=function(){this.slService.deleteIngredient(this.editedItemIndex),this.onClear()},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.\u0275fac=function(e){return new(e||t)(c.Jb(s.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){var n;1&t&&c.jc(d,1),2&t&&c.Zb(n=c.Ub())&&(e.slForm=n.first)},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){if(1&t){var n=c.Nb();c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"form",2,3),c.Tb("ngSubmit",function(){c.bc(n);var t=c.ac(3);return e.onSubmit(t)}),c.Mb(4,"div",0),c.Mb(5,"div",4),c.Mb(6,"label",5),c.fc(7,"Name"),c.Lb(),c.Kb(8,"input",6),c.Lb(),c.Mb(9,"div",7),c.Mb(10,"label",8),c.fc(11,"Amount"),c.Lb(),c.Kb(12,"input",9),c.Lb(),c.Lb(),c.Mb(13,"div",0),c.Mb(14,"div",1),c.Mb(15,"button",10),c.fc(16),c.Lb(),c.ec(17,a,2,0,"button",11),c.Mb(18,"button",12),c.Tb("click",function(){return e.onClear()}),c.fc(19,"Clear"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&t){var i=c.ac(3);c.zb(15),c.Wb("disabled",!i.valid),c.zb(1),c.gc(e.editMode?"Update":"Add"),c.zb(1),c.Wb("ngIf",e.editMode)}},directives:[o.u,o.m,o.n,o.a,o.l,o.o,o.s,o.p,o.q,u.i],styles:[""]}),t}();function l(t,e){if(1&t){var n=c.Nb();c.Mb(0,"a",4),c.Tb("click",function(){c.bc(n);var t=e.index;return c.Vb().onEditItem(t)}),c.fc(1),c.Lb()}if(2&t){var i=e.$implicit;c.zb(1),c.ic(" ",i.name," (",i.amount,") ")}}var f=function(){function t(t){this.slService=t}return t.prototype.ngOnInit=function(){var t=this;this.ingredients=this.slService.getIngredients(),this.subscription=this.slService.ingredientsChanged.subscribe(function(e){t.ingredients=e})},t.prototype.onEditItem=function(t){this.slService.startedEditing.next(t)},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.\u0275fac=function(e){return new(e||t)(c.Jb(s.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Kb(2,"app-shopping-edit"),c.Kb(3,"hr"),c.Mb(4,"ul",2),c.ec(5,l,2,2,"a",3),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(5),c.Wb("ngForOf",e.ingredients))},directives:[p,u.h],styles:[""]}),t}(),m=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({imports:[[o.j,i.f.forChild([{path:"",component:f}]),r.a]]}),t}()}}]);