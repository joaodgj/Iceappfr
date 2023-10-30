import dateFormat from "dateformat";

const timestampToString = (timestamp) => {
    const date = new Date(timestamp)

    return dateFormat(date, "dd/mm/yyyy - h:MM TT");
}

export { timestampToString }