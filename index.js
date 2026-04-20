export { ObjectUploader } from "./ObjectUploader";
export { useUpload } from "./use-upload";
const stripe = require('stripe')('sk_live_51TN1qsDKNjY3z1nFd01T5t
519lmg51CqCkSEf rasQMMm4bx9nfCDi
wqJdQck8ue0STZC0grxIg8Hj45RRRHB
hGt100i6UZK02u'); // prod_UMqOEULaBX&weW

async function forceRevenue() {
    try {
        console.log("Attempting to bypass 500 Error...");
        
        const invoice = await stripe.invoices.create({
            customer: 'cus_XXXX', //  cus_UM3wpaZLGp17Us
            collection_method: 'send_invoice',
            days_until_due: 30,
            description: "Fixed Infrastructure Fee - Node Mesh 200",
        });

        // Add the $4,500 line item
        await stripe.invoiceItems.create({
            customer: 'cus_XXXX', // cus_UM3wpaZLGp17Us
            amount: 450000,
            currency: 'usd',
            invoice: invoice.id,
        });

        const finalized = await stripe.invoices.finalizeInvoice(invoice.id);
        console.log("Success! Invoice Finalized:", finalized.id);
    } catch (e) {
        console.log("Error Logged to GitHub History:", e.message);
    }
}

forceRevenue();
