"use strict";
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
    function abstract(a, b) {
        return a - b;
    }
    MathUtils.abstract = abstract;
})(MathUtils || (MathUtils = {}));
