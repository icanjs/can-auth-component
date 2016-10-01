/*auth-component@3.1.1#provider-icons/github.stache!steal-stache@3.0.0-pre.3#steal-stache*/
define([
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.0-pre.4#can-view-import',
    'can-stache-bindings@3.0.0-pre.23#can-stache-bindings'
], function (module, stache, mustacheCore) {
    var renderer = stache([
        {
            'tokenType': 'start',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['sso-github ']
        },
        {
            'tokenType': 'special',
            'args': ['providerCountClass']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['title']
        },
        {
            'tokenType': 'attrValue',
            'args': ['Login with GitHub']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['title']
        },
        {
            'tokenType': 'end',
            'args': [
                'li',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['href']
        },
        {
            'tokenType': 'special',
            'args': ['baseUrl']
        },
        {
            'tokenType': 'attrValue',
            'args': ['/auth/github']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['href']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['viewBox']
        },
        {
            'tokenType': 'attrValue',
            'args': ['0 0 30 30']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['viewBox']
        },
        {
            'tokenType': 'attrStart',
            'args': ['version']
        },
        {
            'tokenType': 'attrValue',
            'args': ['1.1']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['version']
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'title',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'title',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['github']
        },
        {
            'tokenType': 'close',
            'args': ['title']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'g',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['id']
        },
        {
            'tokenType': 'attrValue',
            'args': ['GitHub']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'attrStart',
            'args': ['transform']
        },
        {
            'tokenType': 'attrValue',
            'args': ['translate(-31.000000, -11.000000)']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['transform']
        },
        {
            'tokenType': 'attrStart',
            'args': ['fill']
        },
        {
            'tokenType': 'attrValue',
            'args': ['#FFFFFF']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['fill']
        },
        {
            'tokenType': 'end',
            'args': [
                'g',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'path',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['d']
        },
        {
            'tokenType': 'attrValue',
            'args': ['M58.8161306,12.6177246 C57.7365364,11.5393086 56.4369154,11 54.9162609,11 L36.5191268,11 C34.9989421,11 33.6988513,11.5393086 32.61919,12.6177246 C31.5397971,13.6963419 31,14.9952561 31,16.5141321 L31,34.8948855 C31,36.4138285 31.5397971,37.7126087 32.61919,38.7910247 C33.6987842,39.8696419 34.9989421,40.4089505 36.5191268,40.4089505 L40.8117959,40.4089505 C41.0926354,40.4089505 41.3036006,40.3992937 41.4440875,40.3805164 C41.5845072,40.3612027 41.724927,40.2781806 41.8655481,40.1312488 C42.0062363,39.9845853 42.0763119,39.7707262 42.0763119,39.4900067 C42.0763119,39.4519158 42.0729558,39.0174914 42.0666463,38.1878735 C42.0601355,37.3579874 42.0569807,36.7007176 42.0569807,36.2155947 L41.6161889,36.292246 C41.3351481,36.3432128 40.9806084,36.3656784 40.5525698,36.3592405 C40.1247326,36.3528026 39.6806518,36.3082737 39.2207973,36.2252516 C38.7606743,36.1421624 38.3328371,35.9507688 37.9367487,35.651071 C37.5408617,35.3508366 37.2598208,34.9584598 37.0936932,34.473538 L36.9019921,34.0328769 C36.7742585,33.7396169 36.5731602,33.4139663 36.2984289,33.0568638 C36.0236975,32.6992918 35.7458785,32.4567304 35.4648377,32.3291123 L35.3306603,32.2333485 C35.2413206,32.169573 35.1582904,32.0926535 35.0815696,32.0033946 C35.0049831,31.9138675 34.9475265,31.8244075 34.9091997,31.7353498 C34.8708729,31.6458227 34.9026888,31.5723903 35.0049831,31.5147845 C35.1072774,31.4574469 35.2923335,31.4290128 35.5607554,31.4290128 L35.9438891,31.4863504 C36.1994907,31.5373172 36.5155022,31.6903515 36.892595,31.9457888 C37.2694193,32.2010249 37.5791885,32.5328452 37.8219696,32.9411827 C38.1159651,33.4646648 38.4701692,33.8632784 38.8855888,34.1377611 C39.3006727,34.4125121 39.71918,34.5497199 40.1407077,34.5497199 C40.5622354,34.5497199 40.9263065,34.5177986 41.2330551,34.4542243 C41.5394682,34.3902477 41.8269528,34.2942826 42.0953746,34.1666646 C42.210355,33.3115634 42.5234132,32.6538241 43.0342806,32.1943858 C42.3061385,32.1177345 41.6514281,32.0029923 41.0699481,31.8496897 C40.4888036,31.6963871 39.8882609,31.4476559 39.2687226,31.1028928 C38.6489157,30.7581966 38.1347593,30.3308807 37.7259177,29.8200062 C37.3171432,29.3091317 36.9816662,28.6390531 36.7199566,27.8096364 C36.4581127,26.9797503 36.3271572,26.0223133 36.3271572,24.9374593 C36.3271572,23.3931 36.8319836,22.078158 37.8412337,20.9933041 C37.3684246,19.8317988 37.4130609,18.5300009 37.9752768,17.087508 C38.3457916,16.9725646 38.8952544,17.0588056 39.6233965,17.3460301 C40.3516729,17.6334557 40.884892,17.8792361 41.2235909,18.0831701 C41.5622897,18.2871712 41.833665,18.4596534 42.0381194,18.6002143 C43.2265188,18.2683269 44.4529093,18.1024168 45.7176267,18.1024168 C46.982277,18.1024168 48.2088689,18.2683269 49.3973355,18.6002143 L50.1255447,18.1407089 C50.6239945,17.8342378 51.2115827,17.5534513 51.888779,17.2982823 C52.5659083,17.0430462 53.0832194,16.9727657 53.4411153,17.0877092 C54.0158159,18.5302021 54.0672316,19.832 53.5940869,20.9934382 C54.603337,22.0784262 55.1082976,23.3933011 55.1082976,24.9376605 C55.1082976,26.0227156 54.9773421,26.9833717 54.7154983,27.8192262 C54.4538557,28.655282 54.1154925,29.3256288 53.6999386,29.8297972 C53.2848547,30.3340326 52.7673421,30.7581296 52.1478038,31.1030269 C51.5281312,31.4475218 50.9276556,31.6967224 50.3462427,31.8495555 C49.7648969,32.0028581 49.1102536,32.1180698 48.3820443,32.1947211 C49.0459505,32.7689017 49.3780714,33.6749026 49.3780714,34.9132603 L49.3780714,39.4894032 C49.3780714,39.7064813 49.4097531,39.8818471 49.4736535,40.0159031 C49.5379566,40.1498919 49.6399824,40.2421686 49.7804692,40.2936047 C49.9215602,40.3445715 50.045535,40.3764257 50.1544073,40.3891003 C50.2632796,40.4019091 50.419473,40.408347 50.6239274,40.408347 L54.9165965,40.408347 C56.4367812,40.408347 57.7369391,39.8690384 58.8160635,38.7904211 C59.8956577,37.7118039 60.4354548,36.4128226 60.4354548,34.8940137 L60.4354548,16.5141321 C60.4353206,14.9952561 59.8955235,13.6961407 58.8161306,12.6177246 L58.8161306,12.6177246 Z']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['d']
        },
        {
            'tokenType': 'attrStart',
            'args': ['id']
        },
        {
            'tokenType': 'attrValue',
            'args': ['github']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['id']
        },
        {
            'tokenType': 'end',
            'args': [
                'path',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['path']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t']
        },
        {
            'tokenType': 'close',
            'args': ['g']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t']
        },
        {
            'tokenType': 'close',
            'args': ['svg']
        },
        {
            'tokenType': 'special',
            'args': ['#is providerCountClass \'one\'']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['Login with GitHub']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'special',
            'args': ['/is']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t']
        },
        {
            'tokenType': 'special',
            'args': ['#is providerCountClass \'two\'']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t\t\t']
        },
        {
            'tokenType': 'start',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'span',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['GitHub Login']
        },
        {
            'tokenType': 'close',
            'args': ['span']
        },
        {
            'tokenType': 'special',
            'args': ['/is']
        },
        {
            'tokenType': 'chars',
            'args': ['\n\t']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'close',
            'args': ['li']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'done',
            'args': []
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});