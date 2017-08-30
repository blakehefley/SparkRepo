"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var platformModule = require("tns-core-modules/platform");
var AppComponent = (function () {
    function AppComponent(page, _changeDetectionRef) {
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.drawerShown = false;
        this.page.on("loaded", this.onLoaded, this);
    }
    AppComponent.prototype.onLoaded = function () {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(20);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Left;
    };
    AppComponent.prototype.getPlatform = function () {
        return platformModule.device.os;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(AppComponent.prototype, "currentLocation", {
        get: function () {
            return this._currentLocation;
        },
        set: function (value) {
            this._currentLocation = value;
        },
        enumerable: true,
        configurable: true
    });
    // >> (hide)
    AppComponent.prototype.onCloseDrawerTap = function () {
        this.drawerShown = false;
        this.drawer.closeDrawer();
    };
    AppComponent.prototype.onRightLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Right;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    AppComponent.prototype.onLeftLocationTap = function () {
        // this.currentLocation = SideDrawerLocation.Left;
        this._changeDetectionRef.detectChanges();
        if (this.drawerShown) {
            this.drawer.closeDrawer();
            this.drawerShown = false;
        }
        else {
            this.drawer.showDrawer();
            this.drawerShown = true;
        }
    };
    AppComponent.prototype.onBottomLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Bottom;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    AppComponent.prototype.onTopLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Top;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], AppComponent.prototype, "drawerComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "tk-sidedrawer-position",
        templateUrl: 'app.component.html',
        styleUrls: ["app.css"]
    }),
    core_1.Injectable()
    // >> sidedrawer-angular-position-code
    ,
    __metadata("design:paramtypes", [page_1.Page, core_1.ChangeDetectorRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUg7QUFDdkgsaURBQWdEO0FBQ2hELGlFQUF3RTtBQUN4RSxzRUFBb0Y7QUFJcEYsMERBQTREO0FBUzVELElBQWEsWUFBWTtJQUdyQixzQkFBb0IsSUFBVSxFQUFVLG1CQUFzQztRQUExRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUR0RSxnQkFBVyxHQUFhLEtBQUssQ0FBQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLCtCQUFrQixDQUFDLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBSUQsa0NBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsc0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQkFBSSx5Q0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzthQUVELFVBQW9CLEtBQXlCO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BSkE7SUFLRCxZQUFZO0lBQ0wsdUNBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0seUNBQWtCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRywrQkFBa0IsQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHdDQUFpQixHQUF4QjtRQUNJLGtEQUFrRDtRQUNqRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBRU0sMENBQW1CLEdBQTFCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRywrQkFBa0IsQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHVDQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsK0JBQWtCLENBQUMsR0FBRyxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7QUF4RHNDO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjtxREFBQztBQWpCekUsWUFBWTtJQVJ4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7S0FDekIsQ0FBQztJQUNELGlCQUFVLEVBQUU7SUFDYixzQ0FBc0M7O3FDQUlSLFdBQUksRUFBK0Isd0JBQWlCO0dBSHJFLFlBQVksQ0F5RXhCO0FBekVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEluamVjdGFibGUsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFNpZGVEcmF3ZXJMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEZXBlbmRlbmN5T2JzZXJ2YWJsZSwgUHJvcGVydHksIFByb3BlcnR5TWV0YWRhdGFTZXR0aW5ncyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvZGVwZW5kZW5jeS1vYnNlcnZhYmxlXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1zaWRlZHJhd2VyLXBvc2l0aW9uXCIsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1wiYXBwLmNzc1wiXVxufSlcbkBJbmplY3RhYmxlKClcbi8vID4+IHNpZGVkcmF3ZXItYW5ndWxhci1wb3NpdGlvbi1jb2RlXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgICBwcml2YXRlIF9jdXJyZW50TG9jYXRpb24gOiBTaWRlRHJhd2VyTG9jYXRpb247XG4gICAgcHJpdmF0ZSBkcmF3ZXJTaG93biA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5wYWdlLm9uKFwibG9hZGVkXCIsIHRoaXMub25Mb2FkZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvYWRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhd2VyLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyLmFuZHJvaWQuc2V0RHJhd2VyQ2xvc2VUaHJlc2hvbGQoMjApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gU2lkZURyYXdlckxvY2F0aW9uLkxlZnQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuICAgIGdldFBsYXRmb3JtKCl7XG4gICAgICAgIHJldHVybiBwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uub3M7XG4gICAgfVxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50TG9jYXRpb24oKTogU2lkZURyYXdlckxvY2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMb2NhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudExvY2F0aW9uKHZhbHVlOiBTaWRlRHJhd2VyTG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5fY3VycmVudExvY2F0aW9uID0gdmFsdWU7XG4gICAgfVxuICAgIC8vID4+IChoaWRlKVxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgICB0aGlzLmRyYXdlclNob3duID0gZmFsc2U7XG4gICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SaWdodExvY2F0aW9uVGFwKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5SaWdodDtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGVmdExvY2F0aW9uVGFwKCkge1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5MZWZ0O1xuICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgaWYodGhpcy5kcmF3ZXJTaG93bil7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXJTaG93bj1mYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdlclNob3duPXRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Cb3R0b21Mb2NhdGlvblRhcCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uQm90dG9tO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Ub3BMb2NhdGlvblRhcCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uVG9wO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG4gICAgLy8gPDwgKGhpZGUpXG59Il19