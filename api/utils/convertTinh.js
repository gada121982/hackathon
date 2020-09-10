
function convertTinh(OldTinh) {

  let newTinhs = []
  let finalTinh = []
  let i = 0
  let totalCount = 0
  let totalDefault = 0
  for (i; i < OldTinh.length; i++) {
    let newTinh = {

    }

    totalCount += OldTinh[i].count

    switch (OldTinh[i].name) {
      case 'angiang':
        newTinh.name = 'An Giang'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'baria':
        newTinh.name = 'Bà Rịa'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'vungtau':
        newTinh.name = 'Vũng Tàu'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'bacgiang':
        newTinh.name = 'Bắc Giang'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'backan':
        newTinh.name = 'Bắc Kạn'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'baclieu':
        newTinh.name = 'Bạc Liêu'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'bacninh':
        newTinh.name = 'Bắc Ninh'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'bentre':
        newTinh.name = 'Bến Tre'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'binhdinh':
        newTinh.name = 'Bình Định'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'binhduong':
        newTinh.name = 'Bình Dương'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'binhphuoc':
        newTinh.name = 'Bình Phước'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'binhthuan':
        newTinh.name = 'Bình Thuận'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'camau':
        newTinh.name = 'Cà Mau'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'caobang':
        newTinh.name = 'Cao Bằng'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'daklak':
        newTinh.name = 'Đắ k Lắk'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'daknong':
        newTinh.name = 'Đắk  Nông'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'dienbien':
        newTinh.name = 'Điện Biên'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'dongnai':
        newTinh.name = 'Đồng Nai'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'dongthap':
        newTinh.name = 'Đồng Tháp'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'gialai':
        newTinh.name = 'Gia Lai'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'hagiang':
        newTinh.name = 'Hà Giang'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'hatinh':
        newTinh.name = 'Hà Tĩnh'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'haiduong':
        newTinh.name = 'Hải Dương'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'haugiang':
        newTinh.name = 'Hậu Giang'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'hoabinh':
        newTinh.name = 'Hòa Bình'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'hungyen':
        newTinh.name = 'Hưng Yên'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'khanhhoa':
        newTinh.name = 'Khánh Hòa'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'kiengiang':
        newTinh.name = 'Kiên Giang'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'kontum':
        newTinh.name = 'Kon Tum'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'laichau':
        newTinh.name = 'Lai Châu'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'lamdong':
        newTinh.name = 'Lâm Đồng'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'langson':
        newTinh.name = 'Lạng Sơn'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'laocai':
        newTinh.name = 'Lào Cai'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'longan':
        newTinh.name = 'Long An'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'namdinh':
        newTinh.name = 'Nam Định'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'nghean':
        newTinh.name = 'Nghệ An'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'ninhbinh':
        newTinh.name = 'Ninh Bình'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'ninhthuan':
        newTinh.name = 'Ninh Thuận'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'phutho':
        newTinh.name = 'Phú Thọ'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'quangbinh':
        newTinh.name = 'Quảng Bình'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'quangnam':
        newTinh.name = 'Quảng Nam'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'quangngai':
        newTinh.name = 'Quãng Ngãi'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'quangninh':
        newTinh.name = 'Quảng Ninh'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'quangtri':
        newTinh.name = 'Quảng Trị'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'soctrang':
        newTinh.name = 'Sóc Trăng'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'sonla':
        newTinh.name = 'Sơn La'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'tayninh':
        newTinh.name = 'Tây Ninh'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'thaibinh':
        newTinh.name = 'Thái Bình'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'thainguyen':
        newTinh.name = 'Thái Nguyên'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'thanhhoa':
        newTinh.name = 'Thanh Hóa'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'hue':
        newTinh.name = 'Huế '
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'tiengiang':
        newTinh.name = 'Tiền Giang'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'travinh':
        newTinh.name = 'Trà Vinh'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'tuyenquang':
        newTinh.name = 'Tuyên Quang'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'vinhlong':
        newTinh.name = 'Vĩnh Long'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'vinhphuc':
        newTinh.name = 'Vĩnh Phúc'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'yenbai':
        newTinh.name = 'Yên Bái'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'cantho':
        newTinh.name = 'Cần Thơ'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'danang':
        newTinh.name = 'Đà Nẵng'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'haiphong':
        newTinh.name = 'Hải Phòng'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'hanoi':
        newTinh.name = 'Hà Nội'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'hochiminh':
        newTinh.name = 'Hồ  Chí Minh'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
      case 'phuyen':
        newTinh.name = 'Phú Yên'
        newTinh.count = OldTinh[i].count
        newTinhs.push(newTinh)

        break
    }

  }


  totalDefault = newTinhs[0].count + newTinhs[1].count + newTinhs[2].count

  finalTinh.push(newTinhs[0])
  finalTinh.push(newTinhs[1])
  finalTinh.push(newTinhs[2])
  finalTinh.push({
    name: 'Khác',
    count: totalCount - totalDefault
  })

  return finalTinh
}

module.exports = convertTinh