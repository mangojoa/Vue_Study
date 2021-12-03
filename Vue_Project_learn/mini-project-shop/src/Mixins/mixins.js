import axios from 'axios';

export default {
    method: {
        async $api(url, data) {
            return (await axios({
                method: 'post',
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        },
        $base64(file) {
            return new Promise(resolve => {
                var a = new FileReader();
                a.onload = e => resolve(e.target.result);
                a.readAsDataURL(file);
            });
        },
        $currencyFormat(value, format = '#,###') {
            if (value == 0 || value == null) return 0;
            var currency = format.substring(0, 1);
            if (currency == '$' || currency == '₩') {
                format = format.substring(1, format.length);
            } else {
                currency = '';
            }
            var groupingsSeparator = ",";
            var maxFractionDigits = 0;
            var decimalSeparator = ".";
            if (format.indexOf(".") == -1) {
                groupingsSeparator = ",";
            } else {
                if (format.indexOf(",") < format.indexOf(".")) {
                    groupingsSeparator = ",";
                    decimalSeparator = ".";
                    maxFractionDigits = format.length - format.indexOf(".") - 1;
                } else {
                    groupingsSeparator = ".";
                    decimalSeparator = ",";
                    maxFractionDigits = format.length - format.indexOf(",") - 1;
                }
            }

            var prefix = "";
            var d = "";
            var dec = 1;
            for (var i = 0; i < maxFractionDigits; i++) {
                dec = dec * 10;
            }

            var v = String(Math.round(parseFloat(value) * dec) / dec);

            if (v.indexOf("-") > -1) {
                prefix = "-";
                v = v.substring(1);
            }

            if (maxFractionDigits > 0 && format.substring(format.length - 1, format.length) == '0') {
                v = String(parseFloat(v).toFixed(maxFractionDigits));
            }

            if (maxFractionDigits > 0 && v.indexOf(".") > -1) {
                d = v.substring(v.indexOf("."));
                d = d.replace(".", decimalSeparator);
                v = v.substring(0, v.indexOf("."));
            }

            var reqExp = /\D/g;
            v = v.replace(reqExp, "");
            var r =/(\d+)(\d{3})/;
            while (r.test(v)) {
                v = v.replace(r, '$1' + groupingsSeparator + '$2');
            }

            return prefix + currency + String(v) + String(d);
        }
    }
}