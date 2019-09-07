new Vue({
  el:".divlogin",
  data:{
    form:{
      type:0,
      email:"",
      password:""}
  },
  methods:{
    sendForm(){
      if (this.validaType()) {
        console.log(this.form);
      }
    },
    validaType(){
      if(this.form.type==0 && !this.validaEmail && !this.password){
        return true;
      }
      else if(this.form.type==1 && !this.validaEmail){
        return true;
      }
    }
  },
  computed:{
    validaEmail(){
      var exp = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      if(exp.test(this.form.email)){
        return false;
      }else{
        return true;
      }
      return false;
    },
    validaPassword(){
      var exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      if(this.form.password==""){
        return true;
      }else{
        return false;
      }
    },
    title(){
      return (this.form.type==0)?'login':'Recuperar contraseña';
    }

  }
});
