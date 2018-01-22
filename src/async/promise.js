export default DiyP;

function DiyP (fn) {
    var _self = this;
    this.status = "PENDING";
    this.data = null;
    this.ResolveCallback = [];
    this.RejectCallback = [];

    fn(resolve,reject);

    function resolve(data) {
        if(_self.status === "PENDING") {
            _self.status = "FULFILLED";
            _self.data = data;
            for (var i = 0; i < _self.ResolveCallback.length; i++) {
                _self.ResolveCallback[i](data);
            }
        }
    }

    function reject (reason) {
        if(_self.status === "PENDING") {
            _self.status = "REJECTED";
            _self.data = reason;
            for (var i = 0; i < _self.RejectCallback.length; i++) {
                _self.RejectCallback[i](reason);
            }
        }
    }
}

DiyP.prototype.then = function (onResolved,onRejected) {
    var _self = this;

    onResolved = typeof onResolved === "function" ? onResolved : function(data) {return data};
    onRejected = typeof onRejected === "function" ? onRejected : function(reason) { return reason};

    if(_self.status === "FULLFILLED") {
        return new DiyP(function(resolve,reject){
            try {
                var temp = onResolved(_self.data);
                if(temp instanceof DiyP) {
                    temp.then(resolve,reject);
                } else {
                    resolve(temp);
                }
            } catch (e) {
                reject(e);
            }
        })
    }

    if(_self.status === "REJECTED") {
        return new DiyP(function(resolve,reject){
            try {
                var temp = onRejected(_self.data);
                if(temp instanceof DiyP) {
                    temp.then(resolve,reject);
                } else {
                    resolve (temp);
                }
            } catch(e) {
                reject(e);
            }
        })
    }

    if(_self.status === "PENDING") {
        return new DiyP(function(resolve,reject){
            _self.ResolveCallback.push(function(data){
               try {
                    var temp = onResolved(data);
                    if(temp instanceof DiyP) {
                        temp.then(resolve,reject);
                    } else {
                        resolve(temp);
                    }
                } catch(e) {
                    reject (e);
                }
            });

            _self.RejectCallback.push(function(reason){
                try {
                     var temp = onRejected(reason);
                     if(temp instanceof DiyP) {
                         temp.then(resolve,reject);
                     } else {
                        resolve (temp);
                     }
                 } catch(e) {
                     reject (e);
                 }
             });
        })
    }
}

DiyP.prototype.catch = function(onRejected) {
    return this.then(null, onRejected)
  }

DiyP.all = function(arr) {
    if (!Array.isArray(arr)) {
        throw('you must hava an array');
    }

    var result = [];
    
    var length = arr.length;

    return new DiyP(function(resolve,reject){
        for(var i = 0; i < arr.length; i++) {
            arr[i].then(resolver(i),rejector);
        }

        function resolveHandler (index,data) {
            result[index] = data;

            if(--length == 0) {
                resolve(result);
            }
        }

        function resolver (index) {
            return function (data) {
                resolveHandler(index,data);
            }
        }

        function rejector (data) {
            reject(data);
        }
    });
}