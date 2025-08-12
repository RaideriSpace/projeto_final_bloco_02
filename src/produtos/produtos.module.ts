import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './entities/produtos.entity';
import { ProdutosController } from './controllers/produtos.controller';
import { ProdutosService } from './services/produtos.service';
import { CategoriasModule } from '../categorias/categorias.module';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos]), CategoriasModule],
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [TypeOrmModule],
})
export class ProdutosModule {}
