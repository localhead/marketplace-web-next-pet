import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

// Это гуард который будет выхзваться перед эндпоитном и будет проверять есть ли в реквесте айди
@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated();
  }
}
