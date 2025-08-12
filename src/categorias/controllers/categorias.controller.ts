import { ApiTags } from '@nestjs/swagger';
import { Categorias } from '../entities/categorias.entity';
import { CategoriasService } from './../services/categoria.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@ApiTags("Categorias de Produtos Farmaceuticos")
@Controller('/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAllCategorias(): Promise<Categorias[]> {
    return this.categoriasService.findAllCategoria();
  }

  @Get('/id/:id')
  @HttpCode(HttpStatus.OK)
  findByCategoriaID(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Categorias> {
    return this.categoriasService.findByCategoriaID(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findAllCategoriaByNome(@Param('nome') nome: string): Promise<Categorias[]> {
    return this.categoriasService.findAllCategoriaByNome(nome);
  }

  @Get('/precisa_receita')
  @HttpCode(HttpStatus.OK)
  findAllCategoriaReceitaTrue(): Promise<Categorias[]> {
    return this.categoriasService.findAllCategoriaReceitaTrue();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCategoria(
    @Body() categoria: Categorias,
  ): Promise<{ message: string; categoria: Categorias }> {
    return this.categoriasService.createCategoria(categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateCategoria(
    @Body() categoria: Categorias,
  ): Promise<{ message: string; categoria: Categorias }> {
    return this.categoriasService.updateCategoria(categoria);
  }

  @Delete('/id/:id')
  @HttpCode(HttpStatus.OK)
  deleteCategoria(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    return this.categoriasService.deleteCategoria(id);
  }
}
