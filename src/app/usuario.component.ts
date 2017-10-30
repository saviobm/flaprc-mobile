
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component(
    {
        selector: 'usuario-component',
        templateUrl: './usuario.component.html'
    }
)
export class UsuarioComponent implements OnInit {

    usuario: Usuario;

    ngOnInit(): void {

        var usuario: Usuario = new Usuario();
       
        usuario.setNome('Sávio');
        usuario.setEmail('saviobm@gmail.com');

        this.usuario = usuario;

    }

}