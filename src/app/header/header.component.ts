import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    template:`
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a href="#" class="navbar-brand">Recipe Book</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li routerLinkActive="active"><a routerLink="/recipes">Recipes</a></li>
                    <li routerLinkActive="active"><a routerLink="/shopping-list">Shopping List</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li appDropdown class="dropdown">
                        <a  role="button" class="dropdown-toggle" role="button">Manage <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a  role="button">Save Data</a></li>
                            <li><a  role="button">Fetch Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
})
export class HeaderComponent {

}