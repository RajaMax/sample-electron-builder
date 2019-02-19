webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_bill_component__ = __webpack_require__("./src/app/bill/bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'bill', component: __WEBPACK_IMPORTED_MODULE_2__bill_bill_component__["a" /* BillComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_3__product_product_component__["a" /* ProductComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div (window:keypress)=\"doSomething($event)\">click me<div> -->\n<h1>Welcome GSM </h1>\n<a routerLink=\"/bill\">Bill (Ctrl+B)</a>\n<a routerLink=\"/product\">Product (Ctrl+P)</a>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_electron__ = __webpack_require__("electron");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_electron__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(ds, router) {
        var _this = this;
        this.ds = ds;
        this.router = router;
        var menu = __WEBPACK_IMPORTED_MODULE_4_electron__["remote"].Menu.buildFromTemplate([{
                label: 'File',
                submenu: [{
                        label: 'Open',
                        click: function () {
                            console.log("render");
                            _this.router.navigate(['/product']);
                        }
                    },
                    {
                        role: 'toggledevtools'
                    },
                ]
            }]);
        __WEBPACK_IMPORTED_MODULE_4_electron__["remote"].Menu.setApplicationMenu(menu);
    }
    AppComponent.prototype.handleKeyboardEvent = function (event) {
        switch (true) {
            case (event.code === "KeyB" && event.ctrlKey):
                this.router.navigate(['/bill']);
                break;
            case (event.code === "KeyP" && event.ctrlKey):
                this.router.navigate(['/product']);
                break;
            default:
        }
    };
    AppComponent.prototype.open = function () {
        console.log("Open was triggered");
        //ipcRenderer.on('open-file', this.open.bind(this));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "handleKeyboardEvent", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bill_bill_component__ = __webpack_require__("./src/app/bill/bill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__bill_bill_component__["a" /* BillComponent */],
                __WEBPACK_IMPORTED_MODULE_7__product_product_component__["a" /* ProductComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // other imports ...
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/bill/bill.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bill/bill.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bill works! fijnsadjnfcsdjn\n</p>\n"

/***/ }),

/***/ "./src/app/bill/bill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillComponent = /** @class */ (function () {
    function BillComponent(router) {
        this.router = router;
    }
    BillComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.code === "KeyS" && event.ctrlKey) {
            this.router.navigate(['/']);
        }
    };
    BillComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BillComponent.prototype, "handleKeyboardEvent", null);
    BillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bill',
            template: __webpack_require__("./src/app/bill/bill.component.html"),
            styles: [__webpack_require__("./src/app/bill/bill.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], BillComponent);
    return BillComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nedb__ = __webpack_require__("./node_modules/nedb/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nedb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nedb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.endPoint = 'http://localhost:30001';
        this.notAddCall = true;
        var filepath = __dirname + '/' + "product_db";
        this.db = new __WEBPACK_IMPORTED_MODULE_1_nedb__({ filename: filepath });
        this.db.loadDatabase(function (err) {
        });
    }
    /**
    *
    * @param {AddProjectData}
    * @returns {Observable<User>}
    * @memberof AuthService
    */
    DataService.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var obj = {};
            //var obj = {status: { $nin: ['delete'] }};
            _this.db.find(obj, function (err, docs) {
                if (err)
                    reject(err);
                resolve(docs);
            });
        });
    };
    DataService.prototype.getNonCloudData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.find({ isCloud: false }, function (err, docs) {
                if (err)
                    reject(err);
                resolve(docs);
            });
        });
    };
    DataService.prototype.getColudData = function () {
        var url = this.endPoint + "/product";
        return this.http.get(url)
            .map(function (res) {
            if (res.code === 403) {
                return res;
            }
            else {
                return res.data ? res.data : [];
            }
        })
            .do(function (_) { return _; }, function () {
            return console.log("error");
        });
    };
    DataService.prototype.deleteRecord = function (record) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.remove({ _id: record._id }, function (err, numRemoved) {
                if (err)
                    reject(err);
                resolve(numRemoved);
            });
        });
    };
    DataService.prototype.addRecord = function (record) {
        var _this = this;
        record.isCloud = false;
        record.status = "add";
        record.cloud_id = "";
        return new Promise(function (resolve, reject) {
            _this.db.insert(record, function (err, record) {
                if (err)
                    reject(err);
                resolve(record);
            });
        });
    };
    DataService.prototype.addCloudProduct = function (data, staus) {
        var _this = this;
        console.log(staus);
        if (this.notAddCall) {
            this.notAddCall = false;
            var url = this.endPoint + "/product";
            return this.http
                .post(url, data, {
                observe: "response"
            })
                .map(function (res) {
                var product = res.body;
                _this.notAddCall = true;
                return product;
            })
                .do(function (_) { return _; }, function () {
                _this.notAddCall = true;
                console.log("error");
            });
        }
    };
    ;
    DataService.prototype.deleteCloudProduct = function (id) {
        var url = this.endPoint + "/product/" + id;
        return this.http
            .delete(url, {
            observe: "response"
        })
            .map(function (res) {
            var user = res.body.data;
            return user;
        })
            .do(function (_) { return _; }, function () {
            return console.log("error");
        });
    };
    ;
    DataService.prototype.changeStatus = function (data, cloudId) {
        var _this = this;
        console.log("changeStatus");
        console.log("cloudId " + cloudId);
        var obj = {};
        if (cloudId) {
            obj = { isCloud: true, status: data.status, cloud_id: cloudId };
        }
        else {
            obj = { isCloud: true, status: data.status };
        }
        return new Promise(function (resolve, reject) {
            _this.db.update({ _id: data._id }, { $set: obj }, function (err, record) {
                if (err)
                    reject(err);
                resolve(record);
            });
        });
    };
    DataService.prototype.changeStatusforDelete = function (data) {
        var _this = this;
        console.log("delete changeStatus");
        var obj = { isCloud: false, status: "delete" };
        return new Promise(function (resolve, reject) {
            _this.db.update({ _id: data._id }, { $set: obj }, function (err, record) {
                if (err)
                    reject(err);
                resolve(record);
            });
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n      <th>Product</th>\n      <th>Stock</th>\n      <th>Cloud</th>\n      <th>status</th>\n      <th>cloud id</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let record of records;index as i\">\n      <td>\n        {{record?.product}}\n      </td>\n      <td>\n        {{record?.stock}}\n      </td>\n      <td>\n        {{record?.isCloud}}\n      </td>\n      <td>\n        {{record?.status}}\n      </td>\n      <td>\n        {{record?.cloud_id}}\n      </td>\n      <td>\n        <span (click)=\"delete(record)\">X</span>\n      </td>\n    </tr>\n    <!-- <tr *ngIf=\"!records?.length\">\n      <td>\n        <strong>NO Product</strong>\n      </td>\n    </tr> -->\n  </tbody>\n</table>\n\n<form [formGroup]=\"myGroup\" (ngSubmit)=\"addProduct()\">\n  product : <input formControlName=\"product\" id=\"product\">\n  stock : <input formControlName=\"stock\" id=\"stock\">\n  <button type=\"submit\" >Add</button>\n</form>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(ds, router, http) {
        this.ds = ds;
        this.router = router;
        this.http = http;
        this.records = [];
        this.nonCloduData = [];
        this.myGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            product: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            stock: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    ProductComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.code === "KeyS" && event.ctrlKey) {
            this.addProduct();
        }
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initialFunciton();
        setInterval(function () {
            _this.initialFunciton();
        }, 3000);
    };
    ProductComponent.prototype.initialFunciton = function () {
        var _this = this;
        console.log("initial");
        this.ds.getNonCloudData().then(function (arrayData) {
            console.log(arrayData);
            _this.nonCloduData = arrayData;
            console.log(navigator.onLine);
            if (navigator.onLine) {
                _this.nonCloduData.forEach(function (element) {
                    _this.toMoveCloud(element);
                });
            }
        }).catch(function (err) { return console.error(err); });
        this.ds.getData().then(function (docs) {
            _this.records = docs;
        }).catch(function (err) { return console.error(err); });
    };
    ProductComponent.prototype.addProduct = function () {
        var _this = this;
        this.ds.addRecord(this.myGroup.value)
            .then(function (docs) {
            console.log("navigator " + navigator.onLine);
            if (navigator.onLine) {
                _this.ds.addCloudProduct(_this.myGroup.value, "initial add product").subscribe(function (data) {
                    console.log(data);
                    _this.myGroup.value.product = "";
                    _this.myGroup.value.stock = "";
                    _this.ds.changeStatus(docs, data._id).then(function () {
                        _this.initialFunciton();
                    });
                });
            }
        })
            .catch(function (err) { return console.error(err); });
    };
    ProductComponent.prototype.delete = function (record) {
        var _this = this;
        if (record.cloud_id) {
            this.ds.changeStatusforDelete(record)
                .then(function (docs) {
                _this.initialFunciton();
            })
                .catch(function (err) { return console.error(err); });
        }
        else {
            this.ds.deleteRecord(record)
                .then(function (docs) {
                _this.initialFunciton();
            });
        }
    };
    ProductComponent.prototype.toMoveCloud = function (data) {
        var _this = this;
        console.log("move");
        console.log(data);
        if (data.status === "add") {
            this.ds.addCloudProduct(data, "move cloud add product").subscribe(function (data1) {
                _this.ds.changeStatus(data, data1._id).then(function () {
                });
            });
        }
        else if (data.status === "edit") {
        }
        else if (data.status === "delete") {
            console.log("toMoveCloud delete");
            this.ds.deleteCloudProduct(data.cloud_id).subscribe(function (data1) {
                _this.ds.deleteRecord(data)
                    .then(function (docs) {
                })
                    .catch(function (err) { return console.error(err); });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ProductComponent.prototype, "handleKeyboardEvent", null);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    API_ENDPOINT: 'http://localhost:30001/',
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ "crypto":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "electron":
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "events":
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "util":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map