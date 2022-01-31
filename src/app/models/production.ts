export interface Production{
    dateID: number;
    productID: number;
    stockEOD: number;
    deliveryFromProduction: number;
    rejection: number;
    startupLoss: number;
    obsoletes: number;
    inBackorder: number;
}