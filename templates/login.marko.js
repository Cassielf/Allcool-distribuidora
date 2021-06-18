// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/templatealcoll-main$1.0.0/templates/login.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\"><title>Login</title> <link rel=stylesheet href=/assets/css/style-extra.css><link rel=stylesheet href=/assets/bootstrap/css/bootstrap.min.css?h=a847d1fe541ca62044cce96cfd476e07><link href=https://fonts.googleapis.com/css?family=Lato><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Muli><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Aldrich><link rel=stylesheet href=https://fonts.googleapis.com/css?family=Alfa+Slab+One><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css><link rel=stylesheet href=/assets/css/styles.min.css?h=de827f96ca45107a1c2d70d42c066210></head><body id=page-top><nav class=\"navbar navbar-expand-lg navbar-light  fixed-top\" style=\"background-color: #FDC844;\"><a class=\"navbar-brand href\" href=/ ><img id=logo src=/img/logo.png alt=logo></a><button class=navbar-toggler type=button data-toggle=collapse data-target=#conteudoNavbarSuportado aria-controls=conteudoNavbarSuportado aria-expanded=false aria-label=\"Alterna navegação\"><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=conteudoNavbarSuportado><ul class=\"navbar-nav mr-auto\"><li class=nav-item><a class=\"nav-link menu-letter href\" href=/ >Catálogo</a></li><li class=\"nav-item menu-letter\"><a class=\"nav-link href\" href=/produtos>Produtos</a></li><li id=carri class=\"nav-item menu-letter active\"><a class=\"nav-link href\" href=/pagamentos>Carrinho <span class=sr-only>(página atual)</span></a></li></ul><form class=\"form-inline my-2 my-lg-0\"><a class=\"btn btn-outline-dark menu-letter\" href=/register role=button id=hover style=\"background-color: #272319; border-radius: 5px; border: none; color: #ffffff; margin-right: 20px;\">CADASTRO</a><a class=\"btn btn-outline-dark menu-letter\" href=/authenticate role=button id=hover2 style=\"background-color: #ffffff; border-radius: 5px; border: none; color: #161313;\">LOGIN</a></form></div></nav><main class=container><div class=login-box><div id=toast-place></div><h2>Login</h2><form action=/authenticate method=POST><div class=user-box><input type=email name=email required><label>Username</label></div><div class=user-box><input type=password name=senha required><label>Password</label></div><button type=submit><span></span><span></span><span></span><span></span> Submit</button></form></div></main><script src=/scripts/test.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js></script><script src=/assets/js/script.min.js?h=7a4e021987da3d38b958d06f38b30142></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "49");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/templatealcoll-main$1.0.0/templates/login.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
