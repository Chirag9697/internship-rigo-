import puppeteer from 'puppeteer';

export const generatepdf=async(data:any)=>{
    console.log(data);
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    const placeholderRegex = /{([^}]+)}/g;
    const replacedHtml = data.html.replace(placeholderRegex, (match, placeholder) => {
        if (placeholder) {
            if(!data.data[`${placeholder}`]){
                return '';
            }
            else{
                return data.data[`${placeholder}`];
            }
        } else {
            return match;
        }
    });
    console.log(replacedHtml);
    await page.setContent(replacedHtml);
    // console.log(req.body.html);

    const pdf = await page.pdf({ format: 'A4' });
    // res.send("hello");
    return pdf;
    
}