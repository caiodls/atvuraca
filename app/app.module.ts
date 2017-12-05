import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

var app = angular.module("crud", []);
app.controller("crudCtrl", function ($scope) {
  $scope.Cadastrar  = function(data) {
    $scope.MostrarTabela = true;

    $scope.nome = data.nome;
    $scope.sexo = data.sexo;
    $scope.datanasc = data.dataNascimento;
    $scope.pais = data.pais;
  }
});
