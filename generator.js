const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code '],
  designer: ['畫一張圖', '改個 logo ', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model ', '找 VC 募錢'],
}

const phrase = ['很簡單', '很容易', '很快', '很正常']


function generator(item) {
  let fuckWords = '身為一個'
  let engineerTaskIndex = Math.floor(Math.random() * task.engineer.length)
  let designerTaskIndex = Math.floor(Math.random() * task.designer.length)
  let entrepreneurTaskIndex = Math.floor(Math.random() * task.entrepreneur.length)

  let phraseIndex = Math.floor(Math.random() * phrase.length)
  if (item.engineer) {
    fuckWords += "工程師" + task.engineer[engineerTaskIndex] + phrase[phraseIndex]
  }

  if (item.designer) {
    fuckWords += "設計師" + task.designer[designerTaskIndex] + phrase[phraseIndex]
  }

  if (item.entrepreneur) {
    fuckWords += "創業家" + task.entrepreneur[entrepreneurTaskIndex] + phrase[phraseIndex]
  }

  return fuckWords
}




module.exports = generator