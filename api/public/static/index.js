// atribute url 
const DOMAIN = "https://gcovid.tk"

const LOGO_URL = DOMAIN + "/static/logo.svg"
const SEND_ICON_URL = DOMAIN + "/static/send.svg"
const LINK_CSS = DOMAIN + '/static/style.css'

let socket = io("https://gcovid.tk");


let linkCSS = document.createElement('link')
linkCSS.setAttribute('rel', 'stylesheet')
linkCSS.setAttribute('href', LINK_CSS)

let head = document.querySelector('head')


// header append all child
head.appendChild(linkCSS)

// wrap
let wrap = document.querySelector('.gcovid-wrap')

// component general
let logoImg = document.createElement('img')
logoImg.setAttribute('src', LOGO_URL)

// container
let container = document.createElement('div')
container.classList.add("gcovid-container")

// panel 
let panel = document.createElement('div')
panel.classList.add("gcovid-panel")

// panel header
let panelHeader = document.createElement('div')
panelHeader.classList.add("gcovid-header")

// init panel header child
let titleHeader = document.createElement('span')
titleHeader.innerText = "Gcovid"

// child header left
let panelHeaderLeft = document.createElement('div')

// header append child  left
panelHeaderLeft.appendChild(logoImg)
panelHeaderLeft.appendChild(titleHeader)

// header close
let close = document.createElement('div')
close.classList.add("gcovid-close")

// header append all child
panelHeader.appendChild(panelHeaderLeft)
panelHeader.appendChild(close)


// Init panel body
let panelBody = document.createElement('div')
panelBody.classList.add("gcovid-body")

// Init panel input
let panelInput = document.createElement('div')
panelInput.classList.add("gcovid-input")

let inputText = document.createElement('input')
inputText.setAttribute('type', 'text')
inputText.setAttribute('placeholder', 'Type your answer ...')

let sendButton = document.createElement('img')
sendButton.setAttribute('src', SEND_ICON_URL)


// panel append input
panelInput.appendChild(inputText)
panelInput.appendChild(sendButton)


// panel append all child
panel.appendChild(panelHeader)
panel.appendChild(panelBody)
panel.appendChild(panelInput)


// Button 
let buttonWrap = document.createElement('div');
buttonWrap.classList.add("gcovid-button");

let button = document.createElement('button')

let IconSend = document.createElement('img')
IconSend.setAttribute('src', LOGO_URL)
IconSend.setAttribute('alt', 'icon send')

button.appendChild(IconSend)

buttonWrap.appendChild(button)


container.appendChild(panel)
container.appendChild(buttonWrap)
wrap.appendChild(container)


// hanle click toggle button and panel
let panelToggle = document.querySelector(".gcovid-panel")
let buttonToggle = document.querySelector(".gcovid-button")
let closeToggle = document.querySelector(".gcovid-close")
let bodyChat = document.querySelector('.gcovid-body')
let sendClick = document.querySelector('.gcovid-input img')


buttonToggle.addEventListener('click', () => {
  panelToggle.style.display = "flex";
  buttonToggle.style.display = "none";

  openChat()
});

closeToggle.addEventListener('click', () => {
  panelToggle.style.display = "none";
  buttonToggle.style.display = "flex";
});


let currentQuestion = {}
let currentReply = ''
let endFlag = false


// Listen 
let inputMessage = document.querySelector('.gcovid-input input')
inputMessage.addEventListener('keydown', checkEnterEvent)
inputMessage.addEventListener('input', setInputValue)


sendClick.addEventListener('click', () => {
  inputMessage.value = ""

  // append to body chat
  let answer = document.createElement('p')
  answer.innerText = currentReply

  let messageRight = document.createElement('div')
  messageRight.classList.add('message-right')
  messageRight.appendChild(answer)

  panelBody.appendChild(messageRight)

  sendMessage()
})


function setInputValue(event) {
  currentReply = event.target.value
}

function checkEnterEvent(event) {
  if (event.key === 'Enter') {
    inputMessage.value = ""

    // append to body chat
    let answer = document.createElement('p')
    answer.innerText = currentReply

    let messageRight = document.createElement('div')
    messageRight.classList.add('message-right')
    messageRight.appendChild(answer)

    panelBody.appendChild(messageRight)

    sendMessage()
  }
}


// handle scroll

console.log(panelToggle)

bodyChat.scrollTop = bodyChat.scrollHeight;

var checkscroll = 1;
var scrollOfAppend = 0;

bodyChat.addEventListener("scroll", () => {

  console.log('scrolling')
  if (scrollOfAppend == 1) // là user scroll chứ không phải do append
  {
    // tắt không cho scroll bởi append 
    checkscroll = 0;

  }
  if (bodyChat.scrollHeight - bodyChat.scrollTop == bodyChat.clientHeight) // user kéo xuống bottom 
  {

    // bật cho append scroll 
    checkscroll = 1;

  }
})


// handle socket 

socket.on('question', (question) => {

  console.log(question)

  if (question.status === true) {
    currentQuestion = question
    // append with next question
    let questionNext = document.createElement('p')
    questionNext.innerText = currentQuestion.content

    let messageLeft = document.createElement('div')
    messageLeft.classList.add('message-left')
    messageLeft.appendChild(questionNext)

    panelBody.appendChild(messageLeft)


    if (checkscroll == 1) {
      scrollOfAppend = 1;
      bodyChat.scrollTop = bodyChat.scrollHeight;
      console.log(bodyChat.scrollHeight)
    }

    return
  }


  if (question.end === true) {

    let endText = document.createElement('p')
    endText.innerText = 'Cảm ơn bạn đã tham gia khảo sát, Mỗi lượt khảo sát của bạn góp phần đóng góp cho đất nước đâỷ lùi đại dịch Covid-19. Để biết thêm tình hình Covid-19 hãy truy cập website https://gcovid.tk '

    let messageLeft = document.createElement('div')
    messageLeft.classList.add('message-left')
    messageLeft.appendChild(endText)

    panelBody.appendChild(messageLeft)
    endFlag = true

    if (checkscroll == 1) {
      scrollOfAppend = 1;
      bodyChat.scrollTop = bodyChat.scrollHeight;
      console.log(bodyChat.scrollHeight)
    }

    return
  }

  let questionWrong = document.createElement('p')
  questionWrong.innerText = `Không hiểu câu trả lời của bạn, hãy thử nhập các từ khóa 'yes' 'no' 'có' 'không', hoặc trả lời liên quan đến câu hỏi`

  let messageLeft = document.createElement('div')
  messageLeft.classList.add('message-left')
  messageLeft.classList.add('message-error')
  messageLeft.appendChild(questionWrong)


  let questionNext = document.createElement('p')
  questionNext.innerText = currentQuestion.content

  let messageLeftReply = document.createElement('div')
  messageLeftReply.classList.add('message-left')
  messageLeftReply.appendChild(questionNext)

  panelBody.appendChild(messageLeft)
  panelBody.appendChild(messageLeftReply)

  if (checkscroll == 1) {
    scrollOfAppend = 1;
    bodyChat.scrollTop = bodyChat.scrollHeight;
    console.log(bodyChat.scrollHeight)
  }

})


function openChat() {
  socket.emit('open-chat')
  endFlag = false
}


function sendMessage() {

  if (endFlag === false) {
    if (currentQuestion.isBoolean === false) {
      socket.emit('answer', {
        tag: currentQuestion.tag,
        isBoolean: currentQuestion.isBoolean,
        content: currentReply
      })
      return
    }

    socket.emit('answer', {
      yesorno: currentReply,
      _id: currentQuestion._id,
      isBoolean: currentQuestion.isBoolean,
    })
    return
  }

  // end question

  let endText = document.createElement('p')
  endText.innerText = 'Cảm ơn bạn đã tham gia khảo sát, Mỗi lượt khảo sát của bạn góp phần đóng góp cho đất nước đâỷ lùi đại dịch Covid-19. Để biết thêm tình hình Covid-19 hãy truy cập website https://gcovid.tk '

  let messageLeft = document.createElement('div')
  messageLeft.classList.add('message-left')
  messageLeft.appendChild(endText)

  panelBody.appendChild(messageLeft)

  if (checkscroll == 1) {
    scrollOfAppend = 1;
    bodyChat.scrollTop = bodyChat.scrollHeight;
    console.log(bodyChat.scrollHeight)
  }

}

