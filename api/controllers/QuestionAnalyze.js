const Question = require('../models/question')

module.exports.questionanalyze = async (req, res) => {
  const questions = await Question.find({ isBoolean: true })
  const cleanData = []

  for (let i = 0; i < questions.length; i++) {
    const total = questions[i].toObject().yesCount + questions[i].toObject().noCount
    let yesPercent = 0
    let noPercent = 0
    if (total !== 0) {
      yesPercent = Math.ceil(questions[i].toObject().yesCount * 100 / total)
      noPercent = Math.ceil(questions[i].toObject().noCount * 100 / total)
    }

    cleanData.push({
      content: questions[i].toObject().content,
      total,
      yesPercent,
      noPercent
    })
  }
  res.send(cleanData)
}
