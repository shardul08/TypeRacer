//Practice mode (Single player)
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
cname =  getElementByXpath("/html/body/div[1]/div/div[1]/div/div[1]/div[1]/table/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr[3]/td/div/div/table/tbody/tr[2]/td[3]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/div").className;
words = []; 
d = document.getElementsByClassName(cname)[0]; 
sp = d.getElementsByTagName("span"); 
for(i = 0; i<sp.length;i++) words.push(sp[i].innerText); 
ip = document.getElementsByClassName("txtInput")[0];
str = "";
for(i=0;i<words.length;i++) str += words[i];
ip.value = str;
ip.click;
