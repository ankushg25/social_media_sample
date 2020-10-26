"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(userListService) {
        var _this = this;
        this.userListService = userListService;
        this.dataSource = [
            {
                "id": 1,
                "fname": "Ankush1",
                "lname": "Gupta1",
                "avatar": ""
            },
            {
                "id": 2,
                "fname": "Ankush2",
                "lname": "Gupta2",
                "avatar": ""
            },
            {
                "id": 3,
                "fname": "Ankush3",
                "lname": "Gupta3",
                "avatar": ""
            },
            {
                "id": 4,
                "fname": "Ankush4",
                "lname": "Gupta4",
                "avatar": ""
            },
            {
                "id": 5,
                "fname": "Ankush5",
                "lname": "Gupta5",
                "avatar": ""
            },
            {
                "id": 6,
                "fname": "Ankush6",
                "lname": "Gupta6",
                "avatar": ""
            }
        ];
        this.displayedColumns = ['id', 'fname', 'lname', 'avatar'];
        this.userListService.userList().subscribe(function (data) {
            _this.dataSource = data;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
