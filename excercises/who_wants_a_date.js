let fs = require('fs')
let filename = './dates.txt'
let dates = fs.readFileSync(filename, 'utf-8').split('\n')
function whoWantsADate(date) {
  console.log(dates)
  let a = []
  if(date.includes('-')) {
    return date
  }

  if(date.includes('/')) {
    return formatOne(date)
  }

  if(date.includes('#')) {
    return formatTwo(date)
  }

  if(date.includes('*')) {
    return formatThree(date)
  }

  if(date.includes(',')) {
    let temp = date.split(' ')
    if(temp[2].length === 2) {
      return formatFour(date)
    }
    return formatFive(date)
  }
}

function formatOne(date) {
  date = date.split('/')
  let month = date[0]
  let day = date[1]
  let year = date[2]
  if(year < 50) {
    year = '20' + year
  }
  else {
    year = '19' + year
  }
  return year + '-' + month + '-' + day
}

function formatTwo(date) {
  date = date.split('#')
  let month = date[0]
  let year = date[1]
  let day = date[2]
  if(year < 50) {
    year = '20' + year
  }
  else {
    year = '19' + year
  }
  return year + '-' + month + '-' + day
}

function formatThree(date) {
  date = date.split('*')
  let day = date[0]
  let month = date[1]
  let year = date[2]
  return year + '-' + month + '-' + day
}

function formatFour(date) {
  date = date.split(' ')
  let month = date[0]
  let day = date[1].slice(0,-1)
  let year = date[2]
  if(year < 50) {
    year = '20' + year
  }
  else {
    year = '19' + year
  }
  switch (month) {
    case 'Jan':
      month = '01'
      break;
    case 'Feb':
      month = '02'
      break;
    case 'Mar':
      month = '03'
      break;
    case 'Apr':
      month = '04'
      break;
    case 'May':
      month = '05'
      break;
    case 'Jun':
      month = '06'
      break;
    case 'Jul':
      month = '07'
      break;
    case 'Aug':
      month = '08'
      break;
    case 'Sep':
      month = '09'
      break;
    case 'Oct':
      month = '10'
      break;
    case 'Nov':
      month = '11'
      break;
    case 'Dec':
      month = '12'
      break;
    default:
    break;
  }
  return year + '-' + month + '-' + day
}

function formatFive(date) {
  date = date.split(' ')
  let month = date[0]
  let day = date[1].slice(0,-1)
  let year = date[2]
  switch (month) {
    case 'Jan':
      month = '01'
      break;
    case 'Feb':
      month = '02'
      break;
    case 'Mar':
      month = '03'
      break;
    case 'Apr':
      month = '04'
      break;
    case 'May':
      month = '05'
      break;
    case 'Jun':
      month = '06'
      break;
    case 'Jul':
      month = '07'
      break;
    case 'Aug':
      month = '08'
      break;
    case 'Sep':
      month = '09'
      break;
    case 'Oct':
      month = '10'
      break;
    case 'Nov':
      month = '11'
      break;
    case 'Dec':
      month = '12'
      break;
    default:
    break;
  }
  return year + '-' + month + '-' + day
}
//
// while(dates.length>1) {
//   fs.appendFile('./output.txt', whoWantsADate(dates.shift()) + '\n', 'utf-8')
// }
