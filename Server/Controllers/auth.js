"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLofoutPage = exports.ProcessRegisterPage = exports.ProcessLoginPage = exports.DisplayRegisterPage = exports.DisplayLoginPage = void 0;
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: 'Login', page: 'login', message: req.flash('loginMessage'), displayName: '' });
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render('index', { title: 'register', page: 'register', message: req.flash('registerMessage'), displayName: '' });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessLoginPage(req, res, next) {
}
exports.ProcessLoginPage = ProcessLoginPage;
function ProcessRegisterPage(req, res, next) {
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLofoutPage(req, res, next) {
}
exports.ProcessLofoutPage = ProcessLofoutPage;
//# sourceMappingURL=auth.js.map