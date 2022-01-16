export const shortenAddres = (addres) => {
    return `${addres.slice(0,5)}...${addres.slice(addres.length -4)}`
}