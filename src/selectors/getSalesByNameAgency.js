export const getSalesByNameAgency = ( nameAgency, sales ) => {

    return sales.filter( sale => sale.nameAgency === nameAgency )

}
