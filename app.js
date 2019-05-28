var fs = require('fs');
fs.readFile("./challenge1/info.txt","utf8",(err,data)=>{
  if(err)
  throw err;
  console.log(data)

})
let names= fs.readFileSync('./challenge2/info.txt','utf-8')
names=names + 'Daniel\n'
fs.writeFileSync('./challenge2/info.txt', names)
fs.unlinkSync('./challenge4/copyfolder/info.txt')
fs.rename('./challenge3/binfo.txt','./challenge3/info.txt',(err)=>{if(err) console.log( err);})
fs.rmdirSync('./challenge4/copyfolder')
fs.mkdirSync('./challenge4/copyfolder')
fs.copyFileSync('./challenge4/info.txt','./challenge4/copyfolder/info.txt')
fs.readFile('./challenge5/info.txt','utf-8',(err,data)=>{let result="";
 for(let i=0; i<data.length; i++)
{
  if(data[i]=='-'){result+=" ";

  }
  else {
    result+=data[i]
  }
}
fs.writeFileSync('./challenge5/info.txt', result)
})

fs.readdir("./challenge6/","utf8",(err,data)=>{
  if(err)
  throw err;
  let directory=data;
  let dir2 = directory.filter((item)=>{if (item[item.length-2]=="x")
{return true}
else {
  return false


}}).map((item)=>{return "./challenge6/"+item});
console.log (dir2)
for(let i=0; i<dir2.length; i++){
fs.readFile(dir2[i],"utf8",(err,data)=>{
  if(err)
  throw err;
  console.log(data)


})};

})
