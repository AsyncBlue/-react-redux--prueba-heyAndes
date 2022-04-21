export const getResumeTotalSales = ( sales ) => {

    const nameAndTotalFinalPrice = {}

    sales.forEach( sale => {
        nameAndTotalFinalPrice[sale.nameAgency] ??= 0
        nameAndTotalFinalPrice[sale.nameAgency] += sale.finalPrice
    })

    sales = sales.map( sale => ({ ...sale, sumTotalPrice: nameAndTotalFinalPrice[sale.nameAgency] }))

    let hash = {};

    return sales.filter( sale => hash[sale.nameAgency] ? false : hash[sale.nameAgency] = true)
            .map( sale => ({ id: sale.id, nameAgency: sale.nameAgency, totalSum: sale.sumTotalPrice }))

}
