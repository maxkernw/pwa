
export default (data) => {
    let template = "";

    for (const prop in data) {
        const value = data[prop];
        if (value) {
            template = `${template}<li> ${data[prop]}</li>`
        }
    }
    return template
}

