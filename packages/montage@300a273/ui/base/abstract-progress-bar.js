var AbstractControl=require("./abstract-control").AbstractControl,AbstractProgressBar=exports.AbstractProgressBar=AbstractControl.specialize({constructor:{value:function AbstractProgressBar(){if(this.constructor===AbstractProgressBar)throw Error("AbstractProgressBar cannot be instantiated.");this.super()}}});AbstractProgressBar.addAttributes({value:{dataType:"number"},max:{dataType:"number"}});