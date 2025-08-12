import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorias } from '../entities/categorias.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categorias)
    private categoriasRepo: Repository<Categorias>,
  ) {}

  async findAllCategoria(): Promise<Categorias[]> {
    try {
      return await this.categoriasRepo.find();
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar categorias',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByCategoriaID(id: number): Promise<Categorias> {
    const categoria = await this.categoriasRepo.findOne({
      where: {
        id,
      },
      relations: {
        produtos: true,
      },
    });

    if (!categoria)
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);

    return categoria;
  }

  async findAllCategoriaByNome(nome: string): Promise<Categorias[]> {
    const categoriasList = await this.categoriasRepo.find({
      where: {
        categoria_nome: ILike(`%${nome}%`),
      },
      relations: {
        produtos: true,
      },
    });

    if (categoriasList.length === 0)
      throw new HttpException(
        'Não há nenhuma categoria com esta letra ou nome',
        HttpStatus.NOT_FOUND,
      );

    return categoriasList;
  }

  async findAllCategoriaReceitaTrue(): Promise<Categorias[]> {
    const categoriasList = await this.categoriasRepo.find({
      where: {
        precisaReceita: true,
      },
      relations: {
        produtos: true,
      },
    });

    if (categoriasList.length === 0)
      throw new HttpException(
        'Não há categorias de remédios que precisam de receitas.',
        HttpStatus.NOT_FOUND,
      );

    return categoriasList;
  }

  async createCategoria(
    categoria: Categorias,
  ): Promise<{ message: string; categoria: Categorias }> {
    try {
      const createdCategoria = await this.categoriasRepo.save(categoria);
      return {
        message: 'Categoria criada com sucesso!',
        categoria: createdCategoria,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao criar categoria! Verifique os dados enviados.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateCategoria(
    categoria: Categorias,
  ): Promise<{ message: string; categoria: Categorias }> {
    await this.findByCategoriaID(categoria.id);

    try {
      const updatedCategoria = await this.categoriasRepo.save(categoria);
      return {
        message: 'Categoria atualizada com sucesso!',
        categoria: updatedCategoria,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao atualizar a categoria! Verifique os dados enviados.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteCategoria(id: number): Promise<{ message: string }> {
    await this.findByCategoriaID(id);
    try {
      await this.categoriasRepo.delete(id);
      return {
        message: `Categoria com o id ${id} deletada com sucesso!`,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao deletar a categoria.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
