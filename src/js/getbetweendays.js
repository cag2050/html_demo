Date.prototype.format = function () {
    var s = '';
    var mouth = (this.getMonth() + 1) >= 10 ? (this.getMonth() + 1) : ('0' + (this.getMonth() + 1));
    var day = this.getDate() >= 10 ? this.getDate() : ('0' + this.getDate());
    s += this.getFullYear() + '-'; // 获取年份。
    s += mouth + "-"; // 获取月份。
    s += day; // 获取日。
    return (s); // 返回日期。
};

function getAll(begin, end) {
    var ab = begin;
    var ae = end;
    var db = new Date();
    db.setUTCFullYear(ab.substr(0, 4), ab.substr(4, 2) - 1, ab.substr(6, 2));
    var de = new Date();
    de.setUTCFullYear(ae.substr(0, 4), ae.substr(4, 2) - 1, ae.substr(6, 2));
    var unixDb = db.getTime();
    var unixDe = de.getTime();
    let daysArr = []
    for (var k = unixDb; k <= unixDe;) {
        let dateObj = new Date(parseInt(k))
        let yearStr = dateObj.getFullYear();
        let monthStr = dateObj.getMonth() + 1 >= 10 ? dateObj.getMonth() + 1 : '0' + (dateObj.getMonth() + 1)
        let dayStr = dateObj.getDate() >= 10 ? dateObj.getDate() : '0' + dateObj.getDate()
        daysArr.push(yearStr.toString() + monthStr + dayStr)
        k = k + 24 * 60 * 60 * 1000;
    }
    return daysArr
}
getAll('20171230', '20180101'); //2017-02-27  2017-02-28 2017-03-01 2017-03-02
console.log(getAll('20171230', '20180101'))