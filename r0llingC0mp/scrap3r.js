const request= require("request-promise")
const cheerio= require("cheerio");

var allSubLinks = ["https://www.rollingcomponents.com/product-review-page.php?mcat=1&cat=1", "https://www.rollingcomponents.com/product-review-page.php?mcat=1&cat=2", "https://www.rollingcomponents.com/product-review-page.php?mcat=2&cat=3", "https://www.rollingcomponents.com/product-review-page.php?mcat=2&cat=4", "https://www.rollingcomponents.com/product-review-page.php?mcat=2&cat=13", "https://www.rollingcomponents.com/product-review-page.php?mcat=3&cat=5", "https://www.rollingcomponents.com/product-review-page.php?mcat=5&cat=6", "https://www.rollingcomponents.com/product-review-page.php?mcat=6&cat=7", "https://www.rollingcomponents.com/product-review-page.php?mcat=6&cat=8", "https://www.rollingcomponents.com/product-review-page.php?mcat=6&cat=14", "https://www.rollingcomponents.com/product-review-page.php?mcat=6&cat=15", "https://www.rollingcomponents.com/product-review-page.php?mcat=4&cat=11", "https://www.rollingcomponents.com/product-review-page.php?mcat=4&cat=12"]
var iteration=0
allSubLinks.forEach(func)
allProds = []
function func(link, index){
    var options = {
        method: 'get',
        url : link,
        timeout: 600000,
        resolveWithFullResponse: true
    }
    request(options, (error, response, html) => {
        iteration=iteration+1
        console.log('Page: ', link)
        if(!error && response.statusCode==200) {
            const $= cheerio.load(html);
            const document= cheerio.load(html);
            let elt = $("[href]").text()
            let toreplace="+44 1268 271035 Call  info@rollingcomponents.comEmailNew to RangeHOMEABOUT USCATALOGUESUPPORTNEWSBLOGCONTACT USSIGNUP / LOGINOEM SEARCHVEHICLE SEARCHCAR REGISTRATION SEARCH "
            let antoreplace = "+44 1268 271035 info@rollingcomponents.comIlford Trading Estate, 22-25 Paycocke Rd, Basildon SS14 3DR, UK COOKIE POLICY & PRIVACY POLICY  About us Catalogue Support News Blog Contact us Career"
            let newt = elt.replace(toreplace, "")
            newt = newt.replace(antoreplace, "")
            for(i=0; i<newt.length; i++){
                allProds.push(newt)
            }

            console.log(newt.match(/\w+/g))
        }
        console.log('Pages visited: ', iteration)
    });
}

// ['VSSP121', 'VSSP104', 'VSSP150', 'VSSP149', 'VSCV202', 'VSCV201', 'VSCV028', 'VSCV103', 'VSMF183', 'VSMF182', 'VSMF181', 'VSMF180', 'VSBK244', 'VSBK291', 'VSBK288', 'VSBK287', 'VSEG187', 'VSEG183', 'VSEG182C', 'VSEG177C', 'VSWH195', 'VSWH221', 'VSWH030', 'VSWH216', 'ASC009', 'ALT2462CP', 'ALT2384CP', 'ALT2419CP', 'STM1501', 'STM1450', 'STM1449', 'STM1092',  'VSBC916R', 'VSBC916L', 'VSBC914R', 'VSBC914L', 'VSIC351', 'VSIC350', 'VSIC349', 'VSIC289M']