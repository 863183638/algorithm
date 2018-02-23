export default function (str) {
    var max = '';
    for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < 2; j++) {
        var left = i;
        var right = i + j;
        while (str[left] && str[left] === str[right]) {
          left--;
          right++;
        }
        if ((right - left - 1) > max.length) {
          max = str.substring(left + 1, right);
        }
      }
    }
    return max;
}