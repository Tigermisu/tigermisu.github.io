webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_menu_component__ = __webpack_require__("../../../../../src/app/main-menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'home', pathMatch: "full" },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__main_menu_component__["a" /* MainMenuComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppStateService = (function () {
    function AppStateService() {
        this.toolbarClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.toolbarClicked$ = this.toolbarClickedSource.asObservable();
        this.projectChangedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.projectChanged$ = this.projectChangedSource.asObservable();
    }
    Object.defineProperty(AppStateService.prototype, "toolbarClickedStream", {
        get: function () {
            return this.toolbarClicked$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppStateService.prototype, "projectChangedStream", {
        get: function () {
            return this.projectChanged$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppStateService.prototype, "hasActiveProject", {
        get: function () {
            return typeof this.activeProject !== "undefined";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppStateService.prototype, "project", {
        get: function () {
            return this.activeProject;
        },
        enumerable: true,
        configurable: true
    });
    AppStateService.prototype.registerAppComponent = function (app) {
        this.appComponent = app;
    };
    AppStateService.prototype.registerToolbarComponent = function (toolbar) {
        this.toolbarComponent = toolbar;
    };
    AppStateService.prototype.closeActiveProject = function () {
        this.activeProject = undefined;
        this.toolbarComponent.clearActionStack();
    };
    AppStateService.prototype.openProject = function (project) {
        this.activeProject = project;
        this.projectChangedSource.next(this.activeProject);
    };
    AppStateService.prototype.requestToolbar = function (toolbarName) {
        this.toolbarComponent.activateToolbar(toolbarName, true);
    };
    AppStateService.prototype.releaseToolbar = function (toolbarName) {
        this.toolbarComponent.activateToolbar(toolbarName, false);
    };
    AppStateService.prototype.getActiveTool = function () {
        return this.toolbarComponent.activeTool;
    };
    AppStateService.prototype.selectTool = function (toolName) {
        this.toolbarComponent.selectTool(toolName);
    };
    AppStateService.prototype.deselectTool = function () {
        this.toolbarComponent.deselectTool();
    };
    AppStateService.prototype.announceToolbarClick = function (toolEvent) {
        this.toolbarClickedSource.next(toolEvent);
    };
    AppStateService.prototype.undoAction = function () {
        this.toolbarComponent.undoAction();
    };
    AppStateService.prototype.redoAction = function () {
        this.toolbarComponent.redoAction();
    };
    return AppStateService;
}());
AppStateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AppStateService);

//# sourceMappingURL=app-state.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar\">\r\n  <div class=\"brand\">\r\n    <a routerLink=\"/\">Christomata</a>\r\n  </div>\r\n\r\n  <div class=\"title\">\r\n    {{ appStateService.project?.metadata.title }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"workspace\">\r\n  <div class=\"toolbar\">\r\n    <toolbar #toolbar></toolbar>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_state_service__ = __webpack_require__("../../../../../src/app/app-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(appStateService) {
        this.appStateService = appStateService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.appStateService.registerAppComponent(this);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finite_automaton_finite_module__ = __webpack_require__("../../../../../src/app/finite-automaton/finite.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grammar_designer_grammar_module__ = __webpack_require__("../../../../../src/app/grammar-designer/grammar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_state_service__ = __webpack_require__("../../../../../src/app/app-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_component__ = __webpack_require__("../../../../../src/app/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_menu_component__ = __webpack_require__("../../../../../src/app/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__unsaved_changes_guard__ = __webpack_require__("../../../../../src/app/unsaved-changes.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__main_menu_component__["a" /* MainMenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__finite_automaton_finite_module__["a" /* FiniteModule */],
            __WEBPACK_IMPORTED_MODULE_4__grammar_designer_grammar_module__["a" /* GrammarModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__app_state_service__["a" /* AppStateService */],
            __WEBPACK_IMPORTED_MODULE_9__unsaved_changes_guard__["a" /* UnsavedChangesGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/automaton.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Automaton; });
/* unused harmony export State */
/* unused harmony export Transition */
/* unused harmony export Alphabet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphabetSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Coords; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project__ = __webpack_require__("../../../../../src/app/project.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Automaton = (function (_super) {
    __extends(Automaton, _super);
    function Automaton(type) {
        var _this = _super.call(this, type) || this;
        _this.states = [];
        _this.selectedState = null;
        _this.selectedTransition = null;
        _this.alphabet = new Alphabet();
        _this.stateAutoIncrement = 0;
        return _this;
    }
    Automaton.prototype.createState = function (position) {
        var stateNumber = this.stateAutoIncrement++, state = new State(stateNumber, "q" + stateNumber, "normal", new Coords(position.x, position.y));
        if (stateNumber == 0)
            state.type = "initial";
        this.states.push(state);
        return state;
    };
    Automaton.prototype.deleteState = function (state) {
        var index = this.states.indexOf(state);
        this.states.splice(index, 1);
        this.states.forEach(function (currentState) {
            currentState.transitions = currentState.transitions.filter(function (transition) {
                return transition.destination != state;
            });
        });
    };
    Automaton.prototype.deleteTransition = function (transition) {
        var index = transition.origin.transitions.indexOf(transition);
        transition.origin.transitions.splice(index, 1);
        if (transition.shouldDuplicateLayout != 0) {
            transition.destination.transitions.forEach(function (tr) {
                if (tr.destination == transition.origin) {
                    tr.shouldDuplicateLayout = 0;
                }
            });
        }
    };
    Automaton.prototype.addConditionToTransition = function (transition, condition) {
        if (this.alphabet.hasSymbol(condition)) {
            transition.addCondition(condition);
        }
    };
    Automaton.prototype.removeSymbol = function (symbol) {
        var index = this.alphabet.symbols.indexOf(symbol);
        if (index != -1)
            this.alphabet.symbols.splice(index, 1);
        this.states.forEach(function (state) {
            state.transitions.forEach(function (transition) {
                if (transition.hasCondition(symbol)) {
                    transition.removeCondition(symbol);
                }
            });
        });
    };
    return Automaton;
}(__WEBPACK_IMPORTED_MODULE_0__project__["b" /* Project */]));

var State = (function () {
    function State(id, name, type, position) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.layoutPosition = position;
        this.transitions = [];
    }
    Object.defineProperty(State.prototype, "transformPosition", {
        get: function () {
            var position = "translate(" + (this.layoutPosition.x - 30) + "px, "
                + (this.layoutPosition.y - 30) + "px)";
            return position;
        },
        enumerable: true,
        configurable: true
    });
    State.prototype.addTransition = function (to) {
        for (var i = 0; i < this.transitions.length; i++) {
            if (this.transitions[i].destination == to) {
                return this.transitions[i]; // Prevent duplicate transitions
            }
        }
        this.transitions.push(new Transition(this, to));
        return this.transitions[this.transitions.length - 1];
    };
    State.prototype.setType = function (type) {
        this.type = type;
    };
    return State;
}());

var Transition = (function () {
    function Transition(origin, destination) {
        this.origin = origin;
        this.destination = destination;
        this.conditions = [];
        this.shouldDuplicateLayout = 0;
        this.hasRightArrow = true;
        for (var i = 0; i < destination.transitions.length && this.shouldDuplicateLayout == 0; i++) {
            if (destination.transitions[i].destination == origin) {
                destination.transitions[i].shouldDuplicateLayout = 1;
                this.shouldDuplicateLayout = -1;
            }
        }
    }
    Object.defineProperty(Transition.prototype, "conditionsString", {
        get: function () {
            if (this.conditions.length > 0) {
                var setString_1 = "", lastIndex_1 = this.conditions.length - 1;
                this.conditions.forEach(function (symbol, index) {
                    setString_1 += symbol.symbol;
                    if (index != lastIndex_1) {
                        setString_1 += ", ";
                    }
                });
                return setString_1;
            }
            return "\u2205";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transition.prototype, "midPoint", {
        get: function () {
            var x = (this.origin.layoutPosition.x + this.destination.layoutPosition.x) / 2, y = (this.origin.layoutPosition.y + this.destination.layoutPosition.y) / 2;
            return new Coords(x, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transition.prototype, "transformPosition", {
        get: function () {
            if (this.origin == this.destination) {
                return "translate(0, -45px)";
            }
            var midPoint = this.midPoint, x = midPoint.x, y = midPoint.y, angle = Math.atan((this.destination.layoutPosition.y - this.origin.layoutPosition.y)
                / (this.destination.layoutPosition.x - this.origin.layoutPosition.x));
            x -= this.origin.layoutPosition.x;
            y -= this.origin.layoutPosition.y;
            if ((x < 0 && y <= 0) || (x < 0 && y > 0)) {
                this.hasRightArrow = false;
            }
            else {
                this.hasRightArrow = true;
            }
            if (this.shouldDuplicateLayout != 0) {
                if ((this.shouldDuplicateLayout == 1 && x >= 0) || (this.shouldDuplicateLayout == -1 && x < 0)) {
                    y -= Math.cos(angle) * 8 * this.shouldDuplicateLayout;
                    x += Math.sin(angle) * 8 * this.shouldDuplicateLayout;
                }
                else if ((this.shouldDuplicateLayout == 1 && x < 0) || (this.shouldDuplicateLayout == -1 && x >= 0)) {
                    y += Math.cos(angle) * 8 * this.shouldDuplicateLayout;
                    x -= Math.sin(angle) * 8 * this.shouldDuplicateLayout;
                }
            }
            angle *= 180 / Math.PI; // Convert to degrees
            return "translate(" + x + "px, " + y + "px) rotate(" + angle + "deg)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transition.prototype, "width", {
        get: function () {
            if (this.origin == this.destination) {
                return 45;
            }
            return this.origin.layoutPosition.distanceTo(this.destination.layoutPosition) - 60;
        },
        enumerable: true,
        configurable: true
    });
    Transition.prototype.hasCondition = function (condition) {
        for (var i = 0; i < this.conditions.length; i++) {
            if (this.conditions[i].symbol == condition.symbol)
                return true;
        }
        return false;
    };
    Transition.prototype.addCondition = function (condition) {
        if (!this.hasCondition(condition)) {
            this.conditions.push(condition);
            this.conditions.sort(function (a, b) {
                if (a.symbol < b.symbol)
                    return -1;
                if (a.symbol > b.symbol)
                    return 1;
                return 0;
            });
        }
    };
    Transition.prototype.removeCondition = function (condition) {
        var index = this.conditions.indexOf(condition);
        if (index != -1)
            this.conditions.splice(index, 1);
    };
    return Transition;
}());

var Alphabet = (function () {
    function Alphabet() {
        this.symbols = [];
    }
    Alphabet.prototype.addSymbol = function (symbol) {
        var repeatedSymbol = this.hasSymbol(symbol);
        if (!repeatedSymbol) {
            this.symbols.push(symbol);
            this.symbols.sort(function (a, b) {
                if (a.symbol < b.symbol)
                    return -1;
                if (a.symbol > b.symbol)
                    return 1;
                return 0;
            });
        }
    };
    Alphabet.prototype.removeSymbol = function (symbol) {
        var index = this.symbols.indexOf(symbol);
        if (index != -1)
            this.symbols.splice(index, 1);
    };
    Alphabet.prototype.hasSymbol = function (symbol) {
        for (var i = 0; i < this.symbols.length; i++) {
            if (this.symbols[i].symbol == symbol.symbol)
                return true;
        }
        return false;
    };
    Object.defineProperty(Alphabet.prototype, "formalString", {
        get: function () {
            if (this.symbols.length > 0) {
                var setString_2 = "", lastIndex_2 = this.symbols.length - 1;
                this.symbols.forEach(function (symbol, index) {
                    setString_2 += symbol.symbol;
                    if (index != lastIndex_2) {
                        setString_2 += ", ";
                    }
                });
                return '\u03A3 = {' + setString_2 + '}';
            }
            return '\u03A3 = { \u2205 }';
        },
        enumerable: true,
        configurable: true
    });
    return Alphabet;
}());

var AlphabetSymbol = (function () {
    function AlphabetSymbol(symbol) {
        this.symbol = symbol;
    }
    AlphabetSymbol.prototype.toString = function () {
        return this.symbol;
    };
    return AlphabetSymbol;
}());

var Coords = (function () {
    function Coords(x, y) {
        this.x = x;
        this.y = y;
    }
    Coords.prototype.distanceTo = function (point) {
        return Math.sqrt(this.squareDistanceTo(point));
    };
    Coords.prototype.squareDistanceTo = function (point) {
        return Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2);
    };
    return Coords;
}());

//# sourceMappingURL=automaton.js.map

/***/ }),

/***/ "../../../../../src/app/finite-automaton/diagram.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".state {\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  top: 0;\r\n  left: 0;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 60px;\r\n  height: 60px;\r\n  border: #333 solid 1px;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.state.selected {\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.state.initial:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -15px;\r\n  border-left: 8px solid #333;\r\n  border-top: 6px solid transparent;\r\n  border-bottom: 6px solid transparent;\r\n}\r\n\r\n.state.initial:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 32px;\r\n  height: 1px;\r\n  background-color: #333;\r\n  left: -45px;\r\n}\r\n\r\n.state.final .finalCircle:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  pointer-events: none;\r\n  width: 48px;\r\n  height: 48px;\r\n  border: #333 solid 1px;\r\n  border-radius: 50%;\r\n  left: 4px;\r\n  top: 4px;\r\n}\r\n\r\n.transition {\r\n  position: absolute;\r\n  width: 10px;\r\n  border-top: #333 solid 1px;\r\n}\r\n\r\n.transition.selected {\r\n  border-top-width: 3px;\r\n}\r\n\r\n.transition:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-top: 6px solid transparent;\r\n  border-bottom: 6px solid transparent;\r\n}\r\n\r\n.transition.self {\r\n  height: 45px;\r\n  border-radius: 50%;\r\n  border-right: #333 solid 1px;\r\n  border-left: #333 solid 1px;\r\n  border-bottom: transparent solid 3px;\r\n}\r\n\r\n.transition.rightArrow:after {\r\n  right: -1px;\r\n  top: -6.5px;\r\n  border-left: 8px solid #333;\r\n}\r\n\r\n.transition.leftArrow:after {\r\n  left: -1px;\r\n  top: -6.5px;\r\n  border-right: 8px solid #333;\r\n}\r\n\r\n.transition:not(.self).selected.leftArrow:after,\r\n.transition:not(.self).active.leftArrow:after {\r\n  top: -7.5px;\r\n  left: -2px;\r\n}\r\n\r\n.transition:not(.self).selected.rightArrow:after,\r\n.transition:not(.self).active.rightArrow:after {\r\n  top: -7.5px;\r\n  right: -2px;\r\n}\r\n\r\n.transition.self:after {\r\n  right: 0;\r\n  top: initial;\r\n  bottom: 0;\r\n  border-left: 8px solid #333;\r\n  -webkit-transform: rotate(120deg);\r\n          transform: rotate(120deg);\r\n}\r\n\r\n.transition .conditions {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: -25px;\r\n  color: #999;\r\n  -webkit-transform: translate(-50%);\r\n          transform: translate(-50%);\r\n}\r\n\r\n.transition.duplicateLayout.leftArrow .conditions {\r\n  top: 0;\r\n}\r\n\r\n.transition.self .conditions {\r\n  min-width: 100px;\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 10px;\r\n  bottom: 45px;\r\n  top: initial;\r\n}\r\n\r\n.context-menu {\r\n  position: absolute;\r\n  padding: 8px;\r\n  width: 160px;\r\n  background-color: #fff;\r\n  box-shadow: 1px 2px 6px 0px #999;\r\n  z-index: 5;\r\n}\r\n\r\n.context-menu:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -10px;\r\n  left: 72px;\r\n  border-top: #999 solid 10px;\r\n  border-right: transparent solid 8px;\r\n  border-left: transparent solid 8px;\r\n}\r\n\r\n.context-menu input[type=text] {\r\n  max-width: 100%;\r\n  margin-bottom: 5px;\r\n  font-size: 16px;\r\n  height: 30px;\r\n  padding: 4px;\r\n}\r\n\r\n.context-menu .checkbox-wrapper {\r\n  margin: 5px 0;\r\n}\r\n\r\n.context-menu .alphabet-symbols {\r\n  margin: 0;\r\n}\r\n\r\n.context-menu .plus-adder input {\r\n  max-width: calc(100% - 30px);\r\n  margin: 0;\r\n}\r\n\r\n.context-menu .plus-adder button {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.context-menu .formal-string {\r\n  display: block;\r\n  text-align: center;\r\n  margin-top: 5px;\r\n  font-size: 10px;\r\n  color: #bcbcbc;\r\n}\r\n\r\n.context-menu .alphabet-symbols .symbol-entry {\r\n  margin: 1px;\r\n  padding: 2px;\r\n}\r\n\r\n.state.active {\r\n  background-color: #67b2e4;\r\n}\r\n\r\n.transition.active {\r\n  border-color: #3498db;\r\n  border-width: 3px;\r\n}\r\n\r\n.transition.active.self {\r\n  border-bottom-color: transparent;\r\n}\r\n\r\n.transition.active.leftArrow:after {\r\n  border-right-color: #3498db;\r\n}\r\n\r\n.transition.active.rightArrow:after {\r\n  border-left-color: #3498db;\r\n}\r\n\r\n.state.incorrect {\r\n  background-color: #e74c3c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/finite-automaton/diagram.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"canvas-wrapper\" (toolclicked)=\"onToolClicked($event)\" #canvas\r\n  (mousedown)=\"onCanvasMouseDown($event)\"\r\n  (mouseup)=\"onCanvasMouseUp($event)\"\r\n  (contextmenu)=\"preventContextMenu($event)\"\r\n  (mousemove)=\"onCanvasMouseMove($event)\">\r\n  \r\n  <div class=\"state\" *ngFor=\"let state of automaton.states\"\r\n  [style.transform]=\"state.transformPosition\"\r\n  [class.active]=\"automaton.activeElement == state\"\r\n  [class.incorrect]=\"automaton.incorrectElement == state\"\r\n  [class.selected]=\"automaton.selectedState == state\"\r\n  [class.initial]=\"state.type == 'initial' || state.type == 'ambivalent'\"\r\n  [class.final]=\"state.type == 'final' || state.type == 'ambivalent'\"\r\n  (mouseup)=\"onStateMouseUp($event, state)\"\r\n  (mousemove)=\"onStateMouseMove($event, state)\">\r\n    <div class=\"finalCircle\"></div>\r\n    <span class=\"state-name\">{{ state.name }}</span>\r\n    <div class=\"transition\" *ngFor=\"let transition of state.transitions\"\r\n    [style.transform]=\"sanitizeStyle(transition.transformPosition)\"\r\n    [style.width.px]=\"transition.width\"\r\n    [class.self]=\"transition.origin == transition.destination\"\r\n    [class.selected]=\"automaton.selectedTransition == transition\"\r\n    [class.rightArrow]=\"transition.hasRightArrow\"\r\n    [class.active]=\"automaton.activeElement == transition\"\r\n    [class.leftArrow]=\"!transition.hasRightArrow\"\r\n    [class.duplicateLayout]=\"transition.shouldDuplicateLayout != 0\"\r\n    (mousedown)=\"onTransitionMouseDown($event, transition)\"\r\n    (mouseup)=\"onTransitionMouseUp($event, transition)\">\r\n      <div class=\"conditions\">\r\n        <span class=\"condition\" *ngIf=\"transition.conditions.length > 0;else kleenClosure\">\r\n          <span *ngIf=\"transition.conditions.length < automaton.alphabet.symbols.length;else sigmaSpan\">\r\n              {{ transition.conditionsString }}\r\n          </span>\r\n          <ng-template #sigmaSpan>\r\n              &#x3A3;\r\n          </ng-template>\r\n        </span>\r\n        <ng-template #kleenClosure>\r\n          <span class=\"condition\" *ngIf=\"transition.conditions.length == 0\">&#x3B5;</span>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"context-menu\" *ngIf=\"showContextMenu\"\r\n  [style.bottom.px]=\"contextMenuBottom\"\r\n  [style.left.px]=\"contextMenuLeft\">\r\n  <div *ngIf=\"contextMenuType == 'state'\">\r\n    <label for=\"stateName\">Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"automaton.selectedState.name\" (change)=\"automaton.metadata.isUnsaved = true;\">\r\n\r\n    <label for=\"properties\">Properties</label>\r\n    <div class=\"checkbox-wrapper\">\r\n      <input type=\"checkbox\" name=\"properties\" value=\"isInitial\" id=\"isInitial\"\r\n      [checked]=\"automaton.selectedState.type == 'initial'\r\n                || automaton.selectedState.type == 'ambivalent'\"\r\n      (change)=\"onToggleStateTypeCheckbox('initial', $event)\"> <label for=\"isInitial\">Initial State</label>\r\n      <input type=\"checkbox\" name=\"properties\" value=\"isFinal\" id=\"isFinal\"\r\n      [checked]=\"automaton.selectedState.type == 'final'\r\n                || automaton.selectedState.type == 'ambivalent'\"\r\n      (change)=\"onToggleStateTypeCheckbox('final', $event)\"> <label for=\"isFinal\">Final State</label>\r\n    </div>\r\n    \r\n  </div>\r\n  <div *ngIf=\"contextMenuType == 'transition'\">\r\n    <div class=\"alphabet-symbols\">\r\n      <div class=\"symbol-entry\" *ngFor=\"let condition of automaton.selectedTransition.conditions\">\r\n        {{ condition }}\r\n        <span class=\"remove\" (click)=\"removeConditionFromTransition(condition)\">x</span>\r\n      </div>\r\n      <span *ngIf=\"automaton.selectedTransition.conditions.length == 0\">\r\n        An empty transition defaults to &#x3B5;\r\n      </span>\r\n      <span class=\"formal-string\">{{ automaton.alphabet.formalString }}</span>\r\n    </div>\r\n    <div class=\"plus-adder\">\r\n      <input type=\"text\" id=\"alphabet\" #conditionInput \r\n          (keyup.enter)=\"addConditionToTransition(conditionInput.value); conditionInput.value = ''\"\r\n          (blur)=\"addConditionToTransition(conditionInput.value); conditionInput.value = ''\">\r\n      <button (click)=\"addConditionToTransition(conditionInput.value); conditionInput.value = ''\">+</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/finite-automaton/diagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__automaton__ = __webpack_require__("../../../../../src/app/automaton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state_service__ = __webpack_require__("../../../../../src/app/app-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiagramComponent = (function () {
    function DiagramComponent(appStateService, sanitizer) {
        this.appStateService = appStateService;
        this.sanitizer = sanitizer;
        this.lastClickDetails = { isMouseDown: false };
        this.draggedState = null;
    }
    DiagramComponent.prototype.onKeyUp = function ($event) {
        var keyCode = $event.code;
        if (!($event.ctrlKey || $event.srcElement.localName == "input")) {
            switch (keyCode) {
                case "Delete":
                    this.deleteSelectedItem();
                    break;
                case "KeyT":
                    this.appStateService.selectTool("newFiniteTransition");
                    break;
                case "KeyS":
                    this.appStateService.selectTool("newFiniteState");
                    break;
            }
        }
    };
    ;
    Object.defineProperty(DiagramComponent.prototype, "showContextMenu", {
        get: function () {
            if (typeof (this.appStateService.project) != "undefined") {
                return (this.automaton.selectedState != null
                    && this.appStateService.getActiveTool() != "newFiniteTransition")
                    || this.automaton.selectedTransition != null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiagramComponent.prototype, "contextMenuType", {
        get: function () {
            if (typeof (this.appStateService.project) != "undefined") {
                if (this.automaton.selectedState != null) {
                    return "state";
                }
                else if (this.automaton.selectedTransition != null) {
                    return "transition";
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiagramComponent.prototype, "contextMenuBottom", {
        get: function () {
            if (typeof (this.appStateService.project) != "undefined") {
                var bottomOffset = this.canvasRef.nativeElement.offsetHeight + 45;
                if (this.contextMenuType == "state") {
                    return bottomOffset - this.automaton.selectedState.layoutPosition.y;
                }
                else if (this.contextMenuType == "transition") {
                    return bottomOffset - this.automaton.selectedTransition.midPoint.y - 10;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiagramComponent.prototype, "contextMenuLeft", {
        get: function () {
            if (typeof (this.appStateService.project) != "undefined") {
                if (this.contextMenuType == "state") {
                    return this.automaton.selectedState.layoutPosition.x + 120;
                }
                else if (this.contextMenuType == "transition") {
                    return this.automaton.selectedTransition.midPoint.x + 125;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.automaton = this.appStateService.project;
        this.appStateService.requestToolbar('finite-automaton');
        this.toolbarSubscription = this.appStateService.toolbarClickedStream.subscribe(function ($event) {
            _this.onToolClicked($event);
        });
        this.projectSubscription = this.appStateService.projectChangedStream.subscribe(function (newProject) {
            _this.automaton = newProject;
        });
    };
    DiagramComponent.prototype.ngOnDestroy = function () {
        this.appStateService.releaseToolbar('finite-automaton');
        this.toolbarSubscription.unsubscribe();
        this.projectSubscription.unsubscribe();
    };
    DiagramComponent.prototype.createState = function (position) {
        this.automaton.createState(position);
    };
    DiagramComponent.prototype.deleteSelectedItem = function () {
        if (this.automaton.selectedState != null) {
            this.automaton.deleteState(this.automaton.selectedState);
            this.automaton.selectedState = null;
            this.automaton.metadata.isUnsaved = true;
        }
        else if (this.automaton.selectedTransition != null) {
            this.automaton.deleteTransition(this.automaton.selectedTransition);
            this.automaton.selectedTransition = null;
            this.automaton.metadata.isUnsaved = true;
        }
    };
    DiagramComponent.prototype.onToolClicked = function ($event) {
        switch ($event.target) {
            case "delete":
                this.deleteSelectedItem();
                break;
        }
    };
    DiagramComponent.prototype.onCanvasMouseDown = function ($event) {
        this.lastClickDetails = {
            x: $event.pageX,
            y: $event.pageY,
            button: $event.button,
            ctrl: $event.ctrlKey,
            shift: $event.shiftKey,
            timestamp: $event.timeStamp,
            target: $event.target,
            isMouseDown: true,
        };
    };
    DiagramComponent.prototype.preventContextMenu = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return false;
    };
    DiagramComponent.prototype.onCanvasMouseUp = function ($event) {
        this.draggedState = null;
        if (this.lastClickDetails.isMouseDown) {
            this.lastClickDetails.isMouseDown = false;
            var clickDetails = {
                x: $event.pageX,
                y: $event.pageY,
                button: $event.button,
                ctrl: $event.ctrlKey,
                shift: $event.shiftKey,
                timestamp: $event.timeStamp,
                target: $event.target
            };
            if (clickDetails.button == 0) {
                var distance = new __WEBPACK_IMPORTED_MODULE_1__automaton__["c" /* Coords */](clickDetails.x, clickDetails.y).squareDistanceTo(new __WEBPACK_IMPORTED_MODULE_1__automaton__["c" /* Coords */](this.lastClickDetails.x, this.lastClickDetails.y));
                if (distance < 64) {
                    this.processCanvasLeftClick(clickDetails);
                }
            }
        }
    };
    DiagramComponent.prototype.processCanvasLeftClick = function (clickDetails) {
        var activeTool = this.appStateService.getActiveTool();
        this.automaton.selectedState = null;
        this.automaton.selectedTransition = null;
        switch (activeTool) {
            case 'newFiniteState':
                this.automaton.metadata.isUnsaved = true;
                this.createState({ x: clickDetails.x - 200, y: clickDetails.y - 88 });
                break;
            default:
                this.automaton.selectedState = null;
                this.automaton.selectedTransition = null;
        }
    };
    DiagramComponent.prototype.onStateMouseMove = function ($event, state) {
        if (this.lastClickDetails.isMouseDown
            && this.lastClickDetails.target == $event.target
            && (this.lastClickDetails.x != $event.pageX
                || this.lastClickDetails.y != $event.pageY)) {
            this.draggedState = state;
        }
    };
    DiagramComponent.prototype.onCanvasMouseMove = function ($event) {
        if (this.draggedState != null) {
            this.draggedState.layoutPosition = new __WEBPACK_IMPORTED_MODULE_1__automaton__["c" /* Coords */](this.draggedState.layoutPosition.x = $event.pageX - 200, this.draggedState.layoutPosition.y = $event.pageY - 88);
            this.automaton.metadata.isUnsaved = true;
        }
        else if (this.lastClickDetails.isMouseDown && $event.buttons == 2) {
            var deltaX_1 = $event.pageX - this.lastClickDetails.x, deltaY_1 = $event.pageY - this.lastClickDetails.y;
            this.lastClickDetails.x = $event.pageX;
            this.lastClickDetails.y = $event.pageY;
            this.automaton.states.forEach(function (state) {
                state.layoutPosition.x += deltaX_1;
                state.layoutPosition.y += deltaY_1;
            });
            this.automaton.metadata.isUnsaved = true;
        }
    };
    DiagramComponent.prototype.onTransitionMouseDown = function ($event, transition) {
        $event.stopPropagation();
        this.lastClickDetails = {
            x: $event.pageX,
            y: $event.pageY,
            button: $event.button,
            ctrl: $event.ctrlKey,
            shift: $event.shiftKey,
            timestamp: $event.timeStamp,
            target: $event.target,
            isMouseDown: false,
        };
    };
    DiagramComponent.prototype.onStateMouseUp = function ($event, state) {
        $event.stopPropagation();
        this.draggedState = null;
        if (this.lastClickDetails.isMouseDown) {
            this.lastClickDetails.isMouseDown = false;
            var clickDetails = {
                x: $event.pageX,
                y: $event.pageY,
                button: $event.button,
                ctrl: $event.ctrlKey,
                shift: $event.shiftKey,
                timestamp: $event.timeStamp,
                target: $event.target
            };
            var distance = new __WEBPACK_IMPORTED_MODULE_1__automaton__["c" /* Coords */](clickDetails.x, clickDetails.y).squareDistanceTo(new __WEBPACK_IMPORTED_MODULE_1__automaton__["c" /* Coords */](this.lastClickDetails.x, this.lastClickDetails.y));
            if (distance < 64) {
                this.processStateLeftClick(clickDetails, state);
            }
        }
    };
    DiagramComponent.prototype.onTransitionMouseUp = function ($event, transition) {
        $event.stopPropagation();
        this.draggedState = null;
        this.lastClickDetails.isMouseDown = false;
        var clickDetails = {
            x: $event.pageX,
            y: $event.pageY,
            button: $event.button,
            ctrl: $event.ctrlKey,
            shift: $event.shiftKey,
            timestamp: $event.timeStamp,
            target: $event.target
        };
        var distance = new __WEBPACK_IMPORTED_MODULE_1__automaton__["c" /* Coords */](clickDetails.x, clickDetails.y).squareDistanceTo(new __WEBPACK_IMPORTED_MODULE_1__automaton__["c" /* Coords */](this.lastClickDetails.x, this.lastClickDetails.y));
        if (distance < 64) {
            this.processTransitionLeftClick(clickDetails, transition);
        }
    };
    DiagramComponent.prototype.processTransitionLeftClick = function (clickDetails, transition) {
        this.appStateService.deselectTool();
        this.automaton.selectedState = null;
        this.automaton.selectedTransition = transition;
    };
    DiagramComponent.prototype.processStateLeftClick = function (clickDetails, state) {
        var activeTool = this.appStateService.getActiveTool();
        switch (activeTool) {
            case 'newFiniteTransition':
                if (this.automaton.selectedState != null) {
                    var transition = this.addTransition(this.automaton.selectedState, state);
                    this.automaton.selectedState = null;
                    this.automaton.selectedTransition = transition;
                    this.automaton.metadata.isUnsaved = true;
                }
                else {
                    this.automaton.selectedTransition = null;
                    this.automaton.selectedState = state;
                }
                break;
            default:
                this.automaton.selectedTransition = null;
                this.automaton.selectedState = state;
        }
    };
    DiagramComponent.prototype.onToggleStateTypeCheckbox = function (checkboxType, event) {
        var currentType = this.automaton.selectedState.type;
        if ((currentType == "initial" && checkboxType == "initial")
            || (currentType == "final" && checkboxType == "final")) {
            this.automaton.selectedState.setType("normal");
        }
        else if ((currentType == "initial" && checkboxType == "final")
            || (currentType == "final" && checkboxType == "initial")) {
            this.automaton.selectedState.setType("ambivalent");
        }
        else if ((currentType == "normal" && checkboxType == "initial")
            || (currentType == "ambivalent" && checkboxType == "final")) {
            this.automaton.selectedState.setType("initial");
        }
        else {
            this.automaton.selectedState.setType("final");
        }
        this.automaton.metadata.isUnsaved = true;
    };
    DiagramComponent.prototype.addTransition = function (from, to) {
        this.automaton.metadata.isUnsaved = true;
        return from.addTransition(to);
    };
    DiagramComponent.prototype.sanitizeStyle = function (unsafeStyle) {
        return this.sanitizer.bypassSecurityTrustStyle(unsafeStyle);
    };
    DiagramComponent.prototype.removeConditionFromTransition = function (condition) {
        this.automaton.metadata.isUnsaved = true;
        this.automaton.selectedTransition.removeCondition(condition);
    };
    DiagramComponent.prototype.addConditionToTransition = function (conditionInput) {
        var _this = this;
        if (conditionInput.trim() != '') {
            var symbolArray = conditionInput.trim().split(',');
            symbolArray.forEach(function (stringSymbol) {
                var symbol = new __WEBPACK_IMPORTED_MODULE_1__automaton__["a" /* AlphabetSymbol */](stringSymbol.trim());
                if (symbol.symbol != "") {
                    _this.automaton.metadata.isUnsaved = true;
                    _this.automaton.addConditionToTransition(_this.automaton.selectedTransition, symbol);
                }
            });
        }
    };
    return DiagramComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], DiagramComponent.prototype, "canvasRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiagramComponent.prototype, "onKeyUp", null);
DiagramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/finite-automaton/diagram.component.html"),
        styles: [__webpack_require__("../../../../../src/app/finite-automaton/diagram.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_state_service__["a" /* AppStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_state_service__["a" /* AppStateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object])
], DiagramComponent);

var _a, _b, _c;
//# sourceMappingURL=diagram.component.js.map

/***/ }),

/***/ "../../../../../src/app/finite-automaton/finite-automaton.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiniteAutomaton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__automaton__ = __webpack_require__("../../../../../src/app/automaton.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FiniteAutomaton = (function (_super) {
    __extends(FiniteAutomaton, _super);
    function FiniteAutomaton(isDeterministic) {
        var _this = _super.call(this, "finite-automaton") || this;
        _this.isDeterministic = isDeterministic;
        return _this;
    }
    return FiniteAutomaton;
}(__WEBPACK_IMPORTED_MODULE_0__automaton__["b" /* Automaton */]));

//# sourceMappingURL=finite-automaton.js.map

/***/ }),

/***/ "../../../../../src/app/finite-automaton/finite-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiniteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagram_component__ = __webpack_require__("../../../../../src/app/finite-automaton/diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finite_component__ = __webpack_require__("../../../../../src/app/finite-automaton/finite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_component__ = __webpack_require__("../../../../../src/app/finite-automaton/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simulator_component__ = __webpack_require__("../../../../../src/app/finite-automaton/simulator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__options_component__ = __webpack_require__("../../../../../src/app/finite-automaton/options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__unsaved_changes_guard__ = __webpack_require__("../../../../../src/app/unsaved-changes.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'finite',
        component: __WEBPACK_IMPORTED_MODULE_3__finite_component__["a" /* FiniteComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_7__unsaved_changes_guard__["a" /* UnsavedChangesGuard */]],
        children: [
            {
                path: '',
                redirectTo: 'diagram',
                pathMatch: 'full'
            },
            {
                path: 'diagram',
                component: __WEBPACK_IMPORTED_MODULE_2__diagram_component__["a" /* DiagramComponent */],
                children: [
                    {
                        path: "simulator",
                        component: __WEBPACK_IMPORTED_MODULE_5__simulator_component__["a" /* SimulatorComponent */]
                    }
                ]
            },
            {
                path: 'table',
                component: __WEBPACK_IMPORTED_MODULE_4__table_component__["a" /* TableComponent */]
            },
            {
                path: 'options',
                component: __WEBPACK_IMPORTED_MODULE_6__options_component__["a" /* OptionsComponent */]
            }
        ]
    },
];
var FiniteRoutingModule = (function () {
    function FiniteRoutingModule() {
    }
    return FiniteRoutingModule;
}());
FiniteRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], FiniteRoutingModule);

//# sourceMappingURL=finite-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/finite-automaton/finite.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <a routerLinkActive=\"active\" routerLink=\"diagram\">\r\n    <div class=\"menu-item\">\r\n      <span>Diagram</span>\r\n    </div>\r\n  </a>\r\n  <a routerLinkActive=\"active\" routerLink=\"diagram/simulator\">\r\n    <div class=\"menu-item indent\">\r\n      <span>Simulation</span>\r\n    </div>\r\n  </a>\r\n  <a routerLinkActive=\"active\" routerLink=\"table\">\r\n    <div class=\"menu-item\">\r\n      <span>Transition Table</span>\r\n    </div>\r\n  </a>\r\n\r\n  <a routerLinkActive=\"active\" routerLink=\"options\">\r\n    <div class=\"menu-item\">\r\n      <span>Options</span>\r\n    </div>\r\n  </a>\r\n</div>\r\n<div class=\"diagram-wrapper\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/finite-automaton/finite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiniteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_component__ = __webpack_require__("../../../../../src/app/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finite_automaton__ = __webpack_require__("../../../../../src/app/finite-automaton/finite-automaton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__automaton__ = __webpack_require__("../../../../../src/app/automaton.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FiniteComponent = (function (_super) {
    __extends(FiniteComponent, _super);
    function FiniteComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FiniteComponent.prototype.onKeyDown = function ($event) {
        var keyCode = $event.code;
        if ($event.ctrlKey) {
            $event.preventDefault();
            $event.stopPropagation();
            switch (keyCode) {
                case "KeyO":
                    this.openFile(this.parseAutomatonObject);
                    break;
                case "KeyN":
                    this.createNewFSM();
                    break;
                case "KeyS":
                    this.saveProject(this.saveFilterFunction);
                    break;
                default:
                    _super.prototype.onKeyDown.call(this, $event);
            }
        }
    };
    FiniteComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.appStateService.hasActiveProject) {
            this.project = this.appStateService.project;
            if (this.project.type != "finite-automaton") {
                this.router.navigateByUrl("/home", { replaceUrl: true });
            }
        }
        else {
            this.createNewFSM();
        }
    };
    FiniteComponent.prototype.onToolClicked = function ($event) {
        switch ($event.target) {
            case "new":
                this.createNewFSM();
                break;
            case "open":
                this.openFile(this.parseAutomatonObject);
                break;
            case "save":
                this.saveProject(this.saveFilterFunction);
                break;
            default:
                _super.prototype.onToolClicked.call(this, $event);
        }
    };
    FiniteComponent.prototype.createNewFSM = function () {
        this.newProject(new __WEBPACK_IMPORTED_MODULE_2__finite_automaton__["a" /* FiniteAutomaton */](true), "New Finite State Automaton", "/finite/options");
    };
    FiniteComponent.prototype.parseAutomatonObject = function (rawAutomaton) {
        var automaton = new __WEBPACK_IMPORTED_MODULE_2__finite_automaton__["a" /* FiniteAutomaton */](rawAutomaton.isDeterministic);
        automaton.metadata = rawAutomaton.metadata;
        rawAutomaton.alphabet.symbols.forEach(function (symbol) {
            automaton.alphabet.addSymbol(new __WEBPACK_IMPORTED_MODULE_3__automaton__["a" /* AlphabetSymbol */](symbol.symbol));
        });
        rawAutomaton.states.forEach(function (rawState) {
            var newState = automaton.createState(rawState.layoutPosition);
            newState.id = rawState.id;
            newState.name = rawState.name;
            newState.type = rawState.type;
        });
        rawAutomaton.states.forEach(function (rawState, i) {
            rawState.transitions.forEach(function (rawTransition, j) {
                var destinationState = automaton.states.find(function (state) {
                    return state.id == rawTransition.destination;
                });
                var newTransition = automaton.states[i].addTransition(destinationState);
                newTransition.shouldDuplicateLayout = rawTransition.shouldDuplicateLayout;
                rawTransition.conditions.forEach(function (condition) {
                    newTransition.addCondition(new __WEBPACK_IMPORTED_MODULE_3__automaton__["a" /* AlphabetSymbol */](condition.symbol));
                });
            });
        });
        automaton.stateAutoIncrement = rawAutomaton.stateAutoIncrement;
        return automaton;
    };
    FiniteComponent.prototype.saveFilterFunction = function (key, value) {
        if (key == 'origin' || key == 'destination') {
            return value.id;
        }
        else if (["selectedState", "selectedTransition", "activeElement"].includes(key)) {
            return undefined;
        }
        else {
            return value;
        }
    };
    return FiniteComponent;
}(__WEBPACK_IMPORTED_MODULE_1__project_component__["a" /* ProjectComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FiniteComponent.prototype, "onKeyDown", null);
FiniteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/finite-automaton/finite.component.html")
    })
], FiniteComponent);

//# sourceMappingURL=finite.component.js.map

/***/ }),

/***/ "../../../../../src/app/finite-automaton/finite.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiniteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finite_routing_module__ = __webpack_require__("../../../../../src/app/finite-automaton/finite-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finite_component__ = __webpack_require__("../../../../../src/app/finite-automaton/finite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__diagram_component__ = __webpack_require__("../../../../../src/app/finite-automaton/diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_component__ = __webpack_require__("../../../../../src/app/finite-automaton/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__simulator_component__ = __webpack_require__("../../../../../src/app/finite-automaton/simulator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__options_component__ = __webpack_require__("../../../../../src/app/finite-automaton/options.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FiniteModule = (function () {
    function FiniteModule() {
    }
    return FiniteModule;
}());
FiniteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__finite_component__["a" /* FiniteComponent */],
            __WEBPACK_IMPORTED_MODULE_5__diagram_component__["a" /* DiagramComponent */],
            __WEBPACK_IMPORTED_MODULE_6__table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_7__simulator_component__["a" /* SimulatorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__options_component__["a" /* OptionsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__finite_routing_module__["a" /* FiniteRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__finite_component__["a" /* FiniteComponent */]
        ]
    })
], FiniteModule);

//# sourceMappingURL=finite.module.js.map

/***/ }),

/***/ "../../../../../src/app/finite-automaton/options.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-wrapper\">\r\n  <h2>Options</h2>\r\n  <label for=\"projectTitle\">Automaton Title</label>\r\n  <input type=\"text\" id=\"projectTitle\" [(ngModel)]=\"appStateService.project?.metadata.title\" (change)=\"this.automaton.metadata.isUnsaved = true;\">\r\n\r\n  <label for=\"projectType\">Automaton Type</label>\r\n  <div class=\"radio-wrapper\">\r\n    <input type=\"radio\" name=\"automatonType\" value=\"deterministic\" id=\"deterministic\" [checked]=\"automaton.isDeterministic\" (change)=\"setFiniteAsDeterministic(true)\">    <label for=\"deterministic\">Deterministic</label>\r\n    <input type=\"radio\" name=\"automatonType\" value=\"nondeterministic\" id=\"nondeterministic\" [checked]=\"!automaton.isDeterministic\"\r\n      (change)=\"setFiniteAsDeterministic(false)\"> <label for=\"nondeterministic\">Non-Deterministic</label>\r\n  </div>\r\n\r\n  <label for=\"alphabet\">Alphabet</label>\r\n  <div class=\"alphabet-symbols\">\r\n    <div class=\"symbol-entry\" *ngFor=\"let symbol of automaton.alphabet.symbols\">\r\n      {{ symbol }}\r\n      <span class=\"remove\" (click)=\"removeSymbolFromAlphabet(symbol)\">x</span>\r\n    </div>\r\n    <span *ngIf=\"automaton.alphabet.symbols.length == 0\">\r\n      The current alphabet contains no symbols.\r\n    </span>\r\n\r\n    <span *ngIf=\"automaton.alphabet.symbols.length > 0\">\r\n     <br>\r\n      {{ automaton.alphabet.formalString }}\r\n    </span>\r\n  </div>\r\n  <div class=\"plus-adder\">\r\n    <input type=\"text\" id=\"alphabet\" #editorSymbol (keyup.enter)=\"addSymbolToAlphabet(editorSymbol.value); editorSymbol.value = ''\">\r\n    <button (click)=\"addSymbolToAlphabet(editorSymbol.value); editorSymbol.value = ''\">+</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/finite-automaton/options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_state_service__ = __webpack_require__("../../../../../src/app/app-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__automaton__ = __webpack_require__("../../../../../src/app/automaton.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OptionsComponent = (function () {
    function OptionsComponent(appStateService) {
        this.appStateService = appStateService;
    }
    OptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.automaton = this.appStateService.project;
        this.projectSubscription = this.appStateService.projectChangedStream.subscribe(function (newProject) {
            _this.automaton = newProject;
        });
    };
    OptionsComponent.prototype.ngOnDestroy = function () {
        this.projectSubscription.unsubscribe();
    };
    OptionsComponent.prototype.setFiniteAsDeterministic = function (isDeterministic) {
        this.automaton.isDeterministic = isDeterministic;
        this.automaton.metadata.isUnsaved = true;
    };
    OptionsComponent.prototype.removeSymbolFromAlphabet = function (symbolToRemove) {
        this.automaton.removeSymbol(symbolToRemove);
        this.automaton.metadata.isUnsaved = true;
    };
    OptionsComponent.prototype.addSymbolToAlphabet = function (editorSymbol) {
        var _this = this;
        if (editorSymbol.trim() != '') {
            var symbolArray = editorSymbol.trim().split(',');
            symbolArray.forEach(function (stringSymbol) {
                var symbol = new __WEBPACK_IMPORTED_MODULE_2__automaton__["a" /* AlphabetSymbol */](stringSymbol.trim());
                if (symbol.symbol != "") {
                    _this.automaton.alphabet.addSymbol(symbol);
                    _this.automaton.metadata.isUnsaved = true;
                }
            });
        }
    };
    return OptionsComponent;
}());
OptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/finite-automaton/options.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */]) === "function" && _a || Object])
], OptionsComponent);

var _a;
//# sourceMappingURL=options.component.js.map

/***/ }),

/***/ "../../../../../src/app/finite-automaton/simulator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".simulator-panel {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 10;\r\n  height: 200px;\r\n  border-top: #bcbcbc solid 1px;\r\n}\r\n\r\n.simulator-options {\r\n  width: 200px;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n  float: left;\r\n  background-color: #f0f0f0;\r\n  border-right: #bcbcbc solid 1px;\r\n  padding: 8px;\r\n}\r\n\r\n.simulator-options input {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.simulator-options input[type=text] {\r\n  height: 30px;\r\n  font-size: 18px;\r\n  padding: 0 4px;\r\n}\r\n\r\n.simulator-options button {\r\n  width: 58px;\r\n  margin: 10px 0;\r\n  cursor: pointer;\r\n  font-size: 12px;\r\n  padding: 0;\r\n  height: 30px;\r\n}\r\n\r\n.simulator-output {\r\n  background-color: #fff;\r\n  float: right;\r\n  min-height: 100%;\r\n  overflow-y: auto;\r\n  width: calc(100vw - 200px);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/finite-automaton/simulator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"simulator-panel\">\r\n  <div class=\"simulator-options\">\r\n    <label for=\"word\">Input Word</label>\r\n    <input type=\"text\" [(ngModel)]=\"inputWord\" id=\"word\">\r\n\r\n    <label for=\"speed\">Speed: <span>{{ simSpeed }}</span></label>\r\n    <input type=\"range\" [(ngModel)]=\"speed\" id=\"speed\" #speedRange (change)=\"updateSpeed(speedRange.value)\">\r\n\r\n    <button (click)=\"toggleState()\">{{ startText }}</button>\r\n    <button (click)=\"step()\">Step</button>\r\n    <button (click)=\"reset()\">Reset</button>\r\n  </div>\r\n  <div class=\"simulator-output\">\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/finite-automaton/simulator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_state_service__ = __webpack_require__("../../../../../src/app/app-state.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimulatorComponent = (function () {
    function SimulatorComponent(appStateService) {
        this.appStateService = appStateService;
        this.inputWord = "";
        this.speed = 50;
    }
    Object.defineProperty(SimulatorComponent.prototype, "simSpeed", {
        get: function () {
            return this.speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimulatorComponent.prototype, "startText", {
        get: function () {
            if (typeof (this.simulation) != "undefined" && this.simulation != null && this.simulation.isRunning) {
                return "Pause";
            }
            else if (this.simulation != null && this.simulation.hasRemainingElements()) {
                return "Resume";
            }
            else if (this.simulation != null) {
                return "Restart";
            }
            return "Start";
        },
        enumerable: true,
        configurable: true
    });
    SimulatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.automaton = this.appStateService.project;
        alertify.logPosition("top right");
        this.projectSubscription = this.appStateService.projectChangedStream.subscribe(function (newProject) {
            _this.automaton = newProject;
        });
    };
    SimulatorComponent.prototype.ngOnDestroy = function () {
        this.projectSubscription.unsubscribe();
    };
    SimulatorComponent.prototype.toggleState = function () {
        var error = this.validateAutomaton();
        if (error != null) {
            return this.outputError(error);
        }
        if (typeof (this.simulation) != "undefined" && this.simulation != null && this.simulation.isRunning) {
            this.stopSimulation();
        }
        else if (this.simulation != null && this.simulation.hasRemainingElements()) {
            this.resumeSimulation();
        }
        else if (this.simulation != null) {
            this.reset();
            this.startSimulation();
        }
        else {
            this.startSimulation();
        }
    };
    SimulatorComponent.prototype.startSimulation = function () {
        var couldCreateSimulation = this.createSimulation();
        if (couldCreateSimulation) {
            this.simulation.startInterval(2000 - this.speed * 20);
        }
    };
    SimulatorComponent.prototype.stopSimulation = function () {
        this.simulation.stopInterval();
    };
    SimulatorComponent.prototype.resumeSimulation = function () {
        this.simulation.startInterval(2000 - this.speed * 20);
    };
    SimulatorComponent.prototype.createSimulation = function () {
        if (this.validateWord(this.inputWord)) {
            this.simulation = new Simulation(this.automaton);
            this.simulation.initializeSimulation(this.inputWord);
            return true;
        }
        else {
            alertify.error("The input word contains symbols not in the alphabet.");
            return false;
        }
    };
    SimulatorComponent.prototype.updateSpeed = function (value) {
        if (!(typeof (this.simulation) == "undefined"
            || this.simulation == null
            || !this.simulation.isRunning)) {
            this.simulation.updateInterval(2000 - value * 20);
        }
    };
    SimulatorComponent.prototype.step = function () {
        var error = this.validateAutomaton();
        if (error != null) {
            return this.outputError(error);
        }
        if (typeof (this.simulation) == "undefined" || this.simulation == null) {
            var couldCreateSimulation = this.createSimulation();
            if (couldCreateSimulation) {
                this.simulation.step();
            }
        }
        else {
            if (this.simulation.isRunning) {
                this.stopSimulation();
            }
            this.simulation.step();
        }
    };
    SimulatorComponent.prototype.outputError = function (error) {
        var _this = this;
        alertify.error(error.errorMessage);
        if (error.culprit != null) {
            this.automaton.incorrectElement = error.culprit;
        }
        setTimeout(function () {
            _this.automaton.incorrectElement = null;
        }, 5000);
    };
    SimulatorComponent.prototype.reset = function () {
        this.automaton.activeElement = null;
        if (this.simulation != null) {
            this.simulation.stopInterval();
            this.simulation = null;
        }
    };
    // Returns null if the automaton is valid, else the error object
    SimulatorComponent.prototype.validateAutomaton = function () {
        var automaton = this.automaton, initialStates = 0, finalStates = 0, alphabetSymbols = automaton.alphabet.symbols.length, isDeterministic = automaton.isDeterministic;
        for (var i = 0; i < automaton.states.length; i++) {
            var state = automaton.states[i];
            if (state.type == "initial" || state.type == "ambivalent") {
                if (++initialStates > 1) {
                    return new ValidationError("An automaton can only have one initial state", state);
                }
            }
            if (state.type == "final" || state.type == "ambivalent") {
                finalStates++;
            }
            if (isDeterministic) {
                var conditions = [];
                for (var j = 0; j < state.transitions.length; j++) {
                    if (state.transitions[j].conditions.length == 0) {
                        return new ValidationError("A DFA can't have Kleene Closures", state);
                    }
                    conditions = conditions.concat(state.transitions[j].conditions);
                }
                if (conditions.length < alphabetSymbols) {
                    return new ValidationError("A DFA state must have a transition for each symbol in the alphabet.", state);
                }
                else if (this.hasRepeatedConditions(conditions)) {
                    return new ValidationError("A DFA can only have one transition for each symbol in the alphabet.", state);
                }
            }
        }
        if (finalStates == 0) {
            return new ValidationError("There must be at least one final state", null);
        }
        return null;
    };
    SimulatorComponent.prototype.hasRepeatedConditions = function (conditions) {
        // If we have repeated symbols
        var seenSymbols = [];
        for (var i = 0; i < conditions.length; i++) {
            if (seenSymbols.includes(conditions[i].symbol)) {
                return true;
            }
            seenSymbols.push(conditions[i].symbol);
        }
        return false;
    };
    SimulatorComponent.prototype.validateWord = function (word) {
        var alphabet = this.automaton.alphabet.symbols;
        if (word.indexOf(",") != -1) {
            var words = word.split(",");
            for (var i = 0; i < words.length; i++) {
                if (!this.validateWord(words[i])) {
                    return false;
                }
            }
            return true;
        }
        else {
            for (var i = 0; i < word.length;) {
                var contained = false;
                for (var j = word.length; j > i && !contained; j--) {
                    var substr = word.slice(i, j);
                    for (var k = 0; k < alphabet.length; k++) {
                        if (substr == alphabet[k].symbol) {
                            contained = true;
                            i += j - i;
                            break;
                        }
                    }
                }
                if (!contained) {
                    return false;
                }
            }
            return true;
        }
    };
    return SimulatorComponent;
}());
SimulatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'simulator',
        template: __webpack_require__("../../../../../src/app/finite-automaton/simulator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/finite-automaton/simulator.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */]) === "function" && _a || Object])
], SimulatorComponent);

var Simulation = (function () {
    function Simulation(automaton) {
        this.automaton = automaton;
        this.stepInterval = null;
        for (var i = 0; i < automaton.states.length; i++) {
            if (automaton.states[i].type == "initial"
                || automaton.states[i].type == "ambivalent") {
                this.initialState = automaton.states[i];
                break;
            }
        }
    }
    Object.defineProperty(Simulation.prototype, "isRunning", {
        get: function () {
            return this.stepInterval != null;
        },
        enumerable: true,
        configurable: true
    });
    Simulation.prototype.hasRemainingElements = function () {
        return this.traversalStack.length > 0;
    };
    Simulation.prototype.initializeSimulation = function (word) {
        this.automaton.activeElement = this.initialState;
        this.inputWord = word;
        this.lastDepth = 0;
        this.reachedValidity = false;
        this.traversalStack = [new TraversalState(0, "state", this.initialState)];
        this.inputSymbols = this.extractInputSymbols(word);
        this.automaton.selectedState = null;
        this.automaton.selectedTransition = null;
    };
    Simulation.prototype.extractInputSymbols = function (rawSymbolWord) {
        var _this = this;
        var validSymbols = this.automaton.alphabet.symbols, detectedSymbols = [];
        if (rawSymbolWord.indexOf(",") != -1) {
            var words = rawSymbolWord.split(",");
            words.forEach(function (word) {
                detectedSymbols = detectedSymbols.concat(_this.extractInputSymbols(word));
            });
            return detectedSymbols;
        }
        else {
            for (var i = 0; i < rawSymbolWord.length;) {
                var contained = false;
                for (var j = rawSymbolWord.length; j > i && !contained; j--) {
                    var substr = rawSymbolWord.slice(i, j);
                    for (var k = 0; k < validSymbols.length; k++) {
                        if (substr == validSymbols[k].symbol) {
                            contained = true;
                            detectedSymbols.push(validSymbols[k]);
                            i += j - i;
                            break;
                        }
                    }
                }
                if (!contained) {
                    alertify.error("The word contains undefined symbols.");
                    throw "Undefined symbols in word";
                }
            }
            return detectedSymbols;
        }
    };
    Simulation.prototype.startInterval = function (interval) {
        var _this = this;
        this.step();
        this.stepInterval = setInterval(function () {
            _this.step();
        }, interval + 20); // 20ms minimum -> 50 states per second
    };
    Simulation.prototype.stopInterval = function () {
        clearInterval(this.stepInterval);
        this.stepInterval = null;
    };
    Simulation.prototype.updateInterval = function (interval) {
        var _this = this;
        clearInterval(this.stepInterval);
        this.stepInterval = setInterval(function () {
            _this.step();
        }, interval);
    };
    Simulation.prototype.getTransitionSymbol = function (currentDepth) {
        if (currentDepth >= this.inputWord.length)
            return [null, 0];
        var alphabet = this.automaton.alphabet.symbols;
        for (var i = this.inputWord.length; i > currentDepth; i--) {
            var substr = this.inputWord.slice(currentDepth, i);
            for (var j = 0; j < alphabet.length; j++) {
                if (substr == alphabet[j].symbol) {
                    return [alphabet[j], i - currentDepth];
                }
            }
        }
        throw "Invalid symbol detected in simulation!";
    };
    Simulation.prototype.step = function () {
        this.currentElement = this.traversalStack.pop();
        if (typeof (this.currentElement) == "undefined") {
            if (this.startInterval != null) {
                this.stopInterval();
            }
            if (this.lastDepth + 1 < this.inputWord.length && !this.reachedValidity) {
                // We ran out of states and we still hadn't processed the word or validated it in another branch       
                alertify.log("The word is invalid");
            }
            return; // Stop the step
        }
        if (this.currentElement.type == "state") {
            var stateTraversalElement = this.currentElement, state = stateTraversalElement.state, inputSymbol = this.inputSymbols[stateTraversalElement.depth];
            this.automaton.activeElement = state;
            this.lastDepth = stateTraversalElement.depth;
            if (typeof (inputSymbol) == "undefined") {
                if (state.type == "final" || state.type == "ambivalent") {
                    alertify.success("The word is valid");
                    this.reachedValidity = true; // If this is a final state, we win!
                }
                else if (this.traversalStack.length == 0 && !this.reachedValidity) {
                    alertify.log("The word is invalid"); // Else, if there is nothing more in the stack we lose.
                }
            }
            else {
                for (var i = state.transitions.length - 1; i >= 0; i--) {
                    var transition = state.transitions[i]; // For every transition that matches our condition, push it to the stack
                    if (transition.conditions.length == 0
                        || transition.hasCondition(inputSymbol)) {
                        if (transition.conditions.length == 0) {
                            this.traversalStack.push(new TraversalTransition(stateTraversalElement.depth, "transition", transition));
                        }
                        else {
                            this.traversalStack.push(new TraversalTransition(stateTraversalElement.depth + 1, "transition", transition));
                        }
                    }
                }
            }
        }
        else {
            var transitionTraversalElement = this.currentElement, transition = transitionTraversalElement.transition, destinationState = transition.destination;
            this.automaton.activeElement = transition;
            this.traversalStack.push(new TraversalState(transitionTraversalElement.depth, "state", destinationState));
        }
    };
    return Simulation;
}());
var TraversalElement = (function () {
    function TraversalElement(depth, type) {
        this.type = type;
        this.depth = depth;
    }
    return TraversalElement;
}());
var TraversalState = (function (_super) {
    __extends(TraversalState, _super);
    function TraversalState(depth, type, state) {
        var _this = _super.call(this, depth, type) || this;
        _this.state = state;
        return _this;
    }
    return TraversalState;
}(TraversalElement));
var TraversalTransition = (function (_super) {
    __extends(TraversalTransition, _super);
    function TraversalTransition(depth, type, transition) {
        var _this = _super.call(this, depth, type) || this;
        _this.transition = transition;
        return _this;
    }
    return TraversalTransition;
}(TraversalElement));
var ValidationError = (function () {
    function ValidationError(errorMsg, culprit) {
        this.errorMessage = errorMsg;
        this.culprit = culprit;
    }
    return ValidationError;
}());
var _a;
//# sourceMappingURL=simulator.component.js.map

/***/ }),

/***/ "../../../../../src/app/finite-automaton/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"canvas-wrapper\">\r\n  <span>Table not yet implemented</span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/finite-automaton/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_state_service__ = __webpack_require__("../../../../../src/app/app-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = (function () {
    function TableComponent(appStateService) {
        this.appStateService = appStateService;
    }
    return TableComponent;
}());
TableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/finite-automaton/table.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */]) === "function" && _a || Object])
], TableComponent);

var _a;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/grammar-designer/formal-grammar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormalGrammar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GrammarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GrammarSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProductionRule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project__ = __webpack_require__("../../../../../src/app/project.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FormalGrammar = (function (_super) {
    __extends(FormalGrammar, _super);
    function FormalGrammar(grammarType) {
        var _this = _super.call(this, 'formal-grammar') || this;
        _this.grammarType = grammarType;
        _this.terminalSymbols = [];
        _this.nonterminalSymbols = [];
        _this.productionRules = [];
        _this.startSymbol = null;
        return _this;
    }
    Object.defineProperty(FormalGrammar.prototype, "startFormalString", {
        get: function () {
            if (this.startSymbol != null) {
                return "S = " + this.startSymbol.symbol;
            }
            return "<Please click on a symbol to designiate it as Start>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormalGrammar.prototype, "startRule", {
        get: function () {
            for (var i = 0; i < this.productionRules.length; i++) {
                if (this.productionRules[i].leftHandSide.length == 1
                    && this.productionRules[i].leftHandSide[0] == this.startSymbol) {
                    return this.productionRules[i];
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    FormalGrammar.prototype.selectStartSymbol = function (symbol) {
        this.startSymbol = symbol;
    };
    FormalGrammar.prototype.addRule = function (rule) {
        if (!this.hasRule(rule)) {
            this.productionRules.push(rule);
        }
    };
    FormalGrammar.prototype.removeRule = function (rule) {
        var index = this.productionRules.indexOf(rule);
        if (index != -1) {
            this.productionRules.splice(index, 1);
        }
    };
    FormalGrammar.prototype.hasRule = function (rule) {
        for (var i = 0; i < this.productionRules.length; i++) {
            if (this.productionRules[i].equals(rule))
                return true;
        }
        return false;
    };
    FormalGrammar.prototype.addSymbol = function (s, isTerminal) {
        if (!this.hasSymbol(s)) {
            var sortFunction = function (a, b) {
                if (a.symbol < b.symbol)
                    return -1;
                if (a.symbol > b.symbol)
                    return 1;
                return 0;
            };
            if (isTerminal) {
                this.terminalSymbols.push(s);
                this.terminalSymbols.sort(sortFunction);
            }
            else {
                this.nonterminalSymbols.push(s);
                this.nonterminalSymbols.sort(sortFunction);
                if (this.startSymbol == null && s.symbol == "S") {
                    this.startSymbol = s;
                }
            }
        }
    };
    FormalGrammar.prototype.removeSymbol = function (grammarSymbol) {
        var index = this.terminalSymbols.indexOf(grammarSymbol);
        if (index != -1) {
            this.terminalSymbols.splice(index, 1);
        }
        else {
            index = this.nonterminalSymbols.indexOf(grammarSymbol);
            if (index != -1) {
                if (this.startSymbol == grammarSymbol)
                    this.startSymbol = null;
                this.nonterminalSymbols.splice(index, 1);
            }
        }
    };
    FormalGrammar.prototype.hasSymbol = function (symbol) {
        for (var i = 0; i < this.terminalSymbols.length; i++) {
            if (this.terminalSymbols[i].symbol == symbol.symbol)
                return true;
        }
        for (var i = 0; i < this.nonterminalSymbols.length; i++) {
            if (this.nonterminalSymbols[i].symbol == symbol.symbol)
                return true;
        }
        return false;
    };
    FormalGrammar.prototype.isNonterminalSymbol = function (symbol) {
        return this.nonterminalSymbols.includes(symbol);
    };
    FormalGrammar.prototype.getRulesforSymbol = function (symbol) {
        if (this.isNonterminalSymbol(symbol)) {
            return this.productionRules.filter(function (rule) { return rule.leftHandSide.includes(symbol); });
        }
        return [];
    };
    FormalGrammar.prototype.getFormalString = function (fromTerminals) {
        var iterable, symbol;
        if (fromTerminals) {
            iterable = this.terminalSymbols;
            symbol = '\u03A3';
        }
        else {
            iterable = this.nonterminalSymbols;
            symbol = 'N';
        }
        if (iterable.length > 0) {
            var setString_1 = "", lastIndex_1 = iterable.length - 1, resultString = void 0;
            iterable.forEach(function (symbol, index) {
                setString_1 += symbol.symbol;
                if (index != lastIndex_1) {
                    setString_1 += ", ";
                }
            });
            resultString = symbol + ' = {' + setString_1 + '}';
            if (!fromTerminals) {
                return resultString += "  " + this.startFormalString;
            }
            return resultString;
        }
        return symbol + ' = { \u2205 }';
    };
    return FormalGrammar;
}(__WEBPACK_IMPORTED_MODULE_0__project__["b" /* Project */]));

var GrammarType;
(function (GrammarType) {
    GrammarType[GrammarType["RegularGrammar"] = 0] = "RegularGrammar";
    GrammarType[GrammarType["TuringGrammar"] = 1] = "TuringGrammar";
})(GrammarType || (GrammarType = {}));
var GrammarSymbol = (function () {
    function GrammarSymbol(symbol) {
        this.symbol = symbol;
    }
    GrammarSymbol.prototype.toString = function () {
        return this.symbol;
    };
    return GrammarSymbol;
}());

var ProductionRule = (function () {
    function ProductionRule(left, right) {
        this.leftHandSide = left;
        this.rightHandSide = right;
    }
    ProductionRule.prototype.equals = function (rule) {
        if (this.leftHandSide.length != rule.leftHandSide.length
            || this.rightHandSide.length != rule.rightHandSide.length) {
            return false;
        }
        for (var i = 0; i < this.leftHandSide.length; i++) {
            if (this.leftHandSide[i] != rule.leftHandSide[i])
                return false;
        }
        for (var i = 0; i < this.rightHandSide.length; i++) {
            if (this.rightHandSide[i] != rule.rightHandSide[i])
                return false;
        }
        return true;
    };
    return ProductionRule;
}());

//# sourceMappingURL=formal-grammar.js.map

/***/ }),

/***/ "../../../../../src/app/grammar-designer/grammar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrammarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grammar_component__ = __webpack_require__("../../../../../src/app/grammar-designer/grammar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__unsaved_changes_guard__ = __webpack_require__("../../../../../src/app/unsaved-changes.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'grammar',
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__unsaved_changes_guard__["a" /* UnsavedChangesGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_2__grammar_component__["a" /* GrammarComponent */],
    }
];
var GrammarRoutingModule = (function () {
    function GrammarRoutingModule() {
    }
    return GrammarRoutingModule;
}());
GrammarRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], GrammarRoutingModule);

//# sourceMappingURL=grammar-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/grammar-designer/grammar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grammar-workspace {\r\n  position: relative;\r\n  padding: 96px 8px 8px;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: #fafafa;\r\n  overflow: auto;\r\n}\r\n\r\n.grammar-container {\r\n  display: block;\r\n  margin: 0px auto;\r\n  height: 100%;\r\n  width: 100%;\r\n  max-width: 1170px;\r\n}\r\n\r\n.half {\r\n  width: 50%;\r\n  float: left;\r\n  height: 100%;\r\n  padding: 8px;\r\n}\r\n\r\n.half:first-child {\r\n  overflow: auto;\r\n}\r\n\r\n.previewer {\r\n  border: #bcbcbc solid 1px;\r\n  background-color: #fff;\r\n  clear: both;\r\n  height: calc(100% - 58px);\r\n  overflow: auto;\r\n}\r\n\r\ninput:not([type=radio])  {\r\n  display: block;\r\n  height: 30px;\r\n  font-size: 14px;\r\n  margin: 3px 0 10px;\r\n  width: 100%;\r\n  padding: 0 8px;\r\n}\r\n\r\ninput[type=radio] {\r\n  height: initial;\r\n  widows: initial;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.plus-adder, .alphabet-symbols {\r\n  width: 100%;\r\n}\r\n\r\n.plus-adder > input {\r\n  width: calc(100% - 30px);\r\n  float: left;\r\n}\r\n\r\n.plus-adder > button {\r\n  width: 30px;\r\n  height: 30px;\r\n  float: right;\r\n  cursor: pointer;\r\n  margin-top: 3px;\r\n}\r\n\r\ninput.tester {\r\n  width: calc(100% - 50px);\r\n  float: left;\r\n}\r\n\r\n.alphabet-symbols > span:last-child {\r\n  display: block;\r\n}\r\n\r\nbutton.tester {\r\n  width: 50px;\r\n  float: right;\r\n  margin-top: 3px;\r\n  height: 30px;\r\n  padding-top: 5px;\r\n}\r\n\r\nbutton.tester:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.radio-wrapper {\r\n  display: block;\r\n  margin: 5px 0 10px;\r\n}\r\n\r\n.radio-wrapper label {\r\n  font-size: 14px;\r\n}\r\n\r\n.radio-wrapper label:after {\r\n  content: \"\";\r\n  display: block;\r\n}\r\n\r\n.production-rules-input input {\r\n  float: left;\r\n  width: calc(50% - 30px);\r\n}\r\n\r\n.arrow {\r\n  position: relative;\r\n  float: left;\r\n  display: block;\r\n  height: 4px;\r\n  width: 20px;\r\n  background-color: #333;\r\n  margin: 15px 5px;\r\n}\r\n\r\n.arrow:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -6px;\r\n  right: -2px;\r\n  border-top: transparent solid 8px;\r\n  border-bottom: transparent solid 8px;\r\n  border-left: #333 solid 10px;\r\n}\r\n\r\n.production-rules-input button {\r\n  float: left;\r\n  height: 30px;\r\n  width: 30px;\r\n  margin-top: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n.rule {\r\n  padding: 2px 4px;\r\n  background-color: #f0f0f0;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n}\r\n\r\n.rule:before {\r\n  content: \"\";\r\n  direction: block;\r\n}\r\n\r\n.rule .arrow {\r\n  float: none;\r\n  height: 3px;\r\n  width: 15px;\r\n  margin: 4px 5px;\r\n  display: inline-block;\r\n}\r\n\r\n.rule span.remove {\r\n  color: #e74c3c;\r\n  cursor: pointer;\r\n  border-right: #fafafa solid 2px;\r\n  padding: 8px;\r\n  position: relative;\r\n  text-align: center;\r\n  left: -4px;\r\n}\r\n\r\n.rule span.remove:hover {\r\n  color: #c0392b;\r\n  background-color: #d0d0d0;\r\n}\r\n\r\n.rule .arrow:after {\r\n  border-top-width: 6px;\r\n  border-bottom-width: 6px;\r\n  border-left-width: 8px;\r\n  top: -4.5px;\r\n  right: -3px;\r\n}\r\n\r\n.rightHand {\r\n  margin-right: 4px;\r\n}\r\n\r\n.previewer .level {\r\n  display: block;\r\n  padding: 10px 0;\r\n  text-align: center;\r\n}\r\n\r\n.level .tree-node {\r\n  display: inline-block;\r\n  padding: 26px 0;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  border: #333 solid 1px;\r\n  margin: 0 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n.tree-node.special {\r\n  background-color: #0C0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grammar-designer/grammar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grammar-workspace\">\r\n  <div class=\"grammar-container\">\r\n    <div class=\"half\">\r\n      <label for=\"projectTitle\">Grammar Title</label>\r\n      <input type=\"text\" id=\"projectTitle\" [(ngModel)]=\"appStateService.project?.metadata.title\" (change)=\"this.project.metadata.isUnsaved = true;\">\r\n      <!--\r\n      <label for=\"grammarType\">Grammar Type</label>\r\n      <div class=\"radio-wrapper\">\r\n        <input type=\"radio\" name=\"grammarType\" value=\"type\" id=\"type\" [checked]=\"project.grammarType == 0\" (change)=\"changeType(1)\">\r\n        <label for=\"type\">Regular Grammar</label>\r\n      </div>\r\n      -->\r\n\r\n      <label for=\"nonterminals\">Non-Terminal Symbols</label>\r\n      <div class=\"alphabet-symbols\">\r\n        <div class=\"symbol-entry nonterminal\" *ngFor=\"let symbol of project.nonterminalSymbols\" \r\n        (click)=\"setSymbolAsStart(symbol)\"\r\n        [class.start]=\"project.startSymbol == symbol\">\r\n          {{ symbol }}\r\n          <span class=\"remove\" (click)=\"removeSymbolFromGrammar(symbol)\">x</span>\r\n        </div>\r\n\r\n        <span>\r\n          {{ project.getFormalString(false) }}\r\n        </span>\r\n      </div>\r\n      <div class=\"plus-adder\">\r\n        <input type=\"text\" id=\"nonterminals\" #nonterminalSymbolInput (keyup.enter)=\"addSymbolToGrammar(nonterminalSymbolInput.value, false); nonterminalSymbolInput.value = ''\">\r\n        <button (click)=\"addSymbolToGrammar(nonterminalSymbolInput.value, false); nonterminalSymbolInput.value = ''\">+</button>\r\n      </div>\r\n\r\n      <label for=\"terminals\">Terminal Symbols</label>\r\n      <div class=\"alphabet-symbols\">\r\n        <div class=\"symbol-entry\" *ngFor=\"let symbol of project.terminalSymbols\">\r\n          {{ symbol }}\r\n          <span class=\"remove\" (click)=\"removeSymbolFromGrammar(symbol)\">x</span>\r\n        </div>\r\n        <span>\r\n          {{ project.getFormalString(true) }}\r\n        </span>\r\n      </div>\r\n      <div class=\"plus-adder\">\r\n        <input type=\"text\" id=\"terminals\" #terminalSymbolInput (keyup.enter)=\"addSymbolToGrammar(terminalSymbolInput.value, true); terminalSymbolInput.value = ''\">\r\n        <button (click)=\"addSymbolToGrammar(terminalSymbolInput.value, true); terminalSymbolInput.value = ''\">+</button>\r\n      </div>    \r\n\r\n      <label for=\"rules\">Production Rules</label>\r\n      <div class=\"production-rules\">\r\n        <div class=\"rule-wrapper\" *ngFor=\"let rule of project.productionRules\">        \r\n          <div class=\"rule\">\r\n            <span class=\"remove\" (click)=\"removeRule(rule)\">x</span> {{ rule.leftHandSide }} <div class=\"arrow\"></div> \r\n            <span class=\"rightHand\" *ngFor=\"let right of rule.rightHandSide\">{{ right }}</span>\r\n            <span class=\"rightHand\" *ngIf=\"rule.rightHandSide.length == 0\">&#x3B5;</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"production-rules-input\">\r\n        <input type=\"text\" id=\"rules\" #leftHandInput\r\n          (keyup.enter)=\"rightHandInput.focus()\">\r\n        <div class=\"arrow\"></div>\r\n        <input type=\"text\" id=\"rulesRight\" #rightHandInput \r\n            (keyup.enter)=\"createProductionRule(leftHandInput.value, rightHandInput.value); leftHandInput.value = ''; rightHandInput.value = ''\">\r\n        <button (click)=\"createProductionRule(leftHandInput.value, rightHandInput.value); leftHandInput.value = ''; rightHandInput.value = ''\">+</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"half\">\r\n      <label for=\"InputWord\">Input Word</label>\r\n      <br>\r\n      <input type=\"text\" id=\"InputWord\" class=\"tester\" #inputWord (keyup.enter)=\"testWord(inputWord.value)\">\r\n      <button class=\"tester\" (click)=\"testWord(inputWord.value)\">Test</button>\r\n      <div class=\"previewer\">\r\n        <div *ngIf=\"expansionTree != null\">\r\n          <div class=\"level\" *ngFor=\"let depthLevel of expansionTree\">\r\n            <div class=\"tree-node\" *ngFor=\"let node of depthLevel\" [class.special]=\"node.isSpecial\">\r\n              <span *ngFor=\"let s of node.value\">{{ s }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/grammar-designer/grammar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrammarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formal_grammar__ = __webpack_require__("../../../../../src/app/grammar-designer/formal-grammar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_component__ = __webpack_require__("../../../../../src/app/project.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GrammarComponent = (function (_super) {
    __extends(GrammarComponent, _super);
    function GrammarComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expansionTreeRoot = null;
        return _this;
    }
    Object.defineProperty(GrammarComponent.prototype, "expansionTree", {
        get: function () {
            if (this.expansionTreeRoot != null) {
                var baseArray = [], buildTreeRepresentation_1 = function (node, baseArray) {
                    if (typeof baseArray[node.depth] === "undefined") {
                        baseArray[node.depth] = [];
                    }
                    baseArray[node.depth].push(node);
                    node.children.forEach(function (child) {
                        buildTreeRepresentation_1(child, baseArray);
                    });
                };
                buildTreeRepresentation_1(this.expansionTreeRoot, baseArray);
                return baseArray;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    GrammarComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.appStateService.hasActiveProject) {
            this.project = this.appStateService.project;
            if (this.project.type != "formal-grammar") {
                this.router.navigateByUrl("/home", { replaceUrl: true });
            }
        }
        else {
            this.newProject(new __WEBPACK_IMPORTED_MODULE_1__formal_grammar__["a" /* FormalGrammar */](__WEBPACK_IMPORTED_MODULE_1__formal_grammar__["c" /* GrammarType */].RegularGrammar), "New Formal Grammar");
        }
    };
    GrammarComponent.prototype.onToolClicked = function ($event) {
        switch ($event.target) {
            case "new":
                this.newProject(new __WEBPACK_IMPORTED_MODULE_1__formal_grammar__["a" /* FormalGrammar */](__WEBPACK_IMPORTED_MODULE_1__formal_grammar__["c" /* GrammarType */].RegularGrammar), "New Formal Grammar");
                break;
            case "open":
                this.openFile(this.parseGrammarObject);
                break;
            case "save":
                this.saveProject(function (key, value) {
                    return value;
                });
                break;
            default:
                _super.prototype.onToolClicked.call(this, $event);
        }
    };
    GrammarComponent.prototype.changeType = function (newType) {
        this.project.grammarType = newType;
        this.project.metadata.isUnsaved = true;
    };
    GrammarComponent.prototype.parseGrammarObject = function (rawGrammar) {
        var grammar = new __WEBPACK_IMPORTED_MODULE_1__formal_grammar__["a" /* FormalGrammar */](rawGrammar.grammarType);
        grammar.metadata = rawGrammar.metadata;
        rawGrammar.terminalSymbols.forEach(function (s) {
            grammar.addSymbol(new __WEBPACK_IMPORTED_MODULE_1__formal_grammar__["b" /* GrammarSymbol */](s.symbol), true);
        });
        rawGrammar.nonterminalSymbols.forEach(function (s) {
            grammar.addSymbol(new __WEBPACK_IMPORTED_MODULE_1__formal_grammar__["b" /* GrammarSymbol */](s.symbol), false);
        });
        var symbols = grammar.terminalSymbols.concat(grammar.nonterminalSymbols);
        rawGrammar.productionRules.forEach(function (rule) {
            grammar.addRule(new __WEBPACK_IMPORTED_MODULE_1__formal_grammar__["d" /* ProductionRule */](symbols.filter(function (s) {
                var leftSymbols = rule.leftHandSide.map(function (x) { return x.symbol; });
                return leftSymbols.includes(s.symbol);
            }), symbols.filter(function (s) {
                var rightSymbols = rule.rightHandSide.map(function (x) { return x.symbol; });
                return rightSymbols.includes(s.symbol);
            })));
        });
        rawGrammar.startSymbol = grammar.nonterminalSymbols.find(function (s) {
            return s.symbol == rawGrammar.startSymbol.symbol;
        });
        grammar.metadata.isUnsaved = false;
        return grammar;
    };
    GrammarComponent.prototype.removeSymbolFromGrammar = function (symbolToRemove) {
        this.project.removeSymbol(symbolToRemove);
        this.project.metadata.isUnsaved = true;
    };
    GrammarComponent.prototype.addSymbolToGrammar = function (rawSymbol, isTerminal) {
        var _this = this;
        if (rawSymbol.trim() != '') {
            var symbolArray = rawSymbol.trim().split(',');
            symbolArray.forEach(function (stringSymbol) {
                var symbol = new __WEBPACK_IMPORTED_MODULE_1__formal_grammar__["b" /* GrammarSymbol */](stringSymbol.trim());
                if (symbol.symbol != "") {
                    _this.project.addSymbol(symbol, isTerminal);
                    _this.project.metadata.isUnsaved = true;
                }
            });
        }
    };
    GrammarComponent.prototype.setSymbolAsStart = function (symbol) {
        this.project.selectStartSymbol(symbol);
    };
    GrammarComponent.prototype.createProductionRule = function (leftHand, rightHand) {
        var left = leftHand.trim(), right = rightHand.trim();
        if (left != '') {
            var leftSymbols = this.matchRawSymbols(left), rightSymbols = this.matchRawSymbols(right);
            this.project.addRule(new __WEBPACK_IMPORTED_MODULE_1__formal_grammar__["d" /* ProductionRule */](leftSymbols, rightSymbols));
        }
        else {
            alertify.error("Left hand side of production rule cannot be empty.");
        }
    };
    GrammarComponent.prototype.removeRule = function (rule) {
        this.project.removeRule(rule);
    };
    GrammarComponent.prototype.matchRawSymbols = function (rawSymbolWord, onlyTerminals) {
        var _this = this;
        if (onlyTerminals === void 0) { onlyTerminals = false; }
        var validSymbols, detectedSymbols = [];
        rawSymbolWord = rawSymbolWord.replace(" ", "");
        if (onlyTerminals) {
            validSymbols = this.project.terminalSymbols;
        }
        else {
            validSymbols = this.project.nonterminalSymbols.concat(this.project.terminalSymbols);
        }
        if (rawSymbolWord.indexOf(",") != -1) {
            var words = rawSymbolWord.split(",");
            words.forEach(function (word) {
                detectedSymbols = detectedSymbols.concat(_this.matchRawSymbols(word));
            });
            return detectedSymbols;
        }
        else {
            for (var i = 0; i < rawSymbolWord.length;) {
                var contained = false;
                for (var j = rawSymbolWord.length; j > i && !contained; j--) {
                    var substr = rawSymbolWord.slice(i, j);
                    for (var k = 0; k < validSymbols.length; k++) {
                        if (substr == validSymbols[k].symbol) {
                            contained = true;
                            detectedSymbols.push(validSymbols[k]);
                            i += j - i;
                            break;
                        }
                    }
                }
                if (!contained) {
                    alertify.error("The word contains invalid symbols.");
                    throw "Undefined symbols in word";
                }
            }
            return detectedSymbols;
        }
    };
    GrammarComponent.prototype.testWord = function (word) {
        var _this = this;
        this.validateProductionRules();
        var wordSymbols = this.matchRawSymbols(word, true), start = this.project.startRule, maxLength = wordSymbols.length, currentDepthMembers = [], foundValidWord = false;
        if (start == null) {
            alertify.error("No start rule set.");
            throw "No start rule set.";
        }
        this.expansionTreeRoot = new TreeNode(0, start.rightHandSide);
        currentDepthMembers.push(this.expansionTreeRoot);
        var iterations = 0;
        var _loop_1 = function () {
            var newChildren = [], exhausted = false;
            currentDepthMembers.forEach(function (node) {
                var newestChildren = _this.createChildren(node, wordSymbols);
                if (!foundValidWord && newestChildren.some(function (child) { return child.isSpecial; })) {
                    foundValidWord = true;
                }
                newChildren = newChildren.concat(newestChildren);
            });
            exhausted = newChildren.every(function (child) {
                var terminals = child.value.filter(function (s) { return _this.project.terminalSymbols.includes(s); });
                return terminals.length > wordSymbols.length;
            }) || wordSymbols.length < iterations++ - wordSymbols.length;
            if (newChildren.length == 0 || exhausted)
                return "break"; // Cannot expand any further
            currentDepthMembers = newChildren;
        };
        while (!foundValidWord) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        if (!foundValidWord && maxLength == 1) {
            console.log(start.rightHandSide, wordSymbols);
            foundValidWord = true; // Start assuming our first node has the answer
            for (var i = 0; i < start.rightHandSide.length && foundValidWord; i++) {
                if (start.rightHandSide[i] != wordSymbols[i])
                    foundValidWord = false;
            }
            this.expansionTreeRoot.isSpecial = foundValidWord;
        }
        if (foundValidWord) {
            alertify.success("The word is valid.");
        }
        else {
            alertify.log("The word is invalid.");
        }
    };
    GrammarComponent.prototype.createChildren = function (node, targetWord) {
        if (targetWord === void 0) { targetWord = null; }
        var possibleExpansions = this.expandWord(node.value), childrenDepth = node.depth + 1;
        possibleExpansions.map(function (expansion) {
            var newNode = new TreeNode(childrenDepth, expansion);
            if (targetWord != null && newNode.value.length == targetWord.length) {
                newNode.isSpecial = true; // Start assuming it is equal
                for (var i = 0; i < newNode.value.length && newNode.isSpecial; i++) {
                    if (newNode.value[i] != targetWord[i])
                        newNode.isSpecial = false;
                }
            }
            node.children.push(newNode);
        });
        return node.children;
    };
    GrammarComponent.prototype.expandWord = function (symbols, onlyFirstNonTerminal) {
        if (onlyFirstNonTerminal === void 0) { onlyFirstNonTerminal = true; }
        var expansions = [];
        var _loop_2 = function (symbolIndex) {
            var symbol = symbols[symbolIndex];
            if (this_1.project.nonterminalSymbols.includes(symbol)) {
                var appropiateRules = this_1.project.getRulesforSymbol(symbol);
                appropiateRules.forEach(function (rule) {
                    var newExpansion = symbols.map(function (s, i) {
                        if (i == symbolIndex) {
                            return rule.rightHandSide;
                        }
                        else {
                            return s;
                        }
                    });
                    expansions.push([].concat.apply([], newExpansion));
                });
                if (onlyFirstNonTerminal)
                    return "break";
            }
        };
        var this_1 = this;
        for (var symbolIndex = 0; symbolIndex < symbols.length; symbolIndex++) {
            var state_2 = _loop_2(symbolIndex);
            if (state_2 === "break")
                break;
        }
        return expansions;
    };
    GrammarComponent.prototype.validateProductionRules = function () {
        var validSymbols = this.project.nonterminalSymbols.concat(this.project.terminalSymbols);
        for (var i = 0; i < this.project.productionRules.length; i++) {
            var rule = this.project.productionRules[i];
            var isSubset = !rule.leftHandSide.some(function (symbol) { return validSymbols.indexOf(symbol) === -1; });
            isSubset = isSubset && !rule.rightHandSide.some(function (symbol) { return validSymbols.indexOf(symbol) === -1; });
            if (!isSubset) {
                alertify.error("The production rules contain undefined symbols.");
                throw "The production rules contain undefined symbols.";
            }
        }
    };
    return GrammarComponent;
}(__WEBPACK_IMPORTED_MODULE_2__project_component__["a" /* ProjectComponent */]));
GrammarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/grammar-designer/grammar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grammar-designer/grammar.component.css")]
    })
], GrammarComponent);

var TreeNode = (function () {
    function TreeNode(depth, value, isSpecial) {
        if (isSpecial === void 0) { isSpecial = false; }
        this.depth = depth;
        this.value = value;
        this.isSpecial = isSpecial;
        this.children = [];
    }
    return TreeNode;
}());
//# sourceMappingURL=grammar.component.js.map

/***/ }),

/***/ "../../../../../src/app/grammar-designer/grammar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrammarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grammar_routing_module__ = __webpack_require__("../../../../../src/app/grammar-designer/grammar-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grammar_component__ = __webpack_require__("../../../../../src/app/grammar-designer/grammar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GrammarModule = (function () {
    function GrammarModule() {
    }
    return GrammarModule;
}());
GrammarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__grammar_component__["a" /* GrammarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__grammar_routing_module__["a" /* GrammarRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__grammar_component__["a" /* GrammarComponent */]
        ]
    })
], GrammarModule);

//# sourceMappingURL=grammar.module.js.map

/***/ }),

/***/ "../../../../../src/app/main-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  width: 920px;\r\n  max-width: 100%;\r\n  padding: 16px;\r\n  margin: 0px auto;\r\n  display: block;\r\n  background-color: #fff;\r\n  min-height: 100vh;\r\n  box-shadow: 0px 0px 10px 1px #999;\r\n  padding-top: 88px;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding-left: 10px;\r\n}\r\n\r\nli:before {\r\n  content: \"-\";\r\n  margin-right: 10px;\r\n}\r\n\r\n.margin {\r\n  margin: 80px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Welcome to Christomata.</h2>\r\n  <h3><a routerLink=\"\">Open an existing automaton</a> or choose a type to begin:</h3>\r\n  <ul>\r\n    <li><a routerLink=\"/finite\">Finite Automata</a></li>\r\n    <li><a routerLink=\"/grammar\">Grammar Designer</a></li>\r\n    <li>Pushdown Automata</li>\r\n    <li>Turing Machine</li>\r\n  </ul>\r\n\r\n  <div class=\"margin\"></div>\r\n\r\n  <h3>Reference</h3>\r\n  <p>This project is still a work in progress. Reference and documentation will be provided later on, but this project aims\r\n    to achieve high degrees of usability with great UX and functionality.</p>\r\n  <h3>About</h3>\r\n  <p>This is a project created by <a href=\"http://jaquez.mx/\">Chris Jáquez</a> as extra credit for the college class of Computational\r\n    Mathematics.</p>\r\n  <p>This project is developed using Angular and its source code is available at <a href=\"https://github.com/Tigermisu/automaton-simulator\">Github</a>    under the APACHE license.</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_state_service__ = __webpack_require__("../../../../../src/app/app-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainMenuComponent = (function () {
    function MainMenuComponent(appStateService) {
        this.appStateService = appStateService;
    }
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/main-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */]) === "function" && _a || Object])
], MainMenuComponent);

var _a;
//# sourceMappingURL=main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__("../../../../../src/app/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_state_service__ = __webpack_require__("../../../../../src/app/app-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = (function () {
    function ProjectComponent(appStateService, router) {
        this.appStateService = appStateService;
        this.router = router;
    }
    ProjectComponent.prototype.onKeyDown = function ($event) {
        var keyCode = $event.code;
        if ($event.ctrlKey) {
            $event.preventDefault();
            $event.stopPropagation();
            switch (keyCode) {
                case "KeyZ":
                    this.appStateService.undoAction();
                    break;
                case "KeyY":
                    this.appStateService.redoAction();
                    break;
            }
        }
    };
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.appStateService.toolbarClickedStream.subscribe(function ($event) {
            _this.onToolClicked($event);
        });
        this.onUnloadFunction = function ($e) {
            if (_this.project.metadata.isUnsaved) {
                var message = "You have unsaved changes. Are you sure you want to exit?";
                // Most browsers don't accept a custom message nowadays, but it's here just in case.
                $e.returnValue = true;
                return message;
            }
        };
        alertify.logPosition("top right");
        window.addEventListener("beforeunload", this.onUnloadFunction);
    };
    ProjectComponent.prototype.ngOnDestroy = function () {
        this.appStateService.closeActiveProject();
        this.subscription.unsubscribe();
        window.removeEventListener("beforeUnload", this.onUnloadFunction);
    };
    ProjectComponent.prototype.onToolClicked = function ($event) {
        switch ($event.target) {
            case "undo":
                this.appStateService.undoAction();
                break;
            case "redo":
                this.appStateService.redoAction();
                break;
        }
    };
    ProjectComponent.prototype.openFile = function (parseFunction) {
        var _this = this;
        this.protectAgainstUnsavedChanges(function () {
            var fileInput = document.createElement('input');
            fileInput.style.display = 'none';
            fileInput.type = 'file';
            fileInput.setAttribute("accept", ".json");
            document.body.appendChild(fileInput);
            fileInput.addEventListener("change", function ($event) {
                if (fileInput.files.length > 0) {
                    _this.loadProject(fileInput.files[0], parseFunction);
                }
                document.body.removeChild(fileInput);
            });
            fileInput.click();
        });
    };
    ProjectComponent.prototype.loadProject = function (file, parseFunction) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function ($event) {
            try {
                var rawProject = JSON.parse($event.target.result);
                _this.project = parseFunction(rawProject);
                _this.appStateService.openProject(_this.project);
            }
            catch (e) {
                alertify.error("Invalid Project File");
                console.info("Unable to parse JSON:", e);
            }
        };
        reader.readAsText(file);
    };
    ProjectComponent.prototype.newProject = function (project, title, redirectUrl) {
        var _this = this;
        this.protectAgainstUnsavedChanges(function () {
            _this.project = project;
            _this.appStateService.openProject(_this.project);
            _this.project.metadata = new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Metadata */](title);
            if (redirectUrl) {
                _this.router.navigateByUrl(redirectUrl, { replaceUrl: true });
            }
        });
    };
    ProjectComponent.prototype.saveProject = function (filter) {
        this.project.metadata.isUnsaved = false;
        var element = document.createElement('a'), jsonProject = JSON.stringify(this.project, filter, 2);
        var blob = new Blob([jsonProject], { type: "text/plain" });
        element.setAttribute('href', window.URL.createObjectURL(blob));
        element.setAttribute('download', this.project.metadata.title + ".json");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    ProjectComponent.prototype.protectAgainstUnsavedChanges = function (acknowledgeFunction) {
        if (typeof this.project !== "undefined" && this.project.metadata.isUnsaved) {
            var message = "Warning: You have unsaved changes in your project. If you continue all changes will be lost.";
            alertify.okBtn("Continue without saving").confirm(message, function () {
                acknowledgeFunction();
            });
        }
        else {
            acknowledgeFunction();
        }
    };
    return ProjectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProjectComponent.prototype, "onKeyDown", null);
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "You shouldn't be seeing this."
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_state_service__["a" /* AppStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_state_service__["a" /* AppStateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProjectComponent);

var _a, _b;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Metadata; });
var Project = (function () {
    function Project(type) {
        this.type = type;
    }
    return Project;
}());

var Metadata = (function () {
    function Metadata(title) {
        this.title = title;
        this.creationDate = new Date();
        this.lastEdit = this.creationDate;
        this.isUnsaved = false;
    }
    return Metadata;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ "../../../../../src/app/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"general-tools\" [attr.style]=\"style\" *ngIf=\"appStateService.project\">\r\n  <div id=\"saveTool\" class=\"tool save\" (click)=\"onToolClick('save', false)\"></div>\r\n  <div id=\"newTool\" class=\"tool new\" (click)=\"onToolClick('new', false)\"></div>\r\n  <div id=\"openTool\" class=\"tool open\" (click)=\"onToolClick('open', false)\"></div>\r\n  <div id=\"deleteTool\" class=\"tool delete\" (click)=\"onToolClick('delete', false)\"></div>\r\n  <div class=\"separator\"></div>\r\n  <div id=\"undoTool\" class=\"tool undo\" (click)=\"onToolClick('undo', false)\"></div>\r\n  <div id=\"redoTool\" class=\"tool redo\" (click)=\"onToolClick('redo', false)\"></div>\r\n</div>\r\n<div class=\"contextual-tools\">\r\n  <div id=\"finiteTools\" class=\"contextual-wrapper\" *ngIf=\"toolbarEnableState.finiteautomaton\">\r\n    <div id=\"newFiniteState\" class=\"tool newFiniteState\" [class.active]=\"selectedTool == 'newFiniteState'\" \r\n      (click)=\"onToolClick('newFiniteState', true)\"></div>\r\n    <div id=\"newFiniteTransition\" class=\"tool newFiniteTransition\" [class.active]=\"selectedTool == 'newFiniteTransition'\"\r\n      (click)=\"onToolClick('newFiniteTransition', true)\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* unused harmony export ToolEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_state_service__ = __webpack_require__("../../../../../src/app/app-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = (function () {
    function ToolbarComponent(appStateService) {
        this.appStateService = appStateService;
        this.toolbarEnableState = {
            "finiteautomaton": false
        };
        this.toolclicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.appStateService.registerToolbarComponent(this);
    };
    ToolbarComponent.prototype.activateToolbar = function (type, enable) {
        switch (type) {
            case "finite-automaton":
                this.toolbarEnableState.finiteautomaton = enable;
                break;
        }
    };
    Object.defineProperty(ToolbarComponent.prototype, "activeTool", {
        get: function () {
            return this.selectedTool;
        },
        enumerable: true,
        configurable: true
    });
    ToolbarComponent.prototype.deselectTool = function () {
        this.selectedTool = null;
    };
    ToolbarComponent.prototype.onToolClick = function (toolName, isToggleable) {
        if (isToggleable) {
            this.selectTool(toolName);
        }
        this.toolclicked.emit(new ToolEvent(toolName, isToggleable, this.selectedTool == toolName));
        this.appStateService.announceToolbarClick(new ToolEvent(toolName, isToggleable, this.selectedTool == toolName));
    };
    ToolbarComponent.prototype.selectTool = function (tool) {
        if (this.selectedTool != tool) {
            this.selectedTool = tool;
        }
        else {
            this.deselectTool();
        }
    };
    ToolbarComponent.prototype.undoAction = function () {
        console.log("undo");
    };
    ToolbarComponent.prototype.redoAction = function () {
        console.log("redo");
    };
    ToolbarComponent.prototype.clearActionStack = function () {
        console.log("clearing stack");
    };
    return ToolbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ToolbarComponent.prototype, "toolclicked", void 0);
ToolbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'toolbar',
        template: __webpack_require__("../../../../../src/app/toolbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_state_service__["a" /* AppStateService */]) === "function" && _b || Object])
], ToolbarComponent);

var ToolEvent = (function () {
    function ToolEvent(target, toggleable, isActive) {
        this.target = target;
        this.toggleable = toggleable;
        this.isActive = isActive;
    }
    return ToolEvent;
}());

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/unsaved-changes.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsavedChangesGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UnsavedChangesGuard = (function () {
    function UnsavedChangesGuard() {
    }
    UnsavedChangesGuard.prototype.canDeactivate = function (target) {
        if (target.project.metadata.isUnsaved) {
            return window.confirm('You have unsaved changes in your project. Are you sure you want to quit?');
        }
        return true;
    };
    return UnsavedChangesGuard;
}());
UnsavedChangesGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], UnsavedChangesGuard);

//# sourceMappingURL=unsaved-changes.guard.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map