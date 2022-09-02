const request= require("request-promise")
const cheerio= require("cheerio");

let prodId = "VSCV202"
var link = "https://www.rollingcomponents.com/product-detail.php?rc_num="+prodId+"&type=search"

// var options = {
//     method: 'get',
//     url : link,
//     timeout: 600000,
//     resolveWithFullResponse: true
// }
// request(options, (error, response, html) => {
//     if(!error && response.statusCode==200) {
//         const $= cheerio.load(html);
//         const document= cheerio.load(html);
//         var listOfFeatures = $('.row')[11].children[1].children[0]
//         console.log('listOfFeatures', listOfFeatures.children)
//         for(i=0; i<listOfFeatures.length; i++){
//         	console.log(listOfFeatures[i].innerText)
//         }
//     }
// });


const fetchIndeedData = async () => {
  let urls = [0].map(start => link)
  let responses = await Promise.all(urls.map(url => request.get(url)))
  let $$ = responses.map(response => cheerio.load(response))
  return $$.map($ => {
    return {
      title: $('title').text(),
      listOfFeatures: $('.row')
    }
  })
}

;(async function(){
  const data = await fetchIndeedData()
  let ui = data['0']['listOfFeatures']['11'].children['1'].children['0']
  console.log(ui)
  for(i=0; i<data['0']['listOfFeatures']['11'].children['1'].children.length; i++){
  	console.log(Object.keys(ui[i]))
  }
})()