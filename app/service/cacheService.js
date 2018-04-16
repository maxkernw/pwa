
export default async (path, fetch, callback) => {
    const sessionStorageData = sessionStorage.getItem(path);

    if (sessionStorageData) {
        return callback(JSON.parse(sessionStorageData));
    }
    const resp = await fetch();
    const json = await resp.json();
    sessionStorage.setItem(path, JSON.stringify(json));
    callback(json);
}