import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { AuthDto } from './dto';
import prisma from '../../lib/prisma';

@Injectable()
export class AuthService {
  constructor() {}
  async signup(dto: AuthDto) {
    const { username, password, name, role } = dto;
    const hash = await argon.hash(password);
    try {
      const user = await prisma.user.create({
        data: {
          username,
          password: hash,
          name,
          role,
          storage: {
            create: {}
          }
        },
        select: {
          userId: true,
          username: true,
          name: true,
          storage: true
        }
      });
      return user;
    } catch (err) {
      if (err.code === 'P2002') {
        throw new ForbiddenException('Credentials taken');
      }
      throw err;
    }
  }

  async login(dto: AuthDto) {
    const user = await prisma.user.findUnique({
      where: {
        username: dto.username
      }
    });
    if (!user) throw new ForbiddenException('Credentials incorrect');
    const pwMatches = await argon.verify(user.password, dto.password);
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');
    delete user.password;
    return user;
  }
}
