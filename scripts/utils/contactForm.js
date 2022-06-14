export const formHandler = () => {
    const modalBtn = document.querySelectorAll(".contact_button");
    const cross = document.querySelector(".close");
    
    const launchModal = () => {
        contact_modal.style.display = "block";
    }
    
    const closeModal = () => {
        contact_modal.style.display = "none";
    }
    
    
    modalBtn.forEach((btn) => {
        btn.addEventListener("click", launchModal)
    });
    cross.addEventListener("click", closeModal);


/////////////////////////////////////


// validate
let USER_INPUT = {
    firstname: {
        value: null,
        validate: false
    },
    lastname: {
        value: null,
      validate: false
    },
    email: {
        value: null,
        validate: false
    },
    message: {
        value: null,
        validate: false
    },
}

let USER_INPUTOriginal = {
    firstname: {
        value: null,
        validate: false
    },
    lastname: {
        value: null,
        validate: false
    },
    email: {
        value: null,
        validate: false
    },
    message: {
        value: null,
        validate: false
    },
}

// DOM Elements
const modalBtnSubmit = document.querySelectorAll(".contact_button");

//data-error
const formData = document.querySelectorAll(".formData");

//input
const form = document.querySelector("form");
const first = document.querySelector("#firstName");
const last = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

/////////////////////////////////////
  
  // input
  const handlerFirstInput = (event) => {
    // const value = first.value
    const value = event.target.value
    const formData = first.parentElement
    USER_INPUT.firstname.value = value
    console.log(event)
  
    if (value.length <= 1) {
      USER_INPUT.firstname.validate = false
      formData.setAttribute('data-error-visible', true)
      formData.setAttribute('data-error', 'Le prénom doit comporter au moins 2 caractères !')
    }
    else {
      USER_INPUT.firstname.validate = true
      formData.setAttribute('data-error-visible', false)
    }
  }
  
  const lastInput = (event) => {
    const value = event.target.value
    const formData = last.parentElement
    USER_INPUT.lastname.value = value
  
    if (value.length <= 1) {
      USER_INPUT.lastname.validate = false
      formData.setAttribute('data-error-visible', true)
      formData.setAttribute('data-error', 'Le nom doit comporter au moins 2 caractères !')
    }
    else {
      USER_INPUT.lastname.validate = true
      formData.setAttribute('data-error-visible', false)
    }
  }
  
  const emailInput = (event) => {
    const value = event.target.value
    const formData = email.parentElement
    USER_INPUT.email.value = value
    const emailRegex = /^[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,3}$/ // regex maison pour les email
  
    if (emailRegex.test(value)) {
      USER_INPUT.email.validate = true
      formData.setAttribute('data-error-visible', false)
      console.log("ok")
    }
    else {
      USER_INPUT.email.validate = false
      formData.setAttribute('data-error-visible', true)
      formData.setAttribute('data-error', 'L\'email  est invalide !')
      console.log("ko")
    }
  }

  const messageInput = (event) => {
    const value = event.target.value
    const formData = message.parentElement
    USER_INPUT.message.value = value
  
    if (value.length <= 1) {
      USER_INPUT.message.validate = false
      formData.setAttribute('data-error-visible', true)
      formData.setAttribute('data-error', 'Le message doit comporter au moins 2 caractères !')
    }
    else {
      USER_INPUT.message.validate = true
      formData.setAttribute('data-error-visible', false)
    }
  }
  
  const validate = (event) => {
    // on arrête le comportement par défaut (new page)
    event.preventDefault()
    console.log('user responses:', USER_INPUT);
  
    let isValid = true;
  
    for (const input in USER_INPUT) {
      if (USER_INPUT[input].validate === false) {
        if (input !== 'newsletter') {
          isValid = false
        }
      }
    }
  
    if (isValid) {
      //modalbg.classList.remove("appear");
      //modalbgContentThanks.classList.add("appear");
      const form = document.querySelector("form");
      form.reset()
      USER_INPUT = USER_INPUTOriginal;
      const formDataVali = message.parentElement
      formDataVali.setAttribute('data-error-visible', false)
    } else {
      console.warn('Attention: le formulaire a mal été rempli');
      const formDataV = message.parentElement
      formDataV.setAttribute('data-error-visible', true)
      formDataV.setAttribute('data-error', "Le formulaire n'est pas valide !")
    }
  }
  
  /////////////////////////////////////

  modalBtnSubmit.forEach((btn) => btn.addEventListener("click", validate));

  /// form validate ///
  form.addEventListener('submit', validate)
  
  // input modal event
  first.addEventListener("input", handlerFirstInput);
  last.addEventListener("input", lastInput);
  email.addEventListener("input", emailInput);
  message.addEventListener("input", messageInput);
}