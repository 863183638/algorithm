export default function (str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
    // return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
}