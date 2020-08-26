"use strict";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0e8b4698261bdb8c9b0867054e22ae446a08abb3
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

<<<<<<< HEAD
=======
=======
>>>>>>> 4678b155ddce36196ef0bdfc5a6ab80f8a02fda7
>>>>>>> 0e8b4698261bdb8c9b0867054e22ae446a08abb3
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

<<<<<<< HEAD
=======
var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  }

  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push('Novo todo');
      console.log(this.todos);
    }
  }]);

  return TodoList;
}();

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.addTodo();
};

>>>>>>> 4678b155ddce36196ef0bdfc5a6ab80f8a02fda7
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
<<<<<<< HEAD
      return "".concat(this.admin);
=======
      return this.admin;
>>>>>>> 4678b155ddce36196ef0bdfc5a6ab80f8a02fda7
    }
  }]);

  return Usuario;
}();

<<<<<<< HEAD
;

=======
>>>>>>> 4678b155ddce36196ef0bdfc5a6ab80f8a02fda7
var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
<<<<<<< HEAD
    _this.email = email;
    _this.senha = senha;
=======
>>>>>>> 4678b155ddce36196ef0bdfc5a6ab80f8a02fda7
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

<<<<<<< HEAD
;
var User1 = new Usuario('email@teste.com', 'senha123');
var Admin1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
var usuario = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuario.map(function (item) {
  return item.idade;
});
console.log(idades);
var filter = usuario.filter(function (item) {
  return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(filter);
var find = usuario.find(function (item) {
  return item.empresa === 'Google';
});
console.log(find);
var novoUsuario = usuario.map(function (item) {
  var teste = _objectSpread(_objectSpread({}, item), {}, {
    idade: item.idade * 2
  });

  return teste;
});
var filtrado = novoUsuario.filter(function (item) {
  return item.idade < 50;
});
console.log(filtrado);
=======
var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
<<<<<<< HEAD
var usuarios = [{
  nome: 'Alexandre',
  idade: 36,
  empresa: 'DreamMaker'
}, {
  nome: 'Rafael',
  idade: 16,
  empresa: 'DreamMaker'
}, {
  nome: 'Victoria',
  idade: 11,
  empresa: 'DreamMaker'
}];
var idade = usuarios.map(function (item) {
  return item.idade;
});
console.log(idade);
var trabalhaEMaiorQue18 = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === 'DreamMaker';
});
console.log(trabalhaEMaiorQue18);
var encontraGoogle = usuarios.find(function (item) {
  return item === 'Google';
});
console.log(encontraGoogle);
var multiplicador = usuarios.map(function (item) {
  var multiplicacao = _objectSpread(_objectSpread({}, item), {}, {
    idade: item.idade * 2
  });

  return multiplicacao;
});
var idadeMultiplicada = multiplicador.filter(function (item) {
  return item.idade < 50;
});
console.log(idadeMultiplicada); // 3.1

var arr = [1, 2, 3, 4, 5];
console.log(arr.map(function (item) {
  return item + 10;
}));
=======
>>>>>>> 4678b155ddce36196ef0bdfc5a6ab80f8a02fda7
>>>>>>> 0e8b4698261bdb8c9b0867054e22ae446a08abb3
