function env(path) {
    if (location.href.includes('http://127.0.0.1:5500/')) {
        // this is in dev mode
        return path;
    } else {
        if (location.href.includes('fadi-eljurdi.github.io')) {
            // in production mode
            // add /app/ directory to all links
            return '/app' + path
        }
        return path
    }
}
function getPage(path) {
    var origin = new URL(location.href).origin
    if (origin.includes('fadi-eljurdi.github.io')) origin += '/igc'
    return new Promise((resolve, reject) => {
        // console.log(origin);
        fetch(`${origin}/${path}`).then(res => res.text()).then(res => {
            resolve(res)
        })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
function getDistinctValues(array) {
    // Use a Set to store unique values
    const distinctSet = new Set(array);

    // Convert Set back to an array
    const distinctArray = Array.from(distinctSet);

    return distinctArray;
}

function addCommas(number) {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

export default {
    getPage,
    getDistinctValues,
    addCommas,
    env
}