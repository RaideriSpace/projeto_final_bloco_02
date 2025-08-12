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
import { ProdutosService } from '../services/produtos.service';
import { Produtos } from '../entities/produtos.entity';

@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAllProdutos(): Promise<Produtos[]> {
    return this.produtosService.findAllProdutos();
  }

  @Get('/id/:id')
  @HttpCode(HttpStatus.OK)
  findByProdutoID(@Param('id', ParseIntPipe) id: number): Promise<Produtos> {
    return this.produtosService.findByProdutoID(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findAllProdutoByNome(@Param('nome') nome: string): Promise<Produtos[]> {
    return this.produtosService.findAllProdutoByNome(nome);
  }

  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findAllProdutoByDescricao(
    @Param('descricao') descricao: string,
  ): Promise<Produtos[]> {
    return this.produtosService.findAllProdutoByDescricao(descricao);
  }

  @Get('/principio/:principio')
  @HttpCode(HttpStatus.OK)
  findAllProdutoByPrincipio(
    @Param('principio') principio: string,
  ): Promise<Produtos[]> {
    return this.produtosService.findAllProdutoByPrincipio(principio);
  }

  @Get('/codigo/:codigo')
  @HttpCode(HttpStatus.OK)
  findAllProdutoByCodigo(@Param('codigo') codigo: string): Promise<Produtos[]> {
    return this.produtosService.findAllProdutoByCodigo(codigo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduto(
    @Body() produto: Produtos,
  ): Promise<{ message: string; produto: Produtos }> {
    return this.produtosService.createProduto(produto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateProduto(
    @Body() produto: Produtos,
  ): Promise<{ message: string; produto: Produtos }> {
    return this.produtosService.updateProduto(produto);
  }

  @Delete('/id/:id')
  @HttpCode(HttpStatus.OK)
  deleteProduto(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    return this.produtosService.deleteProduto(id);
  }
}
