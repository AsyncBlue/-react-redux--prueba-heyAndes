import moment from 'moment-with-locales-es6';
moment.locale('es')

export const getMonthMoreSales = ( sales ) => {

    const tmpArr = []

    const monthAndPriceSale = {}

    sales.forEach( sale => {
        const { day, finalPrice } = sale
        const data = { month: moment(day).format("MMMM"), finalPrice }
        tmpArr.push( data )
    })

    tmpArr.forEach( elem => {
        monthAndPriceSale[elem.month] ??= 0
        monthAndPriceSale[elem.month] += elem.finalPrice
    })

    const monthMaxSelling = Object.entries(monthAndPriceSale).reduce( ( prev, curr ) => {
        return prev[1] > curr[1] ? prev : curr;
    });

    const [ month, sumTotalSales ] = monthMaxSelling

    const monthMax = { month, sumTotalSales }

    return monthMax
    
}
