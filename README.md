# todocrudoperation
node js project that base on crud operation of mongoDb


crud operation :


1.addition of data into database

(collection.save() methode)

2.update of data into database

(Collection.addandupdate method())

3.deleteion of data into databse

(Collection.remove() method)

4.search of data into table using bootstrap

(https://datatables.net/examples/styling/bootstrap4)

4.upload image using 

var mw=require("multer-w")
router.post('/reg4',mw('./public/uploads')

router.post('/reg4',function(req,res){

console.log(  req.fileObj )

console.log(req.body)
res.send('')

