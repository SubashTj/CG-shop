import { AuthGuard } from "./auth.guard"
import { AuthenticationService } from "./authentication.service";
import { ApiService } from "./api.service";
import {CartService} from "./cart.service"
export const serviceProvider = [
    AuthGuard,
    AuthenticationService,
    ApiService,
    CartService
]