import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
    
    handleError(error: any){
       console.log("This is Global Error Handler....");
       
    }

}