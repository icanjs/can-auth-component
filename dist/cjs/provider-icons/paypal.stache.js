/*auth-component@3.2.0#provider-icons/paypal.stache!steal-stache@3.0.0-pre.3#steal-stache*/
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@3.0.0-pre.4#can-view-import');
require('can-stache-bindings@3.0.0-pre.23#can-stache-bindings');
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
        'args': ['sso-paypal ']
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
        'args': ['Login with PayPal']
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
        'args': ['\n\n\t']
    },
    {
        'tokenType': 'start',
        'args': [
            'a',
            false
        ]
    },
    {
        'tokenType': 'special',
        'args': ['#is oauthFlow \'redirect\'']
    },
    {
        'tokenType': 'attrStart',
        'args': ['href']
    },
    {
        'tokenType': 'special',
        'args': ['providerUrl(providers.paypal)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['href']
    },
    {
        'tokenType': 'special',
        'args': ['/is']
    },
    {
        'tokenType': 'special',
        'args': ['#is oauthFlow \'popup\'']
    },
    {
        'tokenType': 'attrStart',
        'args': ['href']
    },
    {
        'tokenType': 'attrValue',
        'args': ['javascript://']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['href']
    },
    {
        'tokenType': 'attrStart',
        'args': ['($click)']
    },
    {
        'tokenType': 'attrValue',
        'args': ['openOauthPopup(%event, providers.paypal)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['($click)']
    },
    {
        'tokenType': 'special',
        'args': ['/is']
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
        'args': ['\n\n\t\t']
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
        'args': ['0 0 25 28']
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
        'args': ['paypal']
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
        'args': ['PayPal']
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
        'args': ['translate(-33.000000, -12.000000)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['transform']
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
        'args': ['paypal']
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
        'args': ['translate(33.000000, 12.000000)']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['transform']
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
        'args': ['\n\t\t\t\t\t']
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
        'args': ['M20.5857618,2.17945831 C19.2648969,0.706934776 16.8772403,0.0756327598 13.8228389,0.0756327598 L4.95789441,0.0756327598 C4.33296909,0.0756327598 3.80194037,0.520168164 3.70409852,1.12291496 L0.0129360578,24.0203471 C-0.0604453251,24.4718284 0.296993024,24.8808627 0.76489797,24.8808627 L6.23772885,24.8808627 L7.61224894,16.3536549 L7.5696404,16.6206848 C7.66748225,16.017938 8.19456573,15.5734027 8.818702,15.5734027 L11.4194014,15.5734027 C16.5284815,15.5734027 20.5289504,13.5436664 21.6975293,7.67209454 C21.7322473,7.49844791 21.7622311,7.32943184 21.7882696,7.16427459 C21.6407179,7.08787006 21.6407179,7.08787006 21.7882696,7.16427459 C22.1362394,4.99407744 21.7859025,3.51692333 20.5857618,2.17945831']
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
        'args': ['Shape']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['id']
    },
    {
        'tokenType': 'attrStart',
        'args': ['fill']
    },
    {
        'tokenType': 'attrValue',
        'args': ['#27346A']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['fill']
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
        'args': ['\n\t\t\t\t\t']
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
        'args': ['M9.70638002,6.38247881 C9.85235378,6.31456368 10.0148974,6.2767473 10.1853316,6.2767473 L17.1352588,6.2767473 C17.9582349,6.2767473 18.7259777,6.32922718 19.4274406,6.43958926 C19.6286477,6.47123154 19.8235423,6.50750439 20.0129136,6.54917959 C20.2022849,6.59008302 20.3861329,6.63638879 20.5644576,6.68732514 C20.6536198,6.71279332 20.7412041,6.73903325 20.8272102,6.76681671 C21.1720238,6.87949409 21.493166,7.01069377 21.7882696,7.16427459 C22.1362394,4.99330567 21.7859025,3.51692333 20.5857618,2.17945831 C19.2641078,0.706934776 16.8772403,0.0756327598 13.8228389,0.0756327598 L4.95710536,0.0756327598 C4.33296909,0.0756327598 3.80194037,0.520168164 3.70409852,1.12291496 L0.0129360578,24.0195754 C-0.0604453251,24.4718284 0.296993024,24.8800909 0.764108923,24.8800909 L6.23772885,24.8800909 L9.08934517,7.19282982 C9.14773466,6.83010127 9.38602689,6.53297257 9.70638002,6.38247881 L9.70638002,6.38247881 Z']
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
        'args': ['Shape']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['id']
    },
    {
        'tokenType': 'attrStart',
        'args': ['fill']
    },
    {
        'tokenType': 'attrValue',
        'args': ['#D3D3D3']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['fill']
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
        'args': ['\n\t\t\t\t\t']
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
        'args': ['M21.6975293,7.67209454 C20.5289504,13.5428946 16.5284815,15.5734027 11.4194014,15.5734027 L8.81791296,15.5734027 C8.19377668,15.5734027 7.66669319,16.017938 7.5696404,16.6206848 L5.85977528,27.223163 C5.79586246,27.6183056 6.10832512,27.9764035 6.51705154,27.9764035 L11.1306101,27.9764035 C11.6766307,27.9764035 12.1413794,27.587435 12.2265966,27.060321 L12.2715722,26.8303357 L13.1411021,21.4403439 L13.1971245,21.1424434 C13.2823416,20.6153294 13.7470904,20.2263609 14.2931109,20.2263609 L14.9835272,20.2263609 C19.4526902,20.2263609 22.9521141,18.4505345 23.9747192,13.3144528 C24.4015937,11.1681803 24.1806606,9.37614694 23.0515341,8.11740171 C22.7090876,7.73615086 22.2837913,7.42127162 21.7882696,7.16427459 C21.7614421,7.3302036 21.7322473,7.49844791 21.6975293,7.67209454 L21.6975293,7.67209454 L21.6975293,7.67209454 Z']
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
        'args': ['Shape']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['id']
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
        'args': ['\n\t\t\t\t\t']
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
        'args': ['M20.5652466,6.68732514 C20.386922,6.63638879 20.203074,6.59008302 20.0137026,6.54917959 C19.8243313,6.50827615 19.6286477,6.4720033 19.4282297,6.44036102 C18.7259777,6.32922718 17.9590239,6.2767473 17.1352588,6.2767473 L10.1861206,6.2767473 C10.0148974,6.2767473 9.85235378,6.31456368 9.70716906,6.38325057 C9.38602689,6.53374433 9.1485237,6.83010127 9.09013422,7.19360158 L7.61303799,16.3536549 L7.57042945,16.6206848 C7.66748225,16.017938 8.19456573,15.5734027 8.818702,15.5734027 L11.4201904,15.5734027 C16.5292705,15.5734027 20.5297394,13.5436664 21.6983183,7.67209454 C21.7330363,7.49844791 21.7622311,7.3302036 21.7890587,7.16427459 C21.493166,7.01146554 21.1728128,6.87949409 20.8279992,6.76758848 C20.7419931,6.73980501 20.6544089,6.71279332 20.5652466,6.68732514']
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
        'args': ['Shape']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['id']
    },
    {
        'tokenType': 'attrStart',
        'args': ['fill']
    },
    {
        'tokenType': 'attrValue',
        'args': ['#EEEEEE']
    },
    {
        'tokenType': 'attrEnd',
        'args': ['fill']
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
        'args': ['\n\t\t\t\t']
    },
    {
        'tokenType': 'close',
        'args': ['g']
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
        'args': ['Login with PayPal']
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
        'args': ['PayPal Login']
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
module.exports = function (scope, options, nodeList) {
    var moduleOptions = { module: module };
    if (!(options instanceof mustacheCore.Options)) {
        options = new mustacheCore.Options(options || {});
    }
    return renderer(scope, options.add(moduleOptions), nodeList);
};