module.exports = {
    publicPath: "",
    //process.env.NODE_ENV === 'production'
    //    ? ''
    //    : ''
    css: {
        loaderOptions: {
            sass: {
                implementation: require("sass")
            }
        }
    }
}