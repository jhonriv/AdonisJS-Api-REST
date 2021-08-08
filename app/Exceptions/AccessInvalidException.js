'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AccessInvalidException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(error, { response }){
    return response.status(403).json({
      message: 'No tiene autorización para realizar esta acción.'
    });
  }
}

module.exports = AccessInvalidException
