(function () {
    'use strict';

    angular
        .module('jhipsterAngularjsApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
