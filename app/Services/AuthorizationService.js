const AccessInvalid = use('App/Exceptions/AccessInvalidException');
const NotFound = use('App/Exceptions/NotFoundException');

class AuthorizationService{
    VerificationAuth(resource, user){
        if (!resource){
            throw new NotFound();
        }

        if (resource.user_id !== user.id){
            throw new AccessInvalid();
        }
    }
}

module.exports = new AuthorizationService