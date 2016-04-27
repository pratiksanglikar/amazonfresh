/**
 * Created by pratiksanglikar on 27/04/16.
 */
angular.module("amazonfresh").factory("TripAnalyticsService", ["$q","$window","$http", function ($q, $window, $http) {
	var TripAnalyticsService = {

		/**
		 * returns the trips per driver.
		 * @returns {*|promise}
		 */
		getTripsPerDriver: function () {
			var deferred = $q.defer();
			$http({
				method: "GET",
				url: "http://localhost:3000/trips/analytics/bydriver"
			}).then(function (data) {
				if(data.data.success) {
					deferred.resolve(data.data.data);
				} else {
					deferred.reject(data.data.error);
				}
			});
			return deferred.promise;
		},

		/**
		 * returns the trips per customer.
		 * @returns {*|promise}
		 */
		getTripsPerCustomer: function () {
			var deferred = $q.defer();
			$http({
				method: "GET",
				url: "http://localhost:3000/trips/analytics/bycustomer"
			}).then(function (data) {
				if(data.data.success) {
					deferred.resolve(data.data.data);
				} else {
					deferred.reject(data.data.error);
				}
			});
			return deferred.promise;
		}
	};
	return TripAnalyticsService;
}]);
