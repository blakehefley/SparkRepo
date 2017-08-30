import { Component, ElementRef, ViewChild, Injectable, AfterViewInit, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { SideDrawerLocation } from 'nativescript-telerik-ui/sidedrawer';
import { RadSideDrawerComponent } from "nativescript-telerik-ui/sidedrawer/angular";
import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DependencyObservable, Property, PropertyMetadataSettings } from "tns-core-modules/ui/core/dependency-observable";
import * as platformModule from "tns-core-modules/platform";
@Component({
    moduleId: module.id,
    selector: "tk-sidedrawer-position",
    templateUrl: 'app.component.html',
    styleUrls: ["app.css"]
})
@Injectable()
// >> sidedrawer-angular-position-code
export class AppComponent implements AfterViewInit, OnInit {
    private _currentLocation : SideDrawerLocation;
    private drawerShown : boolean = false;
    constructor(private page: Page, private _changeDetectionRef: ChangeDetectorRef) {
        this.page.on("loaded", this.onLoaded, this);
    }

    public onLoaded() {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(20);
        }
    }

    ngOnInit() {
        this.currentLocation = SideDrawerLocation.Left;
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    getPlatform(){
        return platformModule.device.os;
    }
    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    get currentLocation(): SideDrawerLocation {
        return this._currentLocation;
    }

    set currentLocation(value: SideDrawerLocation) {
        this._currentLocation = value;
    }
    // >> (hide)
    public onCloseDrawerTap() {
        this.drawerShown = false;
       this.drawer.closeDrawer();
    }

    public onRightLocationTap() {
        this.currentLocation = SideDrawerLocation.Right;
        this._changeDetectionRef.detectChanges();

        this.drawer.showDrawer();
    }

    public onLeftLocationTap() {
        // this.currentLocation = SideDrawerLocation.Left;
         this._changeDetectionRef.detectChanges();
        if(this.drawerShown){
            this.drawer.closeDrawer();
            this.drawerShown=false;
        }else{
            this.drawer.showDrawer();
            this.drawerShown=true;
        }
    }

    public onBottomLocationTap() {
        this.currentLocation = SideDrawerLocation.Bottom;
        this._changeDetectionRef.detectChanges();

        this.drawer.showDrawer();
    }

    public onTopLocationTap() {
        this.currentLocation = SideDrawerLocation.Top;
        this._changeDetectionRef.detectChanges();

        this.drawer.showDrawer();
    }
    // << (hide)
}