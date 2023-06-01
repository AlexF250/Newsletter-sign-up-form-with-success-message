const input = document.querySelector('.input');
const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const button = document.querySelector('.btn');
const message = document.querySelector('.emailText');
const container = document.querySelector('.container');

button.addEventListener('click',()=>{
if(validEmail.test(input.value)){
    console.log('good')
    //container.remove()
    successMessage()
}
else{

    input.style.background = 'hsl(4, 100%, 85%)';
    message.classList.add('error');
    input.style.color = 'hsl(4, 100%, 67%)'
    input.style.border = '1px solid hsl(4, 100%, 67%)'
}
})

const successMessage = ()=>{
    const messageContainer = document.createElement('DIV');
    const image = document.createElement('img');
    const text = document.createElement('p');
    const title = document.createElement('h2');
    const btn = document.createElement('button');
    const email = document.createElement('p');
    const aText = document.createElement('p');
    const textContainer = document.createElement("p")

    textContainer.classList.add("textContainer")
    image.classList.add("image");
    text.classList.add("message");
    email.classList.add("mail");
    aText.classList.add("aMessage");
    messageContainer.classList.add("mContainer");
    title.classList.add("mTitle");
    btn.classList.add("btn");
    btn.classList.add('confirm');
    
    email.textContent = `${input.value}`
    image.setAttribute('src',"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21'%3E%3Cg fill='none'%3E%3Ccircle cx='10.5' cy='10.5' r='10.5' fill='%23FF6155'/%3E%3Cpath stroke='%23FFF' stroke-width='2' d='M6 11.381 8.735 14 15 8'/%3E%3C/g%3E%3C/svg%3E");
    title.textContent = 'Thanks for subscribing!';
    text.textContent = `A confirmation email has been sent to`;
    btn.textContent ='Dismiss message'
    aText.textContent = `Please open it and click the button inside to confirm your subscription.`;
    
    messageContainer.appendChild(image)
    messageContainer.appendChild(title)
    textContainer.appendChild(text)
    textContainer.appendChild(email)
    textContainer.appendChild(aText)
    messageContainer.appendChild(textContainer)
    messageContainer.appendChild(btn)

    return container.replaceWith(messageContainer)
}