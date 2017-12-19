let options = [{new: '新用户'}, {old: '老用户'}]
let len = options.length
for (let i = 0; i < len; i++) {
    console.log(options[i])
    for (let key in options[i]) {
        console.log(key + " : " + options[i][key])
    }
}