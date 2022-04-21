export const getBestSellingAgency = ( sales ) => {

    const nameAndSumTotalSales = {}

    sales.forEach( sale => {
            nameAndSumTotalSales[sale.nameAgency] ??= 0
            nameAndSumTotalSales[sale.nameAgency] += sale.totalSum
    })

    const maxSelling = Object.entries(nameAndSumTotalSales).reduce( ( prev, curr ) => {
        return prev[1] > curr[1] ? prev : curr;
    });

    const [ nameAgency, sumTotalSales ] = maxSelling

    const bestSellingCompany = { nameAgency, sumTotalSales }

    return bestSellingCompany

}
