import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const referer = context.switchToHttp().getRequest().headers.referer;

    console.log(`${Date().toString()} Requesting '${context.getHandler().name}' at ${referer}`);

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`'${context.getHandler().name}' took ${Date.now() - now}ms`)),
      );
  }
}