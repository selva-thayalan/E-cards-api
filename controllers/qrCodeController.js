import QRCode from "qrcode";

const base64QRCode = async (data, options = {}) => {
    return await new Promise((resolve, reject) => {//As it's not possible to return the qrcode stright from the below method we wrapped it inside a promise to wait until the finish callback func returns the url.
        QRCode.toDataURL(data, options, (err, qr) => {
            if(err){
                console.log(`Error occured when creating the base 64 QR code \n error stack: ${err}`);
                reject(new Error(err));
            };
            resolve(qr);
        });
    });
};


export { 
    base64QRCode
}