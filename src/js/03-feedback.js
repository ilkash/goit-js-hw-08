import throttle from 'lodash.throttle'
const KEY = "feedback-form-state"
const formEl= document.querySelector('.feedback-form')
formEl.addEventListener('input', throttle(onInput,500))
formEl.addEventListener('submit',onSubmitForm)

function onInput(e) {
    const obj = {
        email:e.currentTarget.elements.email.value,
        message:e.currentTarget.elements.message.value
    }
    const newObj = JSON.stringify(obj)
localStorage.setItem(KEY,newObj)
}

function getLocalData() {
    const localData = localStorage.getItem(KEY)
    if (localData) {
        const {email,message} = JSON.parse(localData)
        formEl.elements.email.value = email
        formEl.elements.message.value = message
    }
}
getLocalData()

function onSubmitForm(e) {
    e.preventDefault()
      const obj = {
        email:e.currentTarget.elements.email.value,
        message:e.currentTarget.elements.message.value
    }
    console.log(obj)
    e.target.reset()
    localStorage.removeItem(KEY)
}