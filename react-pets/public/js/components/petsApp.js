webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter() {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(Filter, [{
        key: 'render',
        value: function render() {}
    }]);

    return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {};

        return _this;
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "header",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "logo" },
                    " Logo"
                ),
                _react2.default.createElement(
                    "nav",
                    null,
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "About Us"
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "Partners"
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "#" },
                        "Log In"
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "#", className: "register-btn" },
                        "Register"
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'david'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'loopListings',
    value: function loopListings() {
      var petslistData = this.props.petslistData;


      return petslistData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement('div', { className: 'listing' }),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              listing.petType
            ),
            _react2.default.createElement(
              'li',
              null,
              listing.petBreed
            ),
            _react2.default.createElement(
              'li',
              null,
              listing.petName
            ),
            _react2.default.createElement(
              'li',
              null,
              listing.petSize
            ),
            _react2.default.createElement(
              'li',
              null,
              listing.petColor
            ),
            _react2.default.createElement(
              'li',
              null,
              listing.petSex
            ),
            _react2.default.createElement(
              'li',
              null,
              listing.petPrice
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            ' 390 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby' },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var petslistData = [{
    petType: 'Fish',
    petBreed: 'Tetra',
    petName: 'Lucy',
    petSize: 'Small',
    petColor: 'Blue',
    petSex: 'Female',
    petPrice: 10.00,

    petRequirements: ['Water', 'Aquarium', 'Fish Food'],
    image: 'https://i.pinimg.com/736x/7b/54/4d/7b544d96a8bc413dc8b46079fab1f65e.jpg'
}, {
    petType: 'Fish',
    petBreed: 'Beta',
    petName: 'Frank',
    petSize: 'Small',
    petColor: 'Pink',
    petSex: 'Male',
    petPrice: 25.00,

    petRequirements: ['Water', 'Aquarium', 'Fish Food'],
    image: 'https://i.pinimg.com/originals/bf/64/26/bf642601bd531187f94bdc0e82dd8392.jpg'
}, {
    petType: 'Dog',
    petBreed: 'Husky',
    petName: 'Cherry',
    petSize: 'Large',
    petColor: 'Grey/White',
    petSex: 'Female',
    petPrice: 150.00,

    petRequirements: ['Water', 'Grooming', 'Exercise', 'Dog Food'],
    image: 'https://dogdiscoveries.com/wp-content/uploads/2016/02/husky-grey-and-white.png'
}, {
    petType: 'Bird',
    petBreed: 'Cockatoo',
    petName: 'Mara',
    petSize: 'Small',
    petColor: 'White',
    petSex: 'Female',
    petPrice: 80.00,

    petRequirements: ['Water', 'Bird-Food', 'Cage'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Citron-crested_Cockatoo.jpg/407px-Citron-crested_Cockatoo.jpg'
}, {
    petType: 'Reptile',
    petBreed: 'Iquana',
    petName: 'Dave',
    petSize: 'Medium',
    petColor: 'Green',
    petSex: 'Male',
    petPrice: 75.00,

    petRequirements: ['Water', 'Heat', 'Iguana Food'],
    image: 'http://4.bp.blogspot.com/_wviAfk7xoho/TKahcOunRrI/AAAAAAAAADo/poN8DKTy5J0/s1600/green-iguana2.jpg'
}, {
    petType: 'Reptile',
    petBreed: 'Tortoise',
    petName: 'Nalli',
    petSize: 'Large',
    petColor: 'Grey',
    petSex: 'Female',
    petPrice: '240.00',

    petRequirements: ['Water', 'Tortoise Food'],
    image: 'http://1.bp.blogspot.com/-Q-hsHJgLvUE/UN-sCDYP8RI/AAAAAAAAAg0/YUpE0i-Ph_Q/s1600/Aldabra+Giant+Tortoise.jpg'
}, {
    petType: 'Cat',
    petBreed: 'Siamese',
    petName: 'Alphonso',
    petSize: 'Medium',
    petColor: 'Black/Grey',
    petSex: 'Male',
    petPrice: '65.00',

    petRequirements: ['Water', 'Cat Food', 'Litter Box'],
    image: 'https://i.pinimg.com/736x/7b/54/4d/7b544d96a8bc413dc8b46079fab1f65e.jpg'
}, {
    petType: 'Cat',
    petBreed: 'Korat',
    petName: 'Lucy',
    petSize: 'Small',
    petColor: 'Blue',
    petSex: 'Female',
    petPrice: 92.00,

    petRequirements: ['Water', 'Cat Food', 'Litter Box'],
    image: 'http://1.bp.blogspot.com/-N7FFMnsQTwM/UJ86C9tjwNI/AAAAAAAABMs/RVUSPMds4Vo/s1600/Korat_Cat_Picture.jpg'
}];

exports.default = petslistData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _petslistData = __webpack_require__(233);

var _petslistData2 = _interopRequireDefault(_petslistData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: 'david',
            petslistData: _petslistData2.default
        };

        _this.change = _this.change.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'change',
        value: function change(event) {
            var _this2 = this;

            var name = event.target.name;
            var value = event.target.value;
            this.setState(_defineProperty({}, name, value), function () {
                console.log(_this2.state);
            });
            console.log(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.state);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'content-area' },
                    _react2.default.createElement(_Listings2.default, { petslistData: this.state.petslistData })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);