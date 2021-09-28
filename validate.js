$("#contactForm").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email:true
      },
      mobile: {
        required: true,
        digits:true
      },
      message: {
        required: true
      }
    },
    
  
  submitHandler: function(form){
    $.ajax({
      url:"https://script.google.com/macros/s/AKfycbxcHpaH37-TKqX4dDe7tI4-jZIMbuUoxYtPhWjauQj9M79PMiDv9GinzREK_Ub0xOCCHw/exec",
      data:$("#contactForm").serialize(),
      method:"post",
      success:function (response){
          alert("Form Submitted Successfully...we'll contact you soon");
          
          
      },
      error:function (err){
          alert("Something Error")
  
      }
  })
  }
  });