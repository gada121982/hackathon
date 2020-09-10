const Answers = require('../models/answer')
const convertTinh = require('../utils/convertTinh')


module.exports.dataanalyze = async (req, res) => {
  const Tinh = await Answers.find({ tag: 'tinh' })
  const GioitTinh = await Answers.find({ tag: 'gioitinh' })
  const Tuoi = await Answers.find({ tag: 'tuoi' })

  let flagArray = []
  for (let i = 0; i < Tinh.length; i++) {
    let j = 0
    for (j = 0; j < flagArray.length; j++) {
      if (Tinh[i].content === flagArray[j].name) break
    }
    if (j < flagArray.length) {
      flagArray[j].count = flagArray[j].count + 1
    } else {
      flagArray.push({
        name: Tinh[i].content,
        count: 1
      })
    }
  }
  flagArray.sort((a, b) => b.count - a.count)


  flagArray = [...convertTinh(flagArray)]

  finalTinh = {
    tag: 'Tỉnh',
    label: [
    ],
    data: [
    ]
  }
  for (let i = 0; i < flagArray.length; i++) {
    finalTinh.label.push(flagArray[i].name)
    finalTinh.data.push(flagArray[i].count)
  }

  const flagArray1 = []
  for (let i = 0; i < GioitTinh.length; i++) {
    let j = 0
    for (j = 0; j < flagArray1.length; j++) {
      if (GioitTinh[i].content === flagArray1[j].name) break
    }
    if (j < flagArray1.length) {
      flagArray1[j].count = flagArray1[j].count + 1
    } else {
      flagArray1.push({
        name: GioitTinh[i].content,
        count: 1
      })
    }
  }

  flagArray1.sort((a, b) => b.count - a.count)

  finalGioiTinh = {
    tag: 'Giới tính',
    label: [
    ],
    data: [
    ]
  }
  for (let i = 0; i < flagArray1.length; i++) {
    if (flagArray1[i].name === 'nam') {
      finalGioiTinh.label.push('Nam')
    }

    if (flagArray1[i].name === 'nu') {
      finalGioiTinh.label.push('Nữ')
    }

    finalGioiTinh.data.push(flagArray1[i].count)
  }

  const flagArray3 = []
  for (let i = 0; i < Tuoi.length; i++) {
    let j = 0
    for (j = 0; j < flagArray3.length; j++) {
      if (Tuoi[i].content === flagArray3[j].name) break
    }
    if (j < flagArray3.length) {
      flagArray3[j].count = flagArray3[j].count + 1
    } else {
      flagArray3.push({
        name: Tuoi[i].content,
        count: 1
      })
    }
  }
  flagArray3.sort((a, b) => b.count - a.count)
  finalTuoi = {
    tag: 'Độ tuổi',
    label: [
    ],
    data: [
    ]
  }
  for (let i = 0; i < flagArray3.length; i++) {
    switch (flagArray3[i].name) {
      case '1':
        finalTuoi.label.push('10 tuổ i - 20 tuổ i')
        break
      case '2':
        finalTuoi.label.push('20 tuổ i - 40 tuổ i')
        break
      case '3':
        finalTuoi.label.push('40 tuổi - 60 tuổ i')
        break
      case '4':
        finalTuoi.label.push('60 tuổ i trở lên')
    }

    finalTuoi.data.push(flagArray3[i].count)
  }

  const responce = [finalGioiTinh, finalTinh, finalTuoi]

  res.send(responce)
}
