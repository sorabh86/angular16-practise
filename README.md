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
18. Lifecycle Hooks

## Lifecycle Hooks
1. **ngOnChanges** - Called after a bound input property changes. 
```ts 
class MyComponent implements OnChanges //@angular/core
ngOnChanges(changes:SimpleChanges):void; //signature
```
2. **ngOnInit** - Called once the component is initialized.
```ts 
class MyComponent implements OnInit //@angular/core
```
3. **ngDoCheck** - Called during every change detection run.
```ts 
class MyComponent implements DoCheck //@angular/core
```
4. **ngAfterContentInit** - Called after content (ng-content) has been projected into view
```ts 
class MyComponent implements AfterContentInit //@angular/core
```
5. **ngAfterContentChecked** - Called every time the protected content has been checked
```ts 
class MyComponent implements AfterContentChecked //@angular/core
```
6. **ngAfterViewInit** - Called after the component's view (and child views) has been initialized.
```ts 
class MyComponent implements AfterViewInit //@angular/core
```
7. **ngAfterViewChecked** - Called every time the view (and child views) have been checked.
```ts 
class MyComponent implements AfterViewChecked //@angular/core
```
8. **ngOnDestroy** - Called once the component is about to be destroyed
```ts 
class MyComponent implements OnDestroy //@angular/core
```

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
ng g c ${name} --skip-tests
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
6. **ng-content** - html template directive for adding child node in between nodes.
```html
<!-- child - mycomponent.html -->
<ng-content></ng-content>
<!-- parent - appcomponent.html -->
<app-my-component>
	<h3>Hello world</h3> <!-- this line added to the hook ng-content -->
</app-my-component>
``` 
-
## Decorater
1. @Input(<attribute-name>:string | default same as variable name) - used to expose your component variable set from outside;
```ts
export MyComponent {
	@Input('attr-item') item:String;
}
```
2. @Output() - used to expose EventEmitter to be accessed outside
```ts
// declaration
@Output() onTrigger = new EventEmitter<string>();

// trigger
onTrigger.emit("sorabh86");
```
3. @Component({}) - used to define the component on class.
```ts
@Component({
	selector:string // name of custom html tag
	template:string // html content
	templateUrl:string // path to the html file
	styles:Array<String> // string's of css styles
	styleUrls:Array<String> // string's of css file path
	encapsulation:String // ViewEncapsulation.[Native(uses shadow dom if available),None(styles affects no matter where),Emulated(default behaviour, angulare create it own shadow dom for styles)].

})
```
4. ViewChild('refName') works with local Reference (ElementRef)
5. ContentChild('refName) access the (ElementRef) from child, passed with (ng-content) tag.

**Local Reference**

We can also define local reference in component html file using #name.
```html
<!-- mycomponent.html -->
<input type="text" #userNameInput placeholder="Enter Username">
<button></button>
```
```ts
// MyComponent.ts
@ViewChild('userNameInput') username:ElementRef; //@angular/core

// access
username.nativeElement.value;
```
5. 


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
