import { Controller, Post, Body, HttpException, HttpStatus } from "@nestjs/common";
import { CriaUsuarioDTO } from "../dtos/criacao-usuarios.dto";
import { UsuarioService } from "../services/usuario.service";

@Controller("usuarios")
export class UsuarioController {

  constructor(private usuarioService: UsuarioService) { }

  @Post("cadastra")
  public async store(@Body() usuario: CriaUsuarioDTO) {
    try {
      return await this.usuarioService.store(usuario);
    } catch (erro) {
      if (erro.code == 23505)
        throw new HttpException({ reason: erro.detail }, HttpStatus.CONFLICT);
      throw new HttpException({ reason: erro }, HttpStatus.BAD_REQUEST);
    }
  }
}