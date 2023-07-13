import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

// Step 17
@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void) {
    done(null, user);
  }

  deserializeUser(payload: any, done: (err: Error, user: any) => void) {
    done(null, payload);
  }
}
