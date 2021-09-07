export const getData = (key = 'comments') => {
    return JSON.parse(localStorage.getItem(key))
}

export const setData = (key = 'comments', data) => {
    localStorage.setItem(key, JSON.stringify(data))
}