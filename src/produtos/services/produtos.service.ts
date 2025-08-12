import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produtos } from '../entities/produtos.entity';
import { ILike, Repository } from 'typeorm';
import { CategoriasService } from '../../categorias/services/categoria.service';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private produtosRepo: Repository<Produtos>,
    private categoriasService: CategoriasService,
  ) {}

  async findAllProdutos(): Promise<Produtos[]> {
    try {
      return await this.produtosRepo.find({
        relations: {
          categoria: true,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar produtos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByProdutoID(id: number): Promise<Produtos> {
    const produto = await this.produtosRepo.findOne({
      where: {
        id,
      },
      relations: {
        categoria: true,
      },
    });

    if (!produto)
      throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);

    return produto;
  }

  async findAllProdutoByNome(nome: string): Promise<Produtos[]> {
    const produtosList = await this.produtosRepo.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        categoria: true,
      },
    });

    if (produtosList.length === 0)
      throw new HttpException(
        'Não há nenhum produto com esta letra ou nome.',
        HttpStatus.NOT_FOUND,
      );

    return produtosList;
  }

  async findAllProdutoByPrincipio(principio: string): Promise<Produtos[]> {
    const produtosList = await this.produtosRepo.find({
      where: {
        principioAtivo: ILike(`%${principio}%`),
      },
      relations: {
        categoria: true,
      },
    });

    if (produtosList.length === 0)
      throw new HttpException(
        'Não há nenhum produto com este principio ativo.',
        HttpStatus.NOT_FOUND,
      );

    return produtosList;
  }

  async findAllProdutoByCodigo(codigo: string): Promise<Produtos[]> {
    const produtosList = await this.produtosRepo.find({
      where: {
        codigoDeBarras: ILike(`%${codigo}%`),
      },
      relations: {
        categoria: true,
      },
    });

    if (produtosList.length === 0)
      throw new HttpException(
        'Não há nenhum produto com este codigo de barras.',
        HttpStatus.NOT_FOUND,
      );

    return produtosList;
  }

  async findAllProdutoByDescricao(descricao: string): Promise<Produtos[]> {
    const produtosList = await this.produtosRepo.find({
      where: {
        descricao: ILike(`%${descricao}%`),
      },
      relations: {
        categoria: true,
      },
    });

    if (produtosList.length === 0)
      throw new HttpException(
        'Não há nenhum produto com algo relacionado na descrição.',
        HttpStatus.NOT_FOUND,
      );

    return produtosList;
  }

  async createProduto(
    produto: Produtos,
  ): Promise<{ message: string; produto: Produtos }> {
    try {
      await this.categoriasService.findByCategoriaID(produto.categoria.id);
      const createdProduto = await this.produtosRepo.save(produto);
      return {
        message: 'Produto criado com sucesso!',
        produto: createdProduto,
      };
    } catch (error) {
      if (error instanceof HttpException) throw error;

      throw new HttpException(
        'Erro ao criar produto! Verifique os dados enviados.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateProduto(
    produto: Produtos,
  ): Promise<{ message: string; produto: Produtos }> {
    await this.findByProdutoID(produto.id);

    try {
      await this.categoriasService.findByCategoriaID(produto.categoria.id);
      const updatedProduto = await this.produtosRepo.save(produto);
      return {
        message: 'Produto atualizado com sucesso!',
        produto: updatedProduto,
      };
    } catch (error) {
      if (error instanceof HttpException) throw error;

      throw new HttpException(
        'Erro ao atualizar o produto! Verifique os dados enviados.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteProduto(id: number): Promise<{ message: string }> {
    await this.findByProdutoID(id);
    try {
      await this.produtosRepo.delete(id);
      return {
        message: `Produto com o id ${id} deletado com sucesso!`,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao deletar o produto.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
