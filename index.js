const stringPrototypes = require('./prototypes')

function loadStringPrototypes() {
    Object.keys(stringPrototypes).forEach(methodName => {
        if (!String.prototype[methodName]) {
            String.prototype[methodName] = stringPrototypes[methodName]
        }
    })
}

module.exports = {
    loadStringPrototypes,
    ...stringPrototypes
}
