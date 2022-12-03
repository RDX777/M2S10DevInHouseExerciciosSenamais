import { IsEmail, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CriaUsuarioDTO {

  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @IsString()
  @IsNotEmpty()
  readonly usuario: string;

  @IsEmail()
  readonly email: string;

  @IsUrl()
  readonly urlFoto: string;
}