"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./components/home.component");
var about_component_1 = require("./components/about.component");
// Purely an example
// Change the routes/components to meet your needs
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: "home",
        children: [
            // '/home' loaded into `router-outlet` in main content
            { path: "", component: home_component_1.HomeComponent },
            // '/home/otherPath' loaded into `router-outlet` in main content
            { path: "otherPath", component: home_component_1.HomeComponent },
        ]
    },
    // '/someNavPage' pushed on nav stack using `page-router-outlet` (ie, push on a detail view with no drawer)
    { path: "about", component: about_component_1.AboutComponent },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw4REFBNEQ7QUFDNUQsZ0VBQThEO0FBRTlELG9CQUFvQjtBQUNwQixrREFBa0Q7QUFDckMsUUFBQSxNQUFNLEdBQVc7SUFDNUI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRTtZQUNSLHNEQUFzRDtZQUN0RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7WUFDdEMsZ0VBQWdFO1lBQ2hFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtTQUVoRDtLQUNGO0lBQ0QsMkdBQTJHO0lBQzNHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtDQUU3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIFB1cmVseSBhbiBleGFtcGxlXG4vLyBDaGFuZ2UgdGhlIHJvdXRlcy9jb21wb25lbnRzIHRvIG1lZXQgeW91ciBuZWVkc1xuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcmVkaXJlY3RUbzogJy9ob21lJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICB9LFxuICB7XG4gICAgcGF0aDogXCJob21lXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIC8vICcvaG9tZScgbG9hZGVkIGludG8gYHJvdXRlci1vdXRsZXRgIGluIG1haW4gY29udGVudFxuICAgICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSwgXG4gICAgICAvLyAnL2hvbWUvb3RoZXJQYXRoJyBsb2FkZWQgaW50byBgcm91dGVyLW91dGxldGAgaW4gbWFpbiBjb250ZW50XG4gICAgICB7IHBhdGg6IFwib3RoZXJQYXRoXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LCAgXG4gICAgICAvLyBldGMuXG4gICAgXVxuICB9LCAgIFxuICAvLyAnL3NvbWVOYXZQYWdlJyBwdXNoZWQgb24gbmF2IHN0YWNrIHVzaW5nIGBwYWdlLXJvdXRlci1vdXRsZXRgIChpZSwgcHVzaCBvbiBhIGRldGFpbCB2aWV3IHdpdGggbm8gZHJhd2VyKVxuICB7IHBhdGg6IFwiYWJvdXRcIiwgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9LFxuICAvLyBldGMuXG5dOyJdfQ==