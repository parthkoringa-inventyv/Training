import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("interceptor called: ", req);
  const token = localStorage.getItem('access_token');
  if(token)
  {
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    console.log("interceptor added header: ", req)
  }
  return next(req);
};
