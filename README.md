# Recalling with Angular 16

This Project for recalling the Angular latest version features with older. Practise and remind the workflow again.

## Create new Project
```bash
# create project
ng new p1-project --no-strict
```

# Practise the concepts [Structures] 
1. Basics
2. Components
3. Databinding
4. Directives
5. Services
6. Dependency Injection
7. Routing
8. Observables
9. Forms
10. Pipes
11. Http
12. Authentication
13. Optimizations
14. NgModules
15. Deployment
16. Animations
17. Testing

## Components
1. Export a class with @Component meta or annotation
2. @Component have following properties
	* **selector**: tag selector(`component`=><component></component>), attribute selector(`[component]`=><div component></div>) or class selector(`.component`=><div class="component"></div>)
	* template or templateUrls
	* style or styleUrls
3. Command line
```bash
# Create New Component using cli
ng generate component ${name}
ng g c ${name}
```
4. Features
	* String Interpolation => <div>{{$variable}}</div>
	* Property Binding => <button [disabled]="!isConnected">reconnect</button>
	* Event Binding = <button (click)="onCreateObject($event)">Add</button>
	* Two-way binding = Inside module.ts metadata property imports add entry for `import:[FormsModule]` `(from @angular/forms)` then [(ngModel)]="variable"

## Directives
Directives are instructions in the DOM.
1. Custom: @Directive({selector:"[my-directive]"}) class MyDirective
2. It is a structural directive(Structure directive start with *star) <div *ngIf="condition" />
```html
<p *ngIf="myBool; else mySelector">
	This is the message, Welcome {{name}}
</p>
<ng-template #mySelector>
	<p>If myBool false then this text shown.</p>
</ng-template>
```
3. [ngStyle]="{backgroundColor:getColor()}", property binding on directive.
4. [ngClass]="{className:condition}"
5. *ngFor="let item of items", showing list of items
```html
<div *ngFor="let item of items">Item: {{item}}</div>

<!-- get index -->
<div *ngFor="let item of items; let i = index">Item: {{i}} {{item}}</div>
``` 
-


## Commands
```bash

# New Component
ng generate component ${name}
ng g c ${name}

# add angular material
ng add @angular/material

# adding angular pwa(Progressive Web App)
ng add @angular/pwa

# run all test
ng test

# build for production
ng build


```
