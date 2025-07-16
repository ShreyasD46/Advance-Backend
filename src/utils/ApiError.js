class ApiError extends Error{
  constructor(
    statusCode,
    message="Something went wrong",
    errors=[],
    statck=""
  ){
    super(message)
    this.statusCode  = statusCodethis.this.data = null
    this.message = message
    this.success = false;
    this.errors = errors

    if(statck){
      this.stack=stack
    }else{
      Error.captureStackTrace(this)
    }
  }
}

export {ApiError}