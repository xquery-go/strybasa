export const formatPrice = (price: number | string) => {
    return parseFloat(Number(price).toFixed(2))
}