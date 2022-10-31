import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

//http://localhost:3000/auth
@Controller('auth')
export class AuthController {
    //injeção de dependência
    constructor(private readonly authService: AuthService){}

    //http://localhost:300/auth/login
    @Post('login')
    async validaLogin(@Body() req) {
        const { login, password } = req;

        if (!login) {
            //return {error: true, msg: 'Login não informado!'};
            throw new HttpException('Login não informado!', 
            HttpStatus.FORBIDDEN);
                
            
        }

        console.log('login', login);
        console.log('senha', password);
        return this.authService.validaLogin(login, password);
    }

}
