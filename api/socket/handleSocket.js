const QuestionModel = require('../models/question')
const AnswerModel = require('../models/answer')

let QuestionArray = []

async function queryQuestion() {
  const question = await QuestionModel.find()
  const objectQuestionArray = []

  for (let i = 0; i < question.length; i++) {
    objectQuestionArray.push(question[i].toObject())
  }
  QuestionArray = [...objectQuestionArray]
}

/**
 * @param {Array} array
 * @param {Object} answer
 */
function returnNewAnswerBoolean(array, answer) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]._id.toString() === answer._id) {
      if (answer.yesorno === 'yes' || answer.yesorno === 'co' || answer.yesorno === 'roi' || answer.yesorno === 'ok') {
        const flagObject = { ...array[i] }
        flagObject.yesCount += 1
        array[i] = flagObject

        return { newArray: array, index: i }
      }
      const flagObject = { ...array[i] }
      flagObject.noCount += 1
      array[i] = flagObject
      return { newArray: array, index: i }
    }
  }
  return { newArray: QuestionArray }
}


function removeAccents(str) {
  return str.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
}

/**
 * @param {String} YesNoAnswer
 */
function filterYesNoAnswer(YesNoAnswer) {
  const check = removeAccents(YesNoAnswer.toLowerCase().trim())

  if (check === 'yes' || check === 'co' || check === 'roi' || check === 'ok') {
    return 'yes'
  }
  if (check === 'no' || check === 'khong' || check === 'chua') {
    return 'no'
  }

  return false
}


/** ---------------check valid tinh----------------------- */
/**
 *
 * @param {String} content
 */

function checkValidTinh(content) {
  let flag = false
  const RemoveUnicodecontent = removeAccents(content)
  const finalContent = RemoveUnicodecontent.replace(/ /g, '').toLowerCase()

  // Nếu trùng tỉnh nào thì lưu tỉnh đó
  switch (finalContent) {
    case 'angiang':
      flag = true
      break
    case 'baria':
      flag = true
      break
    case 'vungtau':
      flag = true
      break
    case 'bacgiang':
      flag = true
      break
    case 'backan':
      flag = true
      break
    case 'baclieu':
      flag = true
      break
    case 'bacninh':
      flag = true
      break
    case 'bentre':
      flag = true
      break
    case 'binhdinh':
      flag = true
      break
    case 'binhduong':
      flag = true
      break
    case 'binhphuoc':
      flag = true
      break
    case 'binhthuan':
      flag = true
      break
    case 'camau':
      flag = true
      break
    case 'caobang':
      flag = true
      break
    case 'daklak':
      flag = true
      break
    case 'daknong':
      flag = true
      break
    case 'dienbien':
      flag = true
      break
    case 'dongnai':
      flag = true
      break
    case 'dongthap':
      flag = true
      break
    case 'gialai':
      flag = true
      break
    case 'hagiang':
      flag = true
      break
    case 'hatinh':
      flag = true
      break
    case 'haiduong':
      flag = true
      break
    case 'haugiang':
      flag = true
      break
    case 'hoabinh':
      flag = true
      break
    case 'hungyen':
      flag = true
      break
    case 'khanhhoa':
      flag = true
      break
    case 'kiengiang':
      flag = true
      break
    case 'kontum':
      flag = true
      break
    case 'laichau':
      flag = true
      break
    case 'lamdong':
      flag = true
      break
    case 'langson':
      flag = true
      break
    case 'laocai':
      flag = true
      break
    case 'longan':
      flag = true
      break
    case 'namdinh':
      flag = true
      break
    case 'nghean':
      flag = true
      break
    case 'ninhbinh':
      flag = true
      break
    case 'ninhthuan':
      flag = true
      break
    case 'phutho':
      flag = true
      break
    case 'quangbinh':
      flag = true
      break
    case 'quangnam':
      flag = true
      break
    case 'quangngai':
      flag = true
      break
    case 'quangninh':
      flag = true
      break
    case 'quangtri':
      flag = true
      break
    case 'soctrang':
      flag = true
      break
    case 'sonla':
      flag = true
      break
    case 'tayninh':
      flag = true
      break
    case 'thaibinh':
      flag = true
      break
    case 'thainguyen':
      flag = true
      break
    case 'thanhhoa':
      flag = true
      break
    case 'hue':
      flag = true
      break
    case 'tiengiang':
      flag = true
      break
    case 'travinh':
      flag = true
      break
    case 'tuyenquang':
      flag = true
      break
    case 'vinhlong':
      flag = true
      break
    case 'vinhphuc':
      flag = true
      break
    case 'yenbai':
      flag = true
      break
    case 'cantho':
      flag = true
      break
    case 'danang':
      flag = true
      break
    case 'haiphong':
      flag = true
      break
    case 'hanoi':
      flag = true
      break
    case 'hochiminh':
      flag = true
      break
    case 'phuyen':
      flag = true
      break

    default:
      flag = false
      break
  }

  return flag === true ? { status: true, tinh: finalContent } : { status: false }
}

/** ---------------check valid gioi tinh----------------------- */

function checkValidSex(content) {
  let flag = false
  const RemoveUnicodecontent = removeAccents(content)
  const finalContent = RemoveUnicodecontent.replace(/ /g, '').toLowerCase()

  if (finalContent === 'nam') {
    flag = true
  }

  if (finalContent === 'nu') {
    flag = true
  }
  return flag === true ? { status: true, gioitinh: finalContent } : { status: false }
}

/** ---------------check valid tuoi----------------------- */
function checkValidAge(age) {
  let flag = false
  let rangeAge = 0

  // check if is number
  const ageConvert = parseInt(age)

  if (Number.isInteger(ageConvert)) {
    // check range age
    if (ageConvert < 0 || ageConvert > 150) {
      return { status: false }
    }

    if (ageConvert <= 20) {
      flag = true
      rangeAge = '1'
    }
    if (ageConvert <= 40 && ageConvert > 20) {
      flag = true
      rangeAge = '2'
    }
    if (ageConvert <= 60 && ageConvert > 40) {
      flag = true
      rangeAge = '3'
    }
    if (ageConvert > 60) {
      flag = true
      rangeAge = '4'
    }
  }
  return flag === true ? { status: true, rangeAge } : { status: false }
}

function handleSocket(io) {
  queryQuestion()

  io.on('connection', (socket) => {
    socket.nextQuestion = 0

    socket.on('open-chat', () => {

      let messageToSend = QuestionArray[0]
      messageToSend.status = true

      socket.emit('question', messageToSend)
      socket.nextQuestion = 1
    })



    socket.on('answer', async (ans) => {
      const cloneQuestionArray = [...QuestionArray]

      if (ans.isBoolean) {
        // check valid answer
        const isValidAns = filterYesNoAnswer(ans.yesorno)

        if (isValidAns === false) {
          socket.emit('question', {
            status: false,
            end: false
          })
          return
        }

        const { newArray, index } = returnNewAnswerBoolean(cloneQuestionArray, ans)
        QuestionArray = newArray
        QuestionModel.findByIdAndUpdate(QuestionArray[index]._id, QuestionArray[index], (error, data) => {
          if (error) {
            console.log(error)
          }
        })

        if (socket.nextQuestion === cloneQuestionArray.length) {
          socket.emit('question', { status: false, end: true })
          return
        }

        let messageToSend = QuestionArray[socket.nextQuestion]
        messageToSend.status = true

        socket.emit('question', messageToSend)
        socket.nextQuestion = socket.nextQuestion + 1
        return
      }

      // text-answer , tinh category
      if (ans.tag === 'tinh') {
        const { status, tinh } = checkValidTinh(ans.content)
        if (!status) {
          socket.emit('question', {
            status: false,
            end: false
          })
          return
        }
        const answerSave = new AnswerModel({
          tag: 'tinh',
          content: tinh
        })
        answerSave.save()
      }

      // text-answer , gioi tinh category
      if (ans.tag === 'gioitinh') {
        const { status, gioitinh } = checkValidSex(ans.content)

        if (!status) {
          socket.emit('question', {
            status: false,
            end: false
          })
          return
        }
        const answerSave = new AnswerModel({
          tag: 'gioitinh',
          content: gioitinh
        })
        answerSave.save()
      }



      // text-answer , tuoi category
      if (ans.tag === 'tuoi') {
        const { status, rangeAge } = checkValidAge(ans.content)

        if (!status) {
          socket.emit('question', {
            status: false,
            end: false
          })
          return
        }

        const answerSave = new AnswerModel({
          tag: 'tuoi',
          content: rangeAge
        })
        answerSave.save()
      }

      if (socket.nextQuestion === cloneQuestionArray.length) {
        socket.emit('question', { status: false, end: true })
        return
      }

      let messageToSend = QuestionArray[socket.nextQuestion]
      messageToSend.status = true

      socket.emit('question', messageToSend)
      socket.nextQuestion = socket.nextQuestion + 1
    })

    socket.on('disconnect', () => {

    })
  })
}

module.exports = handleSocket
