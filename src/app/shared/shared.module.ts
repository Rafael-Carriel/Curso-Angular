import { ModuleWithProviders, NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shooping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";


@NgModule({
    declarations: [
        InputComponent, 
        RadioComponent, 
        RatingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent, 
        RadioComponent, 
        RatingComponent, 
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule],
})

export class SharedModule{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                OrderService,
                ShoppingCartService,
                RestaurantsService
            ]
        }
    }
}