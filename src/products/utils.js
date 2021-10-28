const excelGenerator=(products,resp,name)=>{
    var xl=require('excel4node');

    products=products.map((product)=>{
        let id=product._id.toString();

        delete product._id;

        return {
            id,
            ...product
        }
    })

    var wb=new xl.Workbook();
    var ms=wb.addWorksheet('inventario');
    

    for(let i=1;i<=products.length;i++){
        for(let j=1;j<=Object.values(products[0]).lenght;j++){
            let data=Object.values(products[i-1])[j-1];
            if (typeof data==='string') {
                ms.cell(i,j).string(data)
            }else{
                ms.cell(i,j).number(data)
            }
        }
    }
    wb.write(`${name}.xlsx`,resp)
}


module.exports.ProductsUtils={
    excelGenerator
}