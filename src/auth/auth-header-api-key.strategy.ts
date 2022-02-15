import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-headerapikey';
import { UserRegisterForm } from './user-register-form/user-register-form.dto';
import { UserRegisterService } from './user-register-form/user-register-service';

@Injectable()
export class HeaderApiKeyStrategy extends PassportStrategy(
  Strategy,
  'api-key',
) {
  private readonly logger = new Logger();
  constructor(private readonly userRegisterService: UserRegisterService) {
    super(
      { header: 'api-key', prefix: '' },
      false,
      async (apiKey: string, done: any) => {
        try {
          const user: UserRegisterForm =
            await this.userRegisterService.checkApiKey(apiKey);
          if (!user) {
            this.logger.error('invalid API key');
            return done(null, false);
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      },
    );
  }
}
