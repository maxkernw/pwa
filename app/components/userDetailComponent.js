
export const userDetailComponent = (data) => {
    let template = "";

    for (const prop in data) {
        const value = data[prop];
        if (value) {
            if (prop == "avatar_url") {
                template = renderImage(template, value)
            }
            else {
                template = `${template}<div><b>${prop}</b>: ${value}</div>`
            }
        }
    }
    return template
}

const renderImage = (template, value) => template = `<img src="${value}" />${template}`;



