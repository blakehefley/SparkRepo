"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var HomeComponent = (function () {
    function HomeComponent(page, _changeDetectionRef) {
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.page.on("loaded", this.onLoaded, this);
    }
    HomeComponent.prototype.onLoaded = function () {
        if (this.drawer.android) {
            this.drawer.android.setDrawerCloseThreshold(20);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Left;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(HomeComponent.prototype, "currentLocation", {
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
    HomeComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    HomeComponent.prototype.onRightLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Right;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    HomeComponent.prototype.onLeftLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Left;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    HomeComponent.prototype.onBottomLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Bottom;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    HomeComponent.prototype.onTopLocationTap = function () {
        this.currentLocation = sidedrawer_1.SideDrawerLocation.Top;
        this._changeDetectionRef.detectChanges();
        this.drawer.showDrawer();
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], HomeComponent.prototype, "drawerComponent", void 0);
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "tk-sidedrawer-position",
        templateUrl: 'home.component.html'
    }),
    core_1.Injectable()
    // >> sidedrawer-angular-position-code
    ,
    __metadata("design:paramtypes", [page_1.Page, core_1.ChangeDetectorRef])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1SDtBQUN2SCxpREFBZ0Q7QUFDaEQsaUVBQXdFO0FBQ3hFLHNFQUFvRjtBQVlwRixJQUFhLGFBQWE7SUFHdEIsdUJBQW9CLElBQVUsRUFBVSxtQkFBc0M7UUFBMUQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRywrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFDbkQsQ0FBQztJQUtELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0JBQUksMENBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFFRCxVQUFvQixLQUF5QjtZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUpBO0lBS0QsWUFBWTtJQUNMLHdDQUFnQixHQUF2QjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLDBDQUFrQixHQUF6QjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsK0JBQWtCLENBQUMsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLCtCQUFrQixDQUFDLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sMkNBQW1CLEdBQTFCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRywrQkFBa0IsQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHdDQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsK0JBQWtCLENBQUMsR0FBRyxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7QUFoRHNDO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjtzREFBQztBQWpCekUsYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsV0FBVyxFQUFFLHFCQUFxQjtLQUNyQyxDQUFDO0lBQ0QsaUJBQVUsRUFBRTtJQUNiLHNDQUFzQzs7cUNBSVIsV0FBSSxFQUErQix3QkFBaUI7R0FIckUsYUFBYSxDQWlFekI7QUFqRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgSW5qZWN0YWJsZSwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgU2lkZURyYXdlckxvY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERlcGVuZGVuY3lPYnNlcnZhYmxlLCBQcm9wZXJ0eSwgUHJvcGVydHlNZXRhZGF0YVNldHRpbmdzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS9kZXBlbmRlbmN5LW9ic2VydmFibGVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1zaWRlZHJhd2VyLXBvc2l0aW9uXCIsXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJ1xufSlcbkBJbmplY3RhYmxlKClcbi8vID4+IHNpZGVkcmF3ZXItYW5ndWxhci1wb3NpdGlvbi1jb2RlXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfY3VycmVudExvY2F0aW9uIDogU2lkZURyYXdlckxvY2F0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMucGFnZS5vbihcImxvYWRlZFwiLCB0aGlzLm9uTG9hZGVkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYXdlci5hbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5hbmRyb2lkLnNldERyYXdlckNsb3NlVGhyZXNob2xkKDIwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFNpZGVEcmF3ZXJMb2NhdGlvbi5MZWZ0O1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50TG9jYXRpb24oKTogU2lkZURyYXdlckxvY2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMb2NhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudExvY2F0aW9uKHZhbHVlOiBTaWRlRHJhd2VyTG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5fY3VycmVudExvY2F0aW9uID0gdmFsdWU7XG4gICAgfVxuICAgIC8vID4+IChoaWRlKVxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmlnaHRMb2NhdGlvblRhcCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uUmlnaHQ7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxlZnRMb2NhdGlvblRhcCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBTaWRlRHJhd2VyTG9jYXRpb24uTGVmdDtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQm90dG9tTG9jYXRpb25UYXAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gU2lkZURyYXdlckxvY2F0aW9uLkJvdHRvbTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVG9wTG9jYXRpb25UYXAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gU2lkZURyYXdlckxvY2F0aW9uLlRvcDtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIC8vIDw8IChoaWRlKVxufSJdfQ==